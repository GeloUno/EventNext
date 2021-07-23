import styles from '../../styles/Shared.module.css'
import { getAllEvents, getEventsFromServer, IEvent } from '../../dummy-data';
import EventList from './../../components/events/event-list';
import EventsSearch from './../../components/events/event-search';
import { GetStaticProps } from 'next';

function AllEventsPages({ items }: { items: Array<IEvent> }) {

    return (
        <div >
            <EventsSearch />
            <EventList items={items} key={'1111'} />
        </div>
    );
}

export default AllEventsPages;


export const getStaticProps: GetStaticProps = async () => {

    const data = await getEventsFromServer()

    return {
        props: {
            items: data
        }
    }
}