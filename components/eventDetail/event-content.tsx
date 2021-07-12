import classes from './event-content.module.css';
import React from 'react';

type EventContentProps = {
  children: React.ReactChild
}

function EventContent({ children }: EventContentProps) {
  return (
    <section className={classes.content}>
      {children}
    </section>
  );
}

export default EventContent;
