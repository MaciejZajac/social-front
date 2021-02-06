import { Button, Form, Input, Select, Space } from 'antd';

interface IFiltersProps {
    filterFunc: (filterObj: any) => void;
}

const Filters = ({ filterFunc }: IFiltersProps) => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        filterFunc(values);
    };

    const onReset = () => {
        form.resetFields();
        filterFunc({});
    };

    return (
        <Form form={form} layout='inline' onFinish={onFinish}>
            <Form.Item name='jobTitle'>
                <Input placeholder='Szukanie po frazie' allowClear />
            </Form.Item>
            <Form.Item name='pensionFrom' label='Pensja od'>
                <Select placeholder='Pensja od' style={{ width: '100px' }} allowClear>
                    <Select.Option value='3000'>3000 zł</Select.Option>
                    <Select.Option value='5000'>5000 zł</Select.Option>
                    <Select.Option value='8000'>8000 zł</Select.Option>
                    <Select.Option value='10000'>10000 zł</Select.Option>
                    <Select.Option value='15000'>15000 zł</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item name='pensionTo' label='Pensja do'>
                <Select placeholder='Pensja do' style={{ width: '100px' }} allowClear>
                    <Select.Option value='3000'>3000 zł</Select.Option>
                    <Select.Option value='5000'>5000 zł</Select.Option>
                    <Select.Option value='8000'>8000 zł</Select.Option>
                    <Select.Option value='10000'>10000 zł</Select.Option>
                    <Select.Option value='15000'>15000 zł</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item>
                <Space size='middle'>
                    <Button type='primary' htmlType='submit'>
                        Filtruj
                    </Button>
                    <Button htmlType='button' onClick={onReset}>
                        Reset
                    </Button>
                </Space>
            </Form.Item>
        </Form>
    );
};

export default Filters;
