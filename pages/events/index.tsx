import styles from '../../styles/Shared.module.css'
import { getAllEvents } from '../../dummy-data';
import EventList from './../../components/events/event-list';
import EventsSearch from './../../components/events/event-search';

function AllEventsPages() {
    const event = getAllEvents()
    return (
        <div >
            <EventsSearch />
            <EventList items={event} key={'1111'} />
        </div>
    );
}

export default AllEventsPages;