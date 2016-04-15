import { List, Map } from 'immutable';
import * as actionTypes from './actions';

export default function reducer(state = new Map(), action) {
  switch (action.type) {
    case actionTypes.setEvents:
      return setEvents(state, action.events);
    default:
      return state;
  }
}

function setEvents(state, events) {
  return state.set('events', List(events));
}
