import React from 'react';
import styled from 'styled-components';
import { Space, Typography } from 'antd';

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

interface ICompanyListProps {
    companyList: any;
}

const CompanyList = ({ companyList }: ICompanyListProps) => {
    return (
        <StyledList>
            {companyList.map((item: any) => {
                return (
                    <StyledListItem>
                        <Space direction='horizontal' size={20} wrap>
                            <Typography.Title level={4}>{item.email}</Typography.Title>
                        </Space>
                    </StyledListItem>
                );
            })}
        </StyledList>
    );
};

export default CompanyList;
