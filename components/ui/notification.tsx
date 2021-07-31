import classes from './notification.module.css'
import { StatusNotificationEnum } from '../../model/Notification/StatusNotificationEnum';
import { INotification } from '../../model/Notification/INotification';
import NoificationContext from '../../store/notification-context';
import { useContext } from 'react';

interface INotificationProps extends INotification {
}


function Notification({ message, status, title }: INotificationProps) {

    const notificationCtx = useContext(NoificationContext)

    let statusClasses = ''

    switch (status) {
        case StatusNotificationEnum.SUCCESS: statusClasses = classes.success;
            break;
        case StatusNotificationEnum.ERROR: statusClasses = classes.error;
            break;
        case StatusNotificationEnum.PENDING: statusClasses = classes.pending;
            break;
        default:
            break;
    }

    const activeClasses = `${classes.notification} ${statusClasses} `
    return (
        <div className={activeClasses} onClick={notificationCtx?.hiddenNotification}>
            <h2>{title}</h2>
            <p>{message}</p>
        </div>
    );
}


export default Notification;