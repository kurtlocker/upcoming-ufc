import util from 'lib/utils';
/**
 * Returns an array of objects representing only upcoming
 * events (day of or future) that have been sorted by date.
 * @param  {[array]} events - the raw array of objects
 * 	from the events api call
 * @return {[array]} events - the filtered and sorted
 * 	events
 */
export default (events) => {
  return events.filter(event => {
      let date = new Date(event.event_date);
      return util.is_same_date(event.event_date) || date > new Date()
    })
    .sort((event_a, event_b) => {
      return new Date(event_a.event_date) - new Date(event_b.event_date)
    });
}
