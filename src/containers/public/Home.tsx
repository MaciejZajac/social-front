import { Col, Row, Typography } from 'antd';
import { useEffect, useState } from 'react';
import JobOfferList from '../../components/joboffers/JobOfferList';
import useQuery from '../../hooks/useQuery';
import { IDashboardOffer } from '../../types/productTypes';
import InfiniteScroll from 'react-infinite-scroller';
import styled from 'styled-components';
import Filters from '../../components/joboffers/Filters';
import useOfferQuery from '../../hooks/useOfferQuery';

const StyledContainer = styled.div`
    padding: 20px;
    overflow-y: scroll;
    /* width */
    ::-webkit-scrollbar {
        width: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 20px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
        cursor: pointer;
    }
`;

interface IFilters {
    pensionFrom?: string;
    pensionTo?: string;
    limit: 10;
}
interface IData {
    offerList: IDashboardOffer[];
    totalCount: number;
}

const Home = () => {
    const [page, setPage] = useState(1);
    const [filters, setFilters] = useState<IFilters>({ limit: 10 });
    const { loading, error, offers, hasMore } = useOfferQuery(filters, page);
    // console.log('error', error);
    // const [filterObj, setFilterObj] = useState<IFilters>({ page: 1, limit: 10 });
    // const initialParam = createQueryString({ ...filterObj });
    // const [url, setUrl] = useState<string>(`/offer?${initialParam}`);

    // const { data, loading, statusCode } = useQuery({ url });
    // const { offerList, totalCount }: IData = data;
    // const [totalList, setTotalList] = useState<IDashboardOffer[]>([]);

    // useEffect(() => {
    //     if (offerList) {
    //         setTotalList([...totalList, ...offerList]);
    //     }
    // }, [offerList]);

    // useEffect(() => {
    //     handleFiltering();
    // }, [filterObj]);

    const handleInfiniteOnLoad = () => {
        if (loading) return;
        // console.log('totalList', totalList);
        // console.log('totalCount', totalCount);
        // if (totalList.length === totalCount) {
        //     setHasMore(false);
        //     return;
        // }
        setPage(page + 1);
        // handleFiltering();
    };

    // const handleFiltering = () => {
    //     const queryString = createQueryString(filterObj);
    //     setUrl(`/offer?${queryString}`);
    //     console.log('queryString', queryString);
    // };

    const getFilters = (values: any) => {
        setFilters({ ...values, page: 1, limit: 10 });
    };

    return (
        <Row style={{ height: '100%' }}>
            <Col
                style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                xs={{ span: 22, offset: 1 }}
                md={{ span: 16, offset: 4 }}
                xl={{ span: 12, offset: 6 }}
            >
                <Typography.Title level={1}>Lista Ofert</Typography.Title>
                <Filters filterFunc={getFilters} />
                <StyledContainer>
                    <InfiniteScroll
                        initialLoad={false}
                        loadMore={handleInfiniteOnLoad}
                        hasMore={!loading && hasMore}
                        useWindow={false}
                    >
                        <JobOfferList offerList={offers} spinnerLoading={loading && hasMore} />
                    </InfiniteScroll>
                </StyledContainer>
            </Col>
        </Row>
    );
};

export default Home;
