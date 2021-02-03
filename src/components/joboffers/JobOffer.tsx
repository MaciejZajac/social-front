import { Button, Image, PageHeader, Space, Tag, Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Title, Paragraph } = Typography;

interface IJobOfferProps {
    offer: any;
}

const JobOffer = ({ offer }: IJobOfferProps) => {
    console.log('offer', offer);
    const handleApply = () => {
        console.log('Apply');
    };

    return (
        <>
            <PageHeader onBack={() => window.history.back()} title={'asd'} />
            <div>
                <Space size={20} direction='horizontal'>
                    <Image src={`https://logo.clearbit.com/clawrock.com`} style={{ width: '100px', height: '100px' }} />
                    <div>
                        <Title level={3}>Senior Front-end Engineer</Title>
                        <Title level={4}> 10 000 - 14 500 PLN</Title>
                    </div>
                </Space>

                <Link to={`/profil/${offer.owner?._id}`}>
                    <Button>Profil pracodawcy</Button>
                </Link>
            </div>
            <div>
                <Title level={5}>Wymagane technologie </Title>
                <div>
                    <Tag>React</Tag> <Tag>JavaScript</Tag> <Tag>HTML</Tag> <Tag>CSS</Tag>
                </div>
            </div>

            <div style={{ margin: '30px 0' }}>
                <Title level={5}>Opis stanowiska </Title>
                <Paragraph>
                    Wyma Mediavine,a fast-growing advertising management company representing over 7,500 websites in the
                    food, travel, lifestyle, and entertainment space, is looking for a talented front-end software
                    engineer to join our team. <br />
                    <br /> We are looking for an engineer to work on Grow.me, a new platform by Mediavine to help
                    publishers increase traffic, make more money, broaden their audience and improve user experience.
                    <br />
                    <br /> You'll work on a brand new set of applications using the latest technologies (React,
                    styled-components, GraphQL, TypeScript, Prisma), and impact thousands of Mediavine publisher sites
                    that collectively receive millions of page views per month.
                    <br />
                    <br />
                    As a senior front-end engineer, you'll drive development of these new applications and make
                    technical and process improvements. If you're looking to make a big impact with a really fun tech
                    stack, hit us up.
                </Paragraph>
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
