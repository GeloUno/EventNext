import styles from '../../styles/Shared.module.css'
import { useRouter } from 'next/router';
import { getFilteredEvents } from './../../dummy-data';
import EventList from '../../components/events/event-list';
import EventsSearch from './../../components/events/event-search';

const messageComponent = (value: string): JSX.Element => (
    <>
        <EventsSearch />
        <div className={styles.container}>
            <h1>{`${value}`}</h1>
        </div>
    </>
)

function FilterEventPages() {
    const router = useRouter()

    if (router.query.slug?.length != 2) {
        return messageComponent('Invalid filter data')
    }

    const year: number | undefined = +router.query.slug[0];
    const month: number | undefined = +router.query.slug[1];

    if (!year || !month || year < 2021 || year > 2022 || month < 1 || month > 12) {
        return messageComponent('Invalid filter data')
    }

    const dataFilterEvents = getFilteredEvents({ year, month })

    if (!dataFilterEvents) {
        return messageComponent('Loading....')
    }

    if (dataFilterEvents && dataFilterEvents.length == 0) {
        return messageComponent('no Events fount')
    }

    return (
        <>
            <EventsSearch />
            <EventList items={dataFilterEvents} key={'1111'} />
        </>
    );
}

export default FilterEventPages;