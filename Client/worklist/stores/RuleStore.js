var BaseStore = require('./basestore.js');
var DataTypes = require('../Constants/SubjectConstants.js');
var Actions = require('../constants/RuleActionConstants');
var _ = require("lodash");
var uuid = require("uuid");

var _state = [
{ id: uuid.v4(), order: 1, subject: { id: 1, type: DataTypes.TEXT }, operator:{id: 2, value: "" }, value: "Arrhythmia" },
    { id: uuid.v4(), order: 2, subject: { id: 2, type: DataTypes.NUMERIC}, operator: { id: 17, value: "" }, value: 40 },
    { id: uuid.v4(), order: 3, subject: { id:3,  type: DataTypes.BOOL}, operator: { id: 216, value: "" } }
];
//var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var Store = new BaseStore({
    displayName: 'RuleStore',
    events: ['change'],
    getState: function() {
        return _state;
    },
    onDeleteRule: function(idToDelete) {

        _.remove(_state, {
            id: idToDelete
        });
        this.emit('change');
    },
    onAddRule: function(data) {
        _state.push(data);
        this.emit('change');

    },
    onChangeRule: function(newRule) {


        var ruleToChange = _.find(_state, {
            id: newRule.id
        });
        

        _.merge(ruleToChange, newRule);

        this.emit('change');

    }

});

module.exports = Store