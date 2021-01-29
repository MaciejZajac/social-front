import { Space, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledList = styled.ul`
    padding: 0;
    list-style: none;
`;

const StyledListItem = styled.li`
    box-shadow: 0px 0px 16px #dddddd;
    border-radius: 15px;
    padding: 15px;
    margin: 1.75rem 0;
`;

interface IHomeListProps {
    offerList: any;
}

const HomeList = ({ offerList }: IHomeListProps) => {
    return (
        <StyledList>
            {offerList.map((item: any) => {
                return (
                    <Link to={`/oferta/${item._id}`} key={item._id}>
                        <StyledListItem>
                            <Space direction='horizontal' size={20} wrap>
                                <Typography.Title level={4}>{item.title}</Typography.Title>
                                <Typography.Text>{item.owner?.email}</Typography.Text>
                            </Space>

                            <Typography.Paragraph>{item.description}</Typography.Paragraph>
                        </StyledListItem>
                    </Link>
                );
            })}
        </StyledList>
    );
};

export default HomeList;
