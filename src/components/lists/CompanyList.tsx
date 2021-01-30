import React from 'react';
import styled from 'styled-components';
import { Space, Typography } from 'antd';
import { Link } from 'react-router-dom';

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

interface ICompanyItem {
    companyDescription: string;
    companyName: string;
    createdAt: string;
    _id: string;
}

interface ICompanyListProps {
    companyList: ICompanyItem[];
}

const CompanyList = ({ companyList }: ICompanyListProps) => {
    return (
        <StyledList>
            {companyList.map((item) => {
                return (
                    <Link to={`/profil/${item._id}`} key={item._id}>
                        <StyledListItem>
                            <Typography.Title level={4}>{item.companyName}</Typography.Title>
                            <Typography.Paragraph>{item.companyDescription}</Typography.Paragraph>
                            <Typography.Text type='secondary'>{item.createdAt}</Typography.Text>
                        </StyledListItem>
                    </Link>
                );
            })}
        </StyledList>
    );
};

export default CompanyList;
