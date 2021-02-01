import { Button, message, Space, Typography } from 'antd';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from '../../context/UserContext';

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
    offerList: any;
    getOffers: Function;
}

const DashboardOfferList = ({ offerList, getOffers }: ICompanyListProps) => {
    const { user } = useContext(UserContext);
    const [deleteLoading, setDeleteLoading] = useState(false);

    const handleDeleteOffer = async (id: string) => {
        try {
            setDeleteLoading(true);
            await axios.delete(`/offer/${id}`);
            setDeleteLoading(false);

            getOffers();
        } catch (err) {
            setDeleteLoading(false);
            console.log('err', err);
            message.error('Coś poszło nie tak');
        }
    };

    return (
        <StyledList>
            {offerList.map((item: any) => {
                return (
                    <StyledListItem key={item._id}>
                        <Space direction='horizontal' size={20} wrap>
                            <Typography.Title level={4}>{item.title}</Typography.Title>
                            <Typography.Text>{item.owner.email}</Typography.Text>
                        </Space>

                        <Typography.Paragraph>{item.description}</Typography.Paragraph>

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
            })}
        </StyledList>
    );
};

export default DashboardOfferList;
