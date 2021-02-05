import axios from 'axios';
import { useEffect, useState } from 'react';

interface IUseQueryProps {
    url: string;
}
const useQuery = ({ url }: IUseQueryProps) => {
    const [statusCode, setStatusCode] = useState<number | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<any>({});

    useEffect(() => {
        const handleQuery = async (url: string) => {
            try {
                setLoading(true);
                const response = await axios.get(url);
                console.log('response', response);
                setStatusCode(response.status);
                setData(response.data);
                setLoading(false);
            } catch (err) {
                setLoading(false);
                console.log('err', err);
            }
        };

        handleQuery(url);
    }, [url]);

    return { data, loading, statusCode };
};

export default useQuery;
