﻿
var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/RuleActionConstants');
var uuid = require("uuid");
// Define action methods
var Actions = {
    fire: function () {
        
        AppDispatcher.dispatchClearRule();
    }
};
module.exports = Actions;