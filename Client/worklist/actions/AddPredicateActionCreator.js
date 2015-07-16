var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/RuleActionConstants');
var uuid = require("uuid");
// Define action methods
var Actions = {
    fire: function (after) {
        
        var predicate = { id: uuid.v4(),  subject: { id: null, type:null }, operator: { id: null }, value: "" }
        AppDispatcher.dispatchAddPredicate({after: after, predicate: predicate});
    }
};
module.exports = Actions;