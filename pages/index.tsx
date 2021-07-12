import Head from 'next/head'
import Image from 'next/image'
import { getFeaturedEvents } from '../dummy-data'
import styles from '../styles/Home.module.css'
import EventList from './../components/events/event-list';
import EventsSearch from './../components/events/event-search';

export default function HomePage() {
  const futureEvents = getFeaturedEvents()
  return (
    <div >
      <EventList items={futureEvents} />
    </div>
  )
}
