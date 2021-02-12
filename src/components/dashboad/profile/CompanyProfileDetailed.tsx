import { Tag, Typography } from 'antd';
import { useEffect } from 'react';
import useQuery from '../../../hooks/useQuery';
import Spinner from '../../other/Spinner';

interface ICompanyProfileDetailed {
    profileId: string;
}

const CompanyProfileDetailed = ({ profileId }: ICompanyProfileDetailed) => {
    const { data, loading, statusCode } = useQuery({
        url: `/companyProfile/${profileId}`,
    });

    const { companyProfile }: any = data;

    if (loading) return <Spinner />;

    return (
        <div>
            <Typography.Title level={4}>Szczegółowy opis firmy</Typography.Title>
            <Typography.Paragraph>{companyProfile.companyDescription}</Typography.Paragraph>
            <Typography.Title level={4}>Zadeklarowane technologie</Typography.Title>
            {companyProfile.technologiesUsed.map((str: string) => (
                <Tag key={str}>{str}</Tag>
            ))}
        </div>
    );
};

export default CompanyProfileDetailed;
