//Verkar inte användas, från vad jag förstår verkar det vara en modul för att hålla koll på datum, och importerar från
//axios, som typ är nån request modul å clsx som är nån excel modul?
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import axios from 'axios';

function formatDate(isoString) {
    if (!isoString) return '';
    const date = new Date(isoString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');  // months are from 0 to 11
    const day = String(date.getDate()).padStart(2, '0');
    let hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0')

    return `${year}-${month}-${day} ${hours}:${minutes}`;
}

function EventComponent({ title, description, start, end }) {
    return (
        <div className={clsx('col col--4')}>
            <div className={clsx(styles.eventCard)}>
                <h3>{title}</h3>
                <p>{description}</p>
                <p><strong>Start:</strong> {formatDate(start)}</p>
                <p><strong>End:</strong> {formatDate(end)}</p>
            </div>
        </div>
    );
}

function EventCalendar() {
    const [events, setEvents] = useState([]);

    useEffect(() => {

        const apiKey = process.env.CALENDAR_KEY;
        const calendarId = process.env.CALENDAR_ID;
        const beginningOfYearISO = new Date(new Date().getFullYear(), 0, 1).toISOString();

        const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&timeMin=${beginningOfYearISO}`;

        const currentDate = new Date();
        const currentYear = currentDate.getUTCFullYear();
        const currentMonth = String(currentDate.getUTCMonth() + 1).padStart(2, '0');
        axios.get(url)
            .then(response => {
                const eventData = response.data.items.map(item => ({
                    title: item.summary,
                    description: item.description,
                    // add 2h to convert to stockholm time
                    start: item.start && (item.start.dateTime || item.start.date),
                    end: item.end && (item.end.dateTime || item.end.date),
                }));

                // two weeks from now
                const two_weeks_from_now = new Date(currentDate.getTime() + 14 * 24 * 60 * 60 * 1000).getTime();

                const upcomingEvents = eventData.filter(event => {
                    const eventTimestamp = new Date(event.start).getTime();
                    return eventTimestamp >= currentDate && eventTimestamp < two_weeks_from_now;
                });

                upcomingEvents.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());

                setEvents(upcomingEvents);
            })
            .catch(error => {
                console.error('Error fetching events:', error);
            });
    }, []);

    return (
  
            <div className="row">
            
            {events.map((event, idx) => (
                <EventComponent key={idx} {...event} />
            ))}
                </div>

    );
}

export { EventCalendar, formatDate };
