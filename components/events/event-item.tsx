import { IBooks } from '../../dummy-data';
import Image from 'next/image';
import styles from './event-item.module.css'
import Button from './../ui/button';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right.icon';

function EventItem({ item: { date, description, id, image, location, title, isFeatured } }: { item: IBooks }) {
    // const {
    //     date,
    //     description,
    //     id,
    //     image,
    //     isFeatured,
    //     location,
    //     title
    // } = item
    const humanRelableDate = new Date(date).toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    })

    const formatAddress = location.replace(',', '\n')
    const explortLink = `/events/${id}`
    return (
        <li className={styles.item}>
            <Image src={`/${image}`} alt={title} width={256} height={256} />
            <div className={styles.content}>
                <div className={styles.summary}>
                    <h2>{title}</h2>
                    <div className={styles.date}>
                        <time>{humanRelableDate}</time>
                        <DateIcon />
                    </div>
                    <div className={styles.address}>
                        <AddressIcon />
                        <address>{formatAddress}</address>

                    </div>
                    <div className={styles.actions}>
                        <Button link={explortLink} >
                            <>
                                <span>Explore Event</span>
                                <span className={styles.icon}><ArrowRightIcon /></span>
                            </>
                        </Button>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default EventItem;