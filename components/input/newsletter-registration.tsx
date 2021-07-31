
import React, { useRef, useContext } from 'react';
import classes from './newsletter-registration.module.css'
import NotificationContext from '../../store/notification-context';
import { StatusNotificationEnum } from '../../model/Notification/StatusNotificationEnum';


function NewsletterRegistration() {
    const notificationCtx = useContext(NotificationContext)

    const emailInputRef = useRef<HTMLInputElement>(null)

    function registrationHandler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        notificationCtx?.showNotification({ message: 'Register user to news letter', status: StatusNotificationEnum.PENDING, title: "Signing up..." })

        const emailInput = emailInputRef.current?.value;
        if (emailInput) {

            fetch('/api/newsletter', {
                method: "POST",
                body: JSON.stringify({ email: emailInput }),
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            )
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    } else {
                        return response.json().then(data => {
                            throw { user: data.user, message: data.message || "Something went wrong" }
                        })
                    }
                })
                .then(data => {
                    notificationCtx?.showNotification({
                        message: `Success register for news letter ${data?.user}`,
                        status: StatusNotificationEnum.SUCCESS,
                        title: "Success !"
                    })
                    emailInputRef.current!.value = ""
                }
                ).catch(error => {
                    notificationCtx?.showNotification({
                        message: `Error to save email in news letter ${error.user}`, status: StatusNotificationEnum.ERROR,
                        title: "News letter"
                    })
                })

        }
    }

    return (
        <section className={classes.newsletter}>
            <h2>sign up tp stay updated! </h2>
            <form onSubmit={registrationHandler}>
                <div className={classes.control}>
                    <input
                        ref={emailInputRef}
                        type="email"
                        id='email'
                        placeholder="Your email"
                        aria-label='Your email'

                    />
                    <button>
                        register
                    </button>
                </div>
            </form>

        </section>
    );
}


export default NewsletterRegistration