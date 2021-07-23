import { GetStaticProps } from 'next';
import { getEventsFromServer, getFeaturedEvents, IEvent } from '../../dummy-data';
import EventItem from './event-item';
import styles from './event-list.module.css'

function EventList({ items }: { items: Array<IEvent> }) {

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

// export const getStaticProps: GetStaticProps = async () => {

//     const data = await getFeaturedEvents()
//     console.log("<- LOG -> file: event-list.tsx -> line 26 -> constgetStaticProps:GetStaticProps= -> data", data)
//     return {
//         props: {
//             items: data
//         }
//     }
// }