import Button from './../ui/button';
import { getFilteredEvents } from './../../dummy-data';
import styles from './event-search.module.css'
import { IEvent } from '../../dummy-data';
import { useRef } from 'react';
import { useRouter } from 'next/router';

function EventsSearch() {

    const router = useRouter()
    const yearInputRef = useRef<HTMLSelectElement>(null)
    const monthInputRef = useRef<HTMLSelectElement>(null)

    const searchHandler = (event: React.FormEvent): void => {
        event.preventDefault()
        const month = monthInputRef.current?.value;
        const year = yearInputRef.current?.value;
        if (month && year) {
            router.push(`/events/${year}/${month}`)
        }
    }
    return (
        <form action="" className={styles.form} onSubmit={searchHandler}>
            <div className={styles.controls}>
                <div className={styles.control}>
                    <label htmlFor="year">Year</label>
                    <select name="year" id="year" ref={yearInputRef}>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
                <div className={styles.control}>
                    <label htmlFor="month" >month</label>
                    <select name="month" id="month" ref={monthInputRef}>
                        <option value="01">January</option>
                        <option value="02">February</option>
                        <option value="03">March</option>
                        <option value="04">April</option>
                        <option value="05">May</option>
                        <option value="06">June</option>
                        <option value="07">July</option>
                        <option value="08">August</option>
                        <option value="09">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                </div>
            </div>
            <Button onClik={searchHandler}>search</Button>
        </form>
    );
}

export default EventsSearch;