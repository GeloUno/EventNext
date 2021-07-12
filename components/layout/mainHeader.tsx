import Link from 'next/link';
import styles from './mainHeader.module.css'
function MainHeader() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href='/' >Next Project</Link>
            </div>
            <nav className={styles.navigation}>
                <ul>
                    <li><Link href='/events'>Brower All Events</Link></li>

                </ul>
            </nav>
        </header>
    );
}

export default MainHeader;