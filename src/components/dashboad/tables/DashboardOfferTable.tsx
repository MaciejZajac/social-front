import { Button, message, Space, Table, Typography } from 'antd';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from '../../../context/UserContext';
import { IDashboardOffer } from '../../../types/productTypes';

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
    offerList: IDashboardOffer[];
}

const DashboardOfferTable = ({ offerList }: ICompanyListProps) => {
    const [deleteLoading, setDeleteLoading] = useState(false);

    const handleDeleteOffer = async (id: string) => {
        try {
            setDeleteLoading(true);
            await axios.delete(`/offer/${id}`);
            setDeleteLoading(false);
        } catch (err) {
            setDeleteLoading(false);
            message.error('Coś poszło nie tak');
        }
    };

    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            key: '_id',
        },
        {
            title: 'Job title',
            dataIndex: 'jobTitle',
            key: 'jobTitle',
        },
        {
            title: 'Pension from',
            dataIndex: 'pensionFrom',
            key: 'pensionFrom',
        },
        {
            title: 'Pension to',
            dataIndex: 'pensionTo',
            key: 'pensionTo',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text: any, record: IDashboardOffer) => {
                return (
                    <Space size='middle'>
                        <Button type='default' loading={deleteLoading}>
                            <Link to={`/dashboard/oferta/${record._id}`}>Update</Link>
                        </Button>
                        <Button danger onClick={() => handleDeleteOffer(record._id)} loading={deleteLoading}>
                            Delete
                        </Button>
                    </Space>
                );
            },
        },
    ];

    return (
        <StyledList>
            <Table dataSource={offerList} columns={columns} rowKey='_id' />
            {/* {offerList.map((item) => {
                return (
                    <StyledListItem key={item._id}>
                        <Space direction='horizontal' size={20} wrap>
                            <Typography.Title level={4}>{item.jobTitle}</Typography.Title>
                            <Typography.Text>{item.owner.email}</Typography.Text>
                        </Space>

                        <Typography.Paragraph>{item.jobDescription}</Typography.Paragraph>
                        <Typography.Paragraph>
                            Pensja: {item.pensionFrom} - {item.pensionTo} PLN
                        </Typography.Paragraph>
                        <Space direction='horizontal' size={30} wrap>
                            <Button
                                type='primary'
                                danger
                                loading={deleteLoading}
                                onClick={() => handleDeleteOffer(item._id)}
                            >
                                Usuń ofertę
                            </Button>
                            <Button type='primary'>
                                <Link to={`/dashboard/oferta/${item._id}`}>Przejdź do oferty</Link>
                            </Button>
                        </Space>
                    </StyledListItem>
                );
            })} */}
        </StyledList>
    );
};

export default DashboardOfferTable;
