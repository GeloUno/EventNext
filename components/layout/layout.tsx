import { Fragment } from "react";
import MainHeader from './mainHeader';

type LayoutProps = {
    children: JSX.Element
}

function Layout({ children }: LayoutProps) {
    return (
        <Fragment>
            <MainHeader />
            <main>
                {children}
            </main>
        </Fragment>
    );
}

export default Layout;