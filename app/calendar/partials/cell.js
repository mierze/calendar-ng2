"use strict";
var CalendarCell = (function () {
    function CalendarCell() {
    }
    CalendarCell.prototype.addEvent = function (event) {
        this.events.push(event);
    };
    return CalendarCell;
}());
exports.CalendarCell = CalendarCell;
//# sourceMappingURL=cell.js.map