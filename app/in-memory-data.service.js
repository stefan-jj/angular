"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var persons = [
            { id: 1, name: 'John', fact: 'has webbed feet' },
            { id: 2, name: 'Jeff', fact: 'is a Jedi master' },
            { id: 3, name: 'Eric', fact: 'is 8 foot tall' },
            { id: 4, name: 'Stan', fact: 'is a billionnaire' },
            { id: 5, name: 'Kevin', fact: 'is a cult leader' },
            { id: 6, name: 'Steve', fact: 'is a professional athlete' },
            { id: 7, name: 'Jenny', fact: 'owns a restaurant' },
            { id: 8, name: 'Stacey', fact: 'is a super hero' },
            { id: 9, name: 'Andy', fact: 'has a robotic arm' },
            { id: 10, name: 'Ben', fact: 'is a shady warehouse worker' }
        ];
        return { persons: persons };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map