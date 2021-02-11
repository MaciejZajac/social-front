import { Button, Col, Row, Typography } from 'antd';
import { offerEnum } from './Pricing';

interface IFirstStepProps {
    next: Function;
    setSelectedOffer: Function;
}

const PricingFirstStep = ({ next, setSelectedOffer }: IFirstStepProps) => {
    const handleNext = (type: offerEnum) => {
        setSelectedOffer(type);
        next();
    };

    return (
        <Row>
            <Col sm={{ span: 24, offset: 0 }} lg={{ span: 8, offset: 0 }}>
                <Typography.Title level={1}>Testowy</Typography.Title>
                <Typography.Title level={4}>Darmo, wypróbuj pan</Typography.Title>
                Oferta ważna 30 dni
                <br />
                <Button type='primary' onClick={() => handleNext(offerEnum.test)}>
                    przejdź dalej
                </Button>
            </Col>
            <Col sm={{ span: 24, offset: 0 }} lg={{ span: 8, offset: 0 }}>
                <Typography.Title level={1}>Podstawowy</Typography.Title>
                <Typography.Title level={4}>50 zł</Typography.Title>
                Oferta ważna 30 dni
                <br />
                możliwość odnawiania oferty
                <br />
                <Button type='primary' onClick={() => handleNext(offerEnum.basic)}>
                    przejdź dalej
                </Button>
            </Col>
            <Col sm={{ span: 24, offset: 0 }} lg={{ span: 8, offset: 0 }}>
                <Typography.Title level={1}>Premium</Typography.Title>
                <Typography.Title level={4}>100 zł</Typography.Title>
                Oferta ważna 30 dni
                <br />
                możliwość odnawiania oferty
                <br />
                możliwość edycji oferty
                <br />
                <Button type='primary' onClick={() => handleNext(offerEnum.premium)}>
                    przejdź dalej
                </Button>
            </Col>
        </Row>
    );
};

export default PricingFirstStep;
