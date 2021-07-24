import Head from 'next/head'

import { getAllEventsFromServer, getFeaturedEvents, IEvent } from '../dummy-data';
import EventList from './../components/events/event-list';
import { GetStaticProps } from 'next';

export default function HomePage({ items }: { items: Array<IEvent> }) {

  return (
    <div >
      <Head>
        <title>Next TS Events</title>
        <meta name="description" content="Find a lot of events codin i TS" />
      </Head>
      <EventList items={items} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let data: Array<IEvent> = []
  const dataServer = await getAllEventsFromServer()
  if (dataServer) {
    data = getFeaturedEvents(dataServer)
  }

  return {
    props: {
      items: data
    },
    revalidate: 1 * 60 * 60
  }
}




