import Head from 'next/head'
import Image from 'next/image'
import { getEventsFromServer, getFeaturedEvents, IEvent } from '../dummy-data';
import styles from '../styles/Home.module.css'
import EventList from './../components/events/event-list';
import EventsSearch from './../components/events/event-search';
import { GetStaticProps } from 'next';

export default function HomePage({ items }: { items: Array<IEvent> }) {

  return (
    <div >
      <EventList items={items} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let data: Array<IEvent> = []
  const dataServer = await getEventsFromServer()
  if (dataServer) {
    data = getFeaturedEvents(dataServer)
  }

  return {
    props: {
      items: data
    }
  }
}




