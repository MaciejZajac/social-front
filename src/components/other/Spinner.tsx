import { Spin, SpinProps } from 'antd';



const Spinner = ({size = "large"}: SpinProps) => {
    return <Spin size={size} style={{ margin: '2rem 0', display: 'flex', justifyContent: 'center' }} />;
};

export default Spinner;
