
let eventGuid = 0
const todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: '$0.00',
    start: todayStr
  },
  {
    id: createEventId(),
    title: '$50.00',
    start: todayStr
  },
  {
    id: createEventId(),
    title: '$50.00',
    start: todayStr
  },
  {
    id: createEventId(),
    title: '$200.00',
    start: todayStr
  }
]

export function createEventId () {
  return String(eventGuid++)
}
