import { PageHeader, Space, Tag, Typography } from 'antd';
import { FacebookFilled, LinkedinFilled } from '@ant-design/icons';

interface IUserInfoProps {
    profile: any;
}
const UserInfo = ({ profile }: IUserInfoProps) => {
    return (
        <>
            <PageHeader onBack={() => window.history.back()} title='Profil firmy' />
            <Typography.Title level={4}>{profile?.companyName}</Typography.Title>
            <Typography.Paragraph>{profile?.companyDescription}</Typography.Paragraph>
            <Typography.Text type='secondary'>{profile?.createdAt}</Typography.Text>
            <br />
            <br />

            <Typography.Title level={5}>Używane technologie</Typography.Title>
            {profile?.technologiesUsed?.map((item: any) => (
                <Tag key={item}>{item}</Tag>
            ))}
            <br />
            <br />
            <Space size={10}>
                {profile?.socialMedia?.linkedIn && (
                    <a href='#'>
                        <FacebookFilled style={{ fontSize: '40px' }} />
                    </a>
                )}
                {profile?.socialMedia?.facebook && (
                    <a href='#'>
                        <LinkedinFilled style={{ fontSize: '40px' }} />
                    </a>
                )}
            </Space>
        </>
    );
};

export default UserInfo;
