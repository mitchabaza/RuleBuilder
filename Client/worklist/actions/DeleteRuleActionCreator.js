var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/RuleActionConstants');
// Define action methods
var Actions = {
    fire: function (id) {
        
       
        AppDispatcher.dispatchDeleteRule(id);
    }
};
module.exports = Actions;