import { List, Map } from 'immutable';

export const INITIAL_STATE = Map();

export const SET_EVENTS = 'SET_EVENTS';

export function setEvents(events) {
  return {
    type: SET_EVENTS,
    events,
  };
}
