// EventListPage.jsx

import React, { useState, useEffect } from 'react';
import EventList from './EventList'; // Import EventList component
import { getEvents } from '../../api'; // Import API function to fetch events

const EventListPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events when component mounts
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await getEvents();
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
      // Handle error
    }
  };

  return (
    <div>
      <h1>Events</h1>
      <EventList events={events} />
    </div>
  );
};

export default EventListPage;

