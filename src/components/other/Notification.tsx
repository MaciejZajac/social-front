import { notification } from 'antd';

export const errorNotification = (message: string, description?: string) => {
    notification.error({
        message,
        description,
    });
};
