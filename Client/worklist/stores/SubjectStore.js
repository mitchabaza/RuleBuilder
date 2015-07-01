﻿var BaseStore = require('./basestore.js');
var DataTypes = require('../Constants/SubjectConstants.js');


//var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var Store = new BaseStore({
    displayName: 'SubjectStore',
    events: ['change'],
    getState: function() {
        return [{ name: "Diagnosis", type: DataTypes.TEXT, id: 1 },
             { name: "Heart Rate", type: DataTypes.NUMERIC , id: 2 },
             { name: "Oxygenation", type: DataTypes.NUMERIC , id: 5 },            
             { name: "Active", type: DataTypes.BOOL , id: 3 },
             { name: "Service Area", type: DataTypes.DROP, id: 4 }
        ];
    }
});

module.exports = Store