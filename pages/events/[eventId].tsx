import { getEventById, getEventsFromServer, IEvent } from '../../dummy-data';
import EventSummary from '../../components/eventDetail/event-summary';
import EventLogistics from '../../components/eventDetail/event-logistics';
import EventContent from '../../components/eventDetail/event-content';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring'


interface IStaticPath extends ParsedUrlQuery {
    eventId: string
}


function EventDtailPages(
    {
        date,
        description,
        // id,
        image,
        // isFeatured,
        location,
        title
    }: IEvent
) {

    return (
        <>
            <EventSummary
                title={title}
            />

            <EventLogistics
                address={location}
                date={date}
                image={image}
                imageAlt={title}
            />

            <EventContent>
                {description}
            </EventContent>
        </>
    );
}

export default EventDtailPages;


export const getStaticProps: GetStaticProps<IEvent, IStaticPath> = async ({ params }) => {

    if (!params?.eventId) {
        return {
            notFound: true
        }
    }

    const data = await getEventById(params.eventId)

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: data,
        revalidate: 10
    }
}


interface IParamPath {
    params: { eventId: string }
}


const getPathsParamsFromData = (data: IEvent[]): Array<IParamPath> => {
    let dataHelper: Array<IParamPath> = []
    for (const key in data) {
        dataHelper.push({ params: { eventId: data[key].id } })
    }
    return dataHelper
}



export const getStaticPaths: GetStaticPaths<IStaticPath> = async () => {

    const dataServer = await getEventsFromServer()

    const params: Array<IParamPath> = getPathsParamsFromData(dataServer)

    return {
        paths: params,
        fallback: 'blocking'

    }
}