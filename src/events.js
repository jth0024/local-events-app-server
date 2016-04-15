import low from 'lowdb';
import storage from 'lowdb/file-async';
import objectAssign from 'object-assign';
import path from 'path';

const db = low(path.join(__dirname, '../data/db.json'), { storage });

export function getEvents() {
  const events = db('events');
  return objectAssign({}, events);
}
