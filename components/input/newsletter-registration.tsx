
import React, { useRef } from 'react';
import classes from './newsletter-registration.module.css'


function NewsletterRegistration() {

    const emailInputRef = useRef<HTMLInputElement>(null)

    function registrationHandler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
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
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    emailInputRef.current!.value = ""
                }

                )


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