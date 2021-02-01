import { Typography } from 'antd';
import React from 'react';
import { IUserDetails } from '../../containers/Dashboard';

const ProfileData = ({ data }: { data: IUserDetails }) => {
    return (
        <>
            <Typography.Title level={2}>Twoje dane</Typography.Title>
            Email: <strong>{data?.email}</strong>
            <br />
            Lokalizacja: <strong>{data?.location}</strong>
            <br />
            Nazwa firmy: <strong>{data?.companyName}</strong>
            <br />
            Krótki opis: <strong>{data?.shortDescription}</strong>
            <br />
            Linkedin: <strong>{data?.linkedin || 'Brak'}</strong>
            <br />
            Liczba ofert: <strong>{data?.numberOfOffers}</strong>
            <br />
            Publiczny profil firmy: <strong>{data?.hasCompanyProfile ? 'Tak' : 'Nie'}</strong>
            <br />
            Konto utworzono: <strong>{data?.createdAt}</strong>
            <br />
        </>
    );
};

export default ProfileData;
