import { Fragment, useContext } from "react";
import MainHeader from './mainHeader';
import Notification from '../ui/notification';
import NoificationContext from '../../store/notification-context';

type LayoutProps = {
    children: JSX.Element
}

function Layout({ children }: LayoutProps) {

    const notificationCtx = useContext(NoificationContext)

    const activeNotification = notificationCtx?.notification
    return (
        <Fragment>
            <MainHeader />
            <main>
                {children}
            </main>
            {activeNotification &&
                <Notification message={activeNotification.message} status={activeNotification.status} title={activeNotification.title} />
            }
        </Fragment>
    );
}

export default Layout;