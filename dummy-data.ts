export interface IEvent {
    id: string,
    title: string,
    description: string,
    location: string,
    date: string,
    image: string,
    isFeatured: boolean,
}

interface EventsServerObject {
    [key: string]: {
        date: string,
        description: string,
        image: string,
        isFeatured: boolean
        location: string,
        title: string
    }
}

const URL_EVENTS = 'https://nextclients-default-rtdb.europe-west1.firebasedatabase.app/events.json'

const DUMMY_EVENTS: Array<IEvent> = [
    // {
    //     id: 'e1',
    //     title: 'Programming for everyone',
    //     description: 'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
    //     location: 'Somestreet 25, 12345 San Somewhereo',
    //     date: '2021-05-12',
    //     image: 'images/coding-event.jpg',
    //     isFeatured: false,
    // },
    // {
    //     id: 'e2',
    //     title: 'Networking for introverts',
    //     description:
    //         "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    //     location: 'New Wall Street 5, 98765 New Work',
    //     date: '2021-05-30',
    //     image: 'images/introvert-event.jpg',
    //     isFeatured: true,
    // },
    // {
    //     id: 'e3',
    //     title: 'Networking for extroverts',
    //     description:
    //         'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
    //     location: 'My Street 12, 10115 Broke City',
    //     date: '2022-04-10',
    //     image: 'images/extrovert-event.jpg',
    //     isFeatured: true,
    // },
];

export async function getEventsFromServer() {
    const dataServer = await fetch(URL_EVENTS)
    const data: Array<IEvent> = []
    const dataObject: EventsServerObject = await dataServer.json()

    for (const key in dataObject) {
        const dataHelper: IEvent = {
            id: key,
            title: dataObject[key].title,
            date: dataObject[key].date,
            description: dataObject[key].description,
            image: dataObject[key].image,
            isFeatured: dataObject[key].isFeatured,
            location: dataObject[key].location
        }
        data.push(dataHelper)
    }
    return data
}

export function getFeaturedEvents(data: Array<IEvent>) {
    const dataFilter = data.filter((event) => event.isFeatured);
    return dataFilter
}



export async function getAllEvents() {
    const data = await getEventsFromServer()

    return data;
}

export interface IDateFilter {
    year: number,
    month: number
}
export async function getFilteredEvents({ month, year }: IDateFilter) {
    const data = await getEventsFromServer()

    let filteredEvents = data?.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });

    return filteredEvents;
}

export async function getEventById(id: string) {
    const data = await getEventsFromServer()

    return data?.find((event) => event.id === id);
}
