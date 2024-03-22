// CreateEventPage.jsx

import React from 'react';
import EventForm from './EventForm'; // Import EventForm component
import { createEvent } from '../../api'; // Import API function to create events

const CreateEventPage = () => {
  const handleSubmit = async (formData) => {
    try {
      await createEvent(formData);
      // Optionally, redirect to event list page after successful event creation
      // history.push('/events');
    } catch (error) {
      console.error('Error creating event:', error);
      // Handle error
    }
  };

  return (
    <div>
      <h1>Create Event</h1>
      <EventForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateEventPage;

