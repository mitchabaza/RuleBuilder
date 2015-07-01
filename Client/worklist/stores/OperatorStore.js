﻿var BaseStore = require('./basestore.js'); 

var DataTypes = require('../Constants/SubjectConstants.js');
var Store = new BaseStore({
    displayName: 'OperatorStore',
    events: ['change'],
    getState: function() {
        return [
            {
                type: DataTypes.TEXT,
                operators: [
                    { name: "Does Not Equal", id: 1 },
                    { name: "Equals", id: 2 },
                    { name: "Is Not Null", id: 3 },
                    { name: "Contains", id: 4 },
                    { name: "Ends With", id: 5 },
                    { name: "Starts With", id: 6 },
                    { name: "Is Null", id: 7 }
                ]
            },
            {
                type: DataTypes.DROP,
                operators: [
                    { name: "Does Not Equal", id: 1 },
                    { name: "Equals", id: 2 },
                    { name: "Is Not Null", id: 3 },
                    { name: "Contains", id: 4 },
                    { name: "Ends With", id: 5 },
                    { name: "Starts With", id: 6 },
                    { name: "Is Null", id: 7 }
                ]
            },
            {
                type: DataTypes.NUMERIC,
                operators: [
                    { name: "Greater Than", id: 16 },
                    { name: "Less Than", id: 17 },
                    { name: "Equal To", id: 31 }
                 ]
            },
            {
                type: DataTypes.BOOL,
                operators: [
                    { name: "Is True", id: 216 },
                    { name: "Is False ", id: 217 } 
                ]
            }
        ];
    }
});

module.exports = Store;