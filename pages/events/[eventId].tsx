import { useRouter } from 'next/router';
import { getEventById, IBooks } from '../../dummy-data';
import styles from '../../styles/Shared.module.css'
import sharedStyles from '../../styles/Shared.module.css'
import EventSummary from '../../components/eventDetail/event-summary';
import EventLogistics from '../../components/eventDetail/event-logistics';
import EventContent from '../../components/eventDetail/event-content';

function EventDtailPages() {
    const { query } = useRouter();

    let dataEvent: IBooks | undefined;

    if (query.eventId != undefined) {
        const id = query.eventId
        if (typeof id === 'string') {
            dataEvent = getEventById(id)
        } else {
            dataEvent = getEventById(id[0])
        }
    }

    if (!dataEvent) {
        return (
            <div className={sharedStyles.container}>

                <h2>
                    no data Events
                </h2>
            </div>
        )
    }

    return (
        <>
            <EventSummary
                title={dataEvent.title}
            />

            <EventLogistics
                address={dataEvent.location}
                date={dataEvent.date}
                image={dataEvent.image}
                imageAlt={dataEvent.title}
            />

            <EventContent>
                {dataEvent.description}
            </EventContent>
        </>
    );
}

export default EventDtailPages;