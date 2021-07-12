import { IBooks } from '../../dummy-data';
import EventItem from './event-item';
import styles from './event-list.module.css'

function EventList({ items }: { items: Array<IBooks> }) {

    return (
        <ul className={styles.list}>
            {items.map((item) => (
                <EventItem
                    item={item}
                    key={item.id}
                />
            )
            )}
        </ul>
    );
}

export default EventList;