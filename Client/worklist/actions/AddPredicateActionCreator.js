var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/RuleActionConstants');
var uuid = require("uuid");
// Define action methods
var Actions = {
    fire: function () {
        
        var rule = { id: uuid.v4(), order: null, subject: { id: null, type:null }, operator: { id: null }, value: "" }
        AppDispatcher.dispatchAddPredicate(rule);
    }
};
module.exports = Actions;