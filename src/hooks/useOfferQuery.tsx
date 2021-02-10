import axios, { Canceler } from 'axios';
import { useEffect, useState } from 'react';
import { IDashboardOffer } from '../types/productTypes';

// TODO:
// 1. jak zrobić, by nie ładował po 2-3 razy jak ktoś szybko scrolluje.
// 2. Jak zrobić by anulowało z cancel token i nie anulowało na rzecz kolejnych page, których nie ma.

export default function useOfferQuery(filters: any, page: number) {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const [offers, setOffers] = useState<IDashboardOffer[]>([]);
    const [hasMore, setHasMore] = useState<boolean>(false);

    useEffect(() => {
        setOffers([]);
    }, [filters]);

    useEffect(() => {
        setLoading(true);
        setError(false);
        // let cancel: Canceler;
        axios({
            method: 'GET',
            url: `/offer`,
            params: {
                ...filters,
                page,
            },
            // cancelToken: new axios.CancelToken((c: Canceler) => (cancel = c)),
        })
            .then((res) => {
                setOffers((prevState) => {
                    const newOffers = [...prevState, ...res.data.offerList];
                    if (res.data.totalCount === newOffers.length) {
                        setHasMore(false);
                    } else {
                        setHasMore(true);
                    }
                    return newOffers;
                });

                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                // if (axios.isCancel(err)) return;
                setError(true);
            });

        return;
    }, [filters, page]);

    return { loading, error, offers, hasMore };
}
