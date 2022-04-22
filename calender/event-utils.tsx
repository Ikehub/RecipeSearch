import { EventInput } from '@fullcalendar/react'

let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'Chicken Breast',
    start: todayStr +'T14:00:00'
  },
  {
    id: createEventId(),
    title: 'Pancakes',
    start: todayStr + 'T09:30:00'
  }
]

export function createEventId() {
  return String(eventGuid++)
}
