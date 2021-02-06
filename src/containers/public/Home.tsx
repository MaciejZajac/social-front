import { Col, Row, Typography } from 'antd';
import { useEffect, useState } from 'react';
import JobOfferList from '../../components/joboffers/JobOfferList';
import useQuery from '../../hooks/useQuery';
import { IDashboardOffer } from '../../types/productTypes';
import InfiniteScroll from 'react-infinite-scroller';
import styled from 'styled-components';

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
interface IData {
    offerList: IDashboardOffer[];
    totalCount: number;
}
const Home = () => {
    const [page, setPage] = useState<number>(1);
    const [url, setUrl] = useState<string>(`/offer?page=${page}&limit=10`);
    const { data, loading, statusCode } = useQuery({ url });
    const { offerList, totalCount }: IData = data;
    const [totalList, setTotalList] = useState<IDashboardOffer[]>([]);

    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        if (offerList) {
            setTotalList([...totalList, ...offerList]);
        }
    }, [offerList]);

    const handleInfiniteOnLoad = () => {
        if (loading) return;
        if (totalList.length === totalCount) {
            setHasMore(false);
            return;
        }
        setPage(page + 1);
        setUrl(`/offer?page=${page}&limit=10`);
    };

    return (
        <Row style={{ height: '100%' }}>
            <Col
                style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                xs={{ span: 22, offset: 1 }}
                md={{ span: 16, offset: 4 }}
            >
                <Typography.Title level={1}>Lista Ofert</Typography.Title>

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
