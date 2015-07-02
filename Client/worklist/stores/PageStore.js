var BaseStore = require('./basestore.js');
var DataTypes = require('../Constants/SubjectConstants.js');
var Actions = require('../constants/RuleActionConstants');
var _ = require("lodash");
var uuid = require("uuid");

var _state = {activerule:null}
 
var Store = new BaseStore({
    displayName: 'PageStore',
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