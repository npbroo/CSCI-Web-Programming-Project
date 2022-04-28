import { notification } from 'antd';

//display a popup notification
export const openNotif = function openNotification(type, title, desc) {
    if (type === "success") {
        notification.success({
            message: title,
            description: desc,
        });
    } else if (type === "error") {
        notification.error({
            message: title,
            description: desc,
        });
    } else if (type === "warning") {
        notification.warn({
            message: title,
            description: desc,
        });
    } else if (type === "") {
        notification.open({
            message: title,
            description: desc,
        });
    }
};