const express = require('express');
const router = express.Router();
const Event = require('../models/event');

// Get all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create a new event
router.post('/', async (req, res) => {
  const eventData = req.body;

  // Basic validation
  if (!eventData.title || !eventData.date || !eventData.time || !eventData.location) {
    return res.status(400).json({ error: 'Title, date, time, and location are required fields' });
  }

  try {
    const newEvent = new Event(eventData);
    await newEvent.save();
    res.status(201).json({ message: 'Event created successfully', event: newEvent });
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get event by ID
router.get('/:id', async (req, res) => {
  const eventId = req.params.id;

  try {
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.json(event);
  } catch (error) {
    console.error('Error fetching event by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update event by ID
router.put('/:id', async (req, res) => {
  const eventId = req.params.id;
  const eventData = req.body;

  // Basic validation
  if (!eventData.title || !eventData.date || !eventData.time || !eventData.location) {
    return res.status(400).json({ error: 'Title, date, time, and location are required fields' });
  }

  try {
    const updatedEvent = await Event.findByIdAndUpdate(eventId, eventData, { new: true });
    if (!updatedEvent) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.json({ message: 'Event updated successfully', event: updatedEvent });
  } catch (error) {
    console.error('Error updating event:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete event by ID
router.delete('/:id', async (req, res) => {
  const eventId = req.params.id;

  try {
    const deletedEvent = await Event.findByIdAndDelete(eventId);
    if (!deletedEvent) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.json({ message: 'Event deleted successfully', event: deletedEvent });
  } catch (error) {
    console.error('Error deleting event:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;




