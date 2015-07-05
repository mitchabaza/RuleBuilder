
var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/RuleActionConstants');

// Define action methods
var Actions = {
    fire: function (payload) {
        
        AppDispatcher.dispatchUpdateRule(payload);
    }
};
module.exports = Actions;