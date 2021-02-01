import { Space, Tag } from 'antd';
import { List } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { HomeOutlined } from '@ant-design/icons';
import { IDashboardOffer } from '../../containers/Dashboard';

const StyledListItem = styled(List.Item)`
    box-shadow: 0px 0px 16px #dddddd;
    border-radius: 15px;
    padding: 15px;
    margin: 1.75rem 0;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
    }
`;

interface IHomeListProps {
    offerList: IDashboardOffer[];
}

const HomeList = ({ offerList }: IHomeListProps) => {
    return (
        <List
            itemLayout='vertical'
            size='large'
            dataSource={offerList}
            renderItem={(item) => (
                <Link to={`/oferta/${item._id}`} key={item._id}>
                    <StyledListItem style={{ margin: '25px 0' }}>
                        <List.Item.Meta
                            avatar={
                                <Avatar
                                    style={{ width: '70px', height: '70px' }}
                                    src={`https://logo.clearbit.com/clawrock.com`}
                                />
                            }
                            title={
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>{item.jobTitle}</div>
                                    <div>
                                        {item.pensionFrom} - {item.pensionTo} PLN
                                    </div>
                                </div>
                            }
                            description={
                                <>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div>
                                            <Space style={{ marginRight: '15px' }}>Nazwa Firmy</Space>
                                            <Space size={6} direction='horizontal'>
                                                <HomeOutlined />
                                                Warszawa
                                            </Space>
                                        </div>
                                        <div>remote friendly</div>
                                    </div>
                                </>
                            }
                        />

                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                                <Tag>React</Tag> <Tag>JavaScript</Tag> <Tag>HTML</Tag> <Tag>CSS</Tag>
                            </div>
                            <div>Oferta dodana: 29.01.2021</div>
                        </div>
                    </StyledListItem>
                </Link>
            )}
        />
    );
};

export default HomeList;
