import { Col, Row, Typography } from 'antd';
import { useEffect, useState } from 'react';
import JobOfferList from '../../components/joboffers/JobOfferList';
import useQuery from '../../hooks/useQuery';
import { IDashboardOffer } from '../../types/productTypes';
import InfiniteScroll from 'react-infinite-scroller';
import styled from 'styled-components';
import Filters from '../../components/joboffers/Filters';
import { createQueryString } from '../../hooks/createQueryString';

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
    page: number;
    limit: 10;
}
interface IData {
    offerList: IDashboardOffer[];
    totalCount: number;
}
const Home = () => {
    const [filterObj, setFilterObj] = useState<IFilters>({ page: 1, limit: 10 });
    const initialParam = createQueryString({ ...filterObj });
    const [url, setUrl] = useState<string>(`/offer?${initialParam}`);

    const { data, loading, statusCode } = useQuery({ url });
    const { offerList, totalCount }: IData = data;
    const [totalList, setTotalList] = useState<IDashboardOffer[]>([]);

    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        if (offerList) {
            setTotalList([...totalList, ...offerList]);
        }
    }, [offerList]);

    useEffect(() => {
        handleFiltering();
    }, [filterObj]);

    const handleInfiniteOnLoad = () => {
        console.log('totalList', totalList);
        console.log('totalCount', totalCount);
        if (totalList.length === totalCount) {
            setHasMore(false);
            return;
        }
        setFilterObj({ ...filterObj, page: filterObj.page + 1, limit: 10 });
        handleFiltering();
    };

    const handleFiltering = () => {
        const queryString = createQueryString(filterObj);
        setUrl(`/offer?${queryString}`);
        console.log('queryString', queryString);
    };

    const getFilters = (values: any) => {
        setTotalList([]);
        console.log('values', values);
        setFilterObj({ ...filterObj, ...values, page: 1, limit: 10 });
    };

    return (
        <Row style={{ height: '100%' }}>
            <Col
                style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                xs={{ span: 22, offset: 1 }}
                md={{ span: 16, offset: 4 }}
            >
                <Typography.Title level={1}>Lista Ofert</Typography.Title>
                <Filters filterFunc={getFilters} />
                <StyledContainer>
                    <InfiniteScroll
                        initialLoad={false}
                        pageStart={0}
                        loadMore={handleInfiniteOnLoad}
                        hasMore={!loading && hasMore}
                        useWindow={false}
                    >
                        <JobOfferList offerList={totalList} spinnerLoading={loading} />
                    </InfiniteScroll>
                </StyledContainer>
            </Col>
        </Row>
    );
};

export default Home;
