import { getAllEventsFromServer, IEvent } from '../../dummy-data';
import EventList from './../../components/events/event-list';
import Head from 'next/head';
import EventsSearch from './../../components/events/event-search';
import { GetStaticProps } from 'next';
import { Fragment } from 'react';

function AllEventsPages({ items }: { items: Array<IEvent> }) {

    return (
        <Fragment >
            <Head>
                <title>All Events conding</title>
                <meta
                    name="description"
                    content="See all events about conding"
                />
            </Head>
            <EventsSearch />
            <EventList items={items} key={'1111'} />
        </Fragment>
    );
}

export default AllEventsPages;


export const getStaticProps: GetStaticProps = async () => {

    const data = await getAllEventsFromServer()

    return {
        props: {
            items: data
        },
        revalidate: 60
    }
}