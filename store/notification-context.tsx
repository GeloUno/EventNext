import { createContext, useState, useEffect } from 'react'
import { INotification } from '../model/Notification/INotification';
import React, { } from 'react';
import { StatusNotificationEnum } from '../model/Notification/StatusNotificationEnum';


interface IContextNotification {
    notification: INotification | null,
    showNotification(notificationData: INotification): void,
    hiddenNotification(): void
}

interface INoificationContextProviderProps {
    children?: React.ReactNode | React.ReactNode[]
}

const NoificationContext = createContext<IContextNotification | null>(null)


export function NoificationContextProvider({ children }: INoificationContextProviderProps) {

    const [activeNotification, setActiveNotification] = useState<INotification | null>(null)

    function showNotification(notificationData: INotification) {
        setActiveNotification(notificationData)
    }

    function hiddenNotification() {
        setActiveNotification(null)
    }

    const timer = setTimeout(() => {
        setActiveNotification(null)
    }, 10 * 1000);

    useEffect(() => {
        if (activeNotification && (activeNotification.status === StatusNotificationEnum.ERROR || activeNotification.status === StatusNotificationEnum.SUCCESS)) {
            timer;
        }
        return () => {
            clearTimeout(timer)
        }
    }, [activeNotification])

    const context: IContextNotification = {
        notification: activeNotification, hiddenNotification,
        showNotification
    }

    return <NoificationContext.Provider value={context}>
        {children}
    </NoificationContext.Provider>
}


export default NoificationContext;