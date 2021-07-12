import classes from './logistics-item.module.css';
import React from 'react';

type LogisticsItemProps = {
  children: React.ReactElement,
  icon: React.FC
}

function LogisticsItem({ icon: Icon, children }: LogisticsItemProps) {


  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{children}</span>
    </li>
  );
}

export default LogisticsItem;
