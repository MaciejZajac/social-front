import { Button, Col, message, Row, Steps } from 'antd';
import { useState } from 'react';
import PricingFirstStep from './PricingFirstStep';
import PricingSecondStep from './PricingSecondStep';
import PricingThirdStep from './PricingThirdStep';
const { Step } = Steps;

export enum offerEnum {
    test = 'TEST',
    basic = 'PODSTAWOWY',
    premium = 'PREMIUM',
}

const Pricing = () => {
    const [current, setCurrent] = useState(0);
    const [selectedOffer, setSelectedOffer] = useState<offerEnum>();

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const steps = [
        {
            title: 'Pakiet',
            content: <PricingFirstStep next={next} setSelectedOffer={setSelectedOffer} />,
        },
        {
            title: 'Formularz',
            content: <PricingSecondStep />,
        },
        {
            title: 'Podsumowanie',
            content: <PricingThirdStep />,
        },
    ];

    return (
        <Row style={{ margin: '40px 0' }}>
            <Col sm={{ span: 24, offset: 0 }} md={{ span: 22, offset: 1 }} lg={{ span: 16, offset: 4 }}>
                <Steps current={current}>
                    {steps.map((item) => (
                        <Step key={item.title} title={item.title} />
                    ))}
                </Steps>

                <div style={{ margin: '40px 0' }}>{steps[current].content}</div>
                <div className='steps-action'>
                    {current > 0 && (
                        <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                            Previous
                        </Button>
                    )}
                    {/* {current < steps.length - 1 && (
                        <Button type='primary' onClick={() => next()}>
                            Next
                        </Button>
                    )} */}
                    {current === steps.length - 1 && (
                        <Button type='primary' onClick={() => message.success('Processing complete!')}>
                            Done
                        </Button>
                    )}
                </div>
            </Col>
        </Row>
    );
};

export default Pricing;
