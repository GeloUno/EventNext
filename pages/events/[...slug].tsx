import styles from '../../styles/Shared.module.css'
import { getAllEventsFromServer, getFilteredEvents } from './../../dummy-data';
import EventList from '../../components/events/event-list';
import EventsSearch from './../../components/events/event-search';
import { IEvent } from '../../dummy-data';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';


interface IStaticProps {
    data: IEvent[]
}
interface IStaticParams extends ParsedUrlQuery {
    slug: Array<string>
}

interface IStaticPaths extends ParsedUrlQuery {
    slug: string[]
}

interface IParamSlugPath {
    params: {
        slug: Array<string>
    }
}
export const messageComponent = (value: string): JSX.Element => (
    <>
        <EventsSearch />
        <div className={styles.container}>
            <h1>{`${value}`}</h1>
        </div>
    </>
)

function FilterEventPages({ data }: IStaticProps) {


    if (data && data.length == 0) {
        return messageComponent('no Events fount')
    }

    return (
        <>
            <EventsSearch />
            <EventList items={data} key={'1111'} />
        </>
    );
}

export default FilterEventPages;


export const getStaticPaths: GetStaticPaths<IStaticPaths> = async () => {

    const data: IEvent[] = await getAllEventsFromServer()

    const params: Array<IParamSlugPath> = []

    data.map(el => {
        const dateEventToArray = el.date.split('-')

        params.push({ params: { slug: [dateEventToArray[0], dateEventToArray[1]] } })

    })

    return {
        paths: params
        ,
        fallback: 'blocking',

    }
}




export const getStaticProps: GetStaticProps<IStaticProps, IStaticParams> = async ({ params }) => {

    const data: IEvent[] = []


    if (!params?.slug[0] || !params?.slug[1] || params?.slug.length !== 2) {
        return {
            notFound: true
        }

    }
    const month: number = +params.slug[1]
    const year: number = +params.slug[0]

    const dataHelper = await getFilteredEvents({ year, month })
    dataHelper.map(el => {
        data.push(el)
    })

    return {
        props: {
            data
        },
        revalidate: 1 * 60 * 60
    }
}