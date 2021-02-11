import { Button, Col, Row, Typography } from 'antd';
import { offerEnum } from './Pricing';
import styled from 'styled-components';

const StyledContainer = styled.div`
    display: flex;
`;
const StyledOption = styled.div`
    flex-grow: 1;
    margin: 0 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const StyledOptionContent = styled.div`
    flex: 1;
    padding: 30px 10px;
`;

interface IFirstStepProps {
    next: Function;
    setSelectedOffer: Function;
}

interface ISingleOption {
    title: string;
    price: string;
    includes: string[];
    next: offerEnum;
}

const possibleOptions: ISingleOption[] = [
    {
        title: 'Testowy',
        price: 'Darmo',
        includes: ['Oferta ważna 30 dni'],
        next: offerEnum.test,
    },
    {
        title: 'Podstawowy',
        price: '50 zł',
        includes: ['Oferta ważna 30 dni', 'możliwość odnawiania oferty'],
        next: offerEnum.basic,
    },
    {
        title: 'Premium',
        price: '100 zł',
        includes: ['Oferta ważna 30 dni', 'możliwość odnawiania oferty', 'możliwość edycji oferty'],
        next: offerEnum.premium,
    },
];

const PricingFirstStep = ({ next, setSelectedOffer }: IFirstStepProps) => {
    const handleNext = (type: offerEnum) => {
        setSelectedOffer(type);
        next();
    };

    return (
        <StyledContainer>
            {possibleOptions.map((option) => (
                <StyledOption key={option.title}>
                    <Typography.Title level={1} style={{ margin: 0 }}>
                        {option.title}
                    </Typography.Title>
                    <Typography.Title level={4} style={{ margin: 0 }}>
                        {option.price}
                    </Typography.Title>
                    <StyledOptionContent>
                        {option.includes.map((str, index) => (
                            <div key={index} style={{ margin: '4px 0', textAlign: 'center' }}>
                                {str}
                            </div>
                        ))}
                    </StyledOptionContent>
                    <Button type='primary' onClick={() => handleNext(option.next)}>
                        przejdź dalej
                    </Button>
                </StyledOption>
            ))}
        </StyledContainer>
    );
};

export default PricingFirstStep;
