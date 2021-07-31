import { StatusNotificationEnum } from './StatusNotificationEnum';


export interface INotification {
    title: string;
    message: string;
    status: StatusNotificationEnum;
}
