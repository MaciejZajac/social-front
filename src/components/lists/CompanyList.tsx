import React from 'react';
import styled from 'styled-components';
import { Space, Typography, List, Avatar, Tag } from 'antd';
import { Link } from 'react-router-dom';
import { IUserDetails } from '../../types/userTypes';

const StyledListItem = styled.li`
    box-shadow: 0px 0px 16px #dddddd;
    border-radius: 15px;
    padding: 15px;
    margin: 1.75rem 0;
`;

interface ICompanyListProps {
    companyList: IUserDetails[];
}

const CompanyList = ({ companyList }: ICompanyListProps) => {
    return (
        <List
            itemLayout='vertical'
            size='large'
            dataSource={companyList}
            renderItem={(item) => (
                <Link to={`/profil/${item._id}`} key={item._id}>
                    <StyledListItem style={{ margin: '25px 0' }}>
                        <List.Item.Meta
                            avatar={
                                <Avatar
                                    style={{ width: '70px', height: '70px' }}
                                    src={`https://logo.clearbit.com/${item.companyUrl}`}
                                />
                            }
                            title={
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Space size={6} direction='horizontal'>
                                        <Typography.Title level={2}>Netguru</Typography.Title>
                                        <div>Software house</div>
                                    </Space>
                                    <div>Warszawa</div>
                                </div>
                            }
                            description={
                                <>
                                    Building systems of a tomorrow
                                    <br /> <Tag>10 ofert pracy</Tag>
                                </>
                            }
                        />
                    </StyledListItem>
                </Link>
            )}
        />
    );
};

export default CompanyList;
