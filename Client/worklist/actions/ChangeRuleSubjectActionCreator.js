var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/RuleActionConstants');
var uuid = require("uuid");
// Define action methods
var Actions = {
    fire: function (rule) {
        
        AppDispatcher.dispatchChangeRule(rule);
    }
};
module.exports = Actions;