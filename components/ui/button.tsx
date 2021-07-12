import Link from 'next/link';
import React, { MouseEventHandler } from 'react';
import styles from './button.module.css'

interface IButton {
    children: React.ReactChild
    link?: string,
    onClik?: React.MouseEventHandler
}

function Button({ link, children, onClik }: IButton) {
    if (link) {
        return (
            <Link href={link}>
                <a className={styles.btn}>
                    {children}
                </a>
            </Link>
        )
    }
    if (onClik) {
        return (
            <button
                className={styles.btn}
                onClick={onClik}>
                {children}
            </button>
        )
    }
    return (
        <button
            className={styles.btn} >
            {children}
        </button>
    );
}

export default Button;