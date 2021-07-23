import styles from '../../styles/Shared.module.css'
import { getFilteredEvents } from './../../dummy-data';
import EventList from '../../components/events/event-list';
import EventsSearch from './../../components/events/event-search';
import { IEvent } from '../../dummy-data';
import { GetServerSideProps, } from 'next';
import { ParsedUrlQuery } from 'querystring';


interface IServerProps {
    data: IEvent[]
}
interface IServerParams extends ParsedUrlQuery {
    slug: Array<string>
}


export const messageComponent = (value: string): JSX.Element => (
    <>
        <EventsSearch />
        <div className={styles.container}>
            <h1>{`${value}`}</h1>
        </div>
    </>
)

function FilterEventPages({ data }: IServerProps) {


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

export const getServerSideProps: GetServerSideProps<IServerProps, IServerParams> = async ({ params }) => {

    const data: IEvent[] = []


    if (!params?.slug[0] || !params?.slug[1] || params?.slug.length !== 2) {
        return {
            notFound: true
        }

    }
    const month: number = +params!.slug[1]
    const year: number = +params!.slug[0]

    const dataHelper = await getFilteredEvents({ year, month })
    dataHelper.map(el => {
        data.push(el)
    })

    return {
        props: { data }
    }
}