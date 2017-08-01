import React from 'react';
import { EventsList } from './EventsList';

export const EventsPage = (props) => (
  <div className="Event-list">
    <h2>{props.chosenCategory.name} Events near Toronto, Ontario</h2>
    <button onClick={ () => props.getEvents() }>
      Fetch Events
    </button>
    {props.events
      ? <EventsList events={props.events} />
      : null
    }
  </div>
);

