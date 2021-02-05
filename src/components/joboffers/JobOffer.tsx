import { Button, Image, PageHeader, Space, Tag, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { IDashboardOffer } from '../../types/productTypes';

const { Title, Paragraph } = Typography;

interface IJobOfferProps {
    offer: IDashboardOffer;
}

const JobOffer = ({ offer }: IJobOfferProps) => {
    const handleApply = () => {
        // console.log('Apply');
    };

    return (
        <>
            <PageHeader onBack={() => window.history.back()} title={'asd'} />
            <div>
                <div style={{ display: 'flex' }}>
                    <Image
                        src={`https://logo.clearbit.com/${offer.owner.companyUrl}`}
                        style={{ width: '100px', height: '100px' }}
                    />
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '100%',
                        }}
                    >
                        <Title level={3}>{offer.owner.companyName}</Title>
                        <Paragraph>
                            {offer.pensionFrom} - {offer.pensionTo} zł
                        </Paragraph>
                    </div>
                </div>

                {offer.owner.companyPublicProfile && (
                    <Link to={`/profil/${offer.owner?._id}`}>
                        <Button>Profil pracodawcy</Button>
                    </Link>
                )}
            </div>
            <div>
                <Title level={5}>Wymagane technologie </Title>
                <div>
                    {offer.requiredSkills.map((str) => (
                        <Tag key={str}>{str}</Tag>
                    ))}
                </div>
            </div>

            <div style={{ margin: '30px 0' }}>
                <Title level={5}>Opis stanowiska </Title>
                <Paragraph>{offer.jobDescription}</Paragraph>
            </div>

            <div style={{ margin: '30px 0' }}>
                <Button type='primary' onClick={handleApply}>
                    Aplikuj
                </Button>
            </div>
        </>
    );
};

export default JobOffer;
