import { Col, Row, Typography } from 'antd';
import UpdateProfileForm from '../../components/dashboad/forms/UpdateProfileForm';

const CompleteProfile = () => {
    return (
        <>
            <Row>
                <Col md={{ span: 16, offset: 4 }}>
                    <Typography.Title>Your profile requires update</Typography.Title>
                    <Typography.Paragraph>You need to complete you profile informations</Typography.Paragraph>
                </Col>
            </Row>

            <Row>
                <Col md={{ span: 16, offset: 4 }}>
                    <UpdateProfileForm />
                </Col>
            </Row>
        </>
    );
};

export default CompleteProfile;
