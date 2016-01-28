angular.module('bandServices',[]).factory('EventsService',function() {
// 
  var event = {
        hour: "20.00",
        venue: "Dublin",
        fees: 50,
        period: [{
            month: 'January',
            day: 10
        }, {
            month: 'February',
            day: 10
        }, {
            month: 'March',
            day: 10
        }, {
            month: 'April',
            day: 10
        }, {
            month: 'May',
            day: 10
        }, {
            month: 'June',
            day: 10
        }, {
            month: 'July',
            day: 10
        }, {
            month: 'August',
            day: 10
        }, {
            month: 'September',
            day: 10
        }, {
            month: 'October',
            day: 10
        }, {
            month: 'November',
            day: 10
        }, {
            month: 'December',
            day: 10
        }],
        fullDetails: function () {
            var eventObject;
            eventObject = event;
            return eventObject.hour + " " + eventObject.date + " " + eventObject.venue;
             }
    };
    return { getEvent: function(){
        return event}
        };
    
}); 