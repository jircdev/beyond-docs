import * as React from 'react';

/***
 * Executes a useEffect hook binging the event defined in all
 * objects passed
 *
 * @param {array} objects Objects to bind
 * @param {function} onBinder function to be executed when the event is fired
 * @param {string} event the event to be listened, by default is event change
 */
export /*bundle*/ function useBinder(objects, onBinder, event = 'change') {
    React.useEffect(() => {
        objects.forEach(object => {

            if (object) object.bind(event, onBinder);
        });
        return () => objects.forEach(object => {
            if (object) object.unbind(event, onBinder)
        });
    }, [objects]);
}
