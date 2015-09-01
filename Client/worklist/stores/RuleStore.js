var BaseStore = require('./basestore.js');
var DataTypes = require('../Constants/SubjectConstants.js');
var Actions = require('../constants/RuleActionConstants');
var _ = require("lodash");
var uuid = require("uuid");
var Stack = require('stackjs');
var stack = new Stack();
 
var _default= {  matchType: 1, predicates: [{ id: uuid.v4(),  subject: { id: null, type: null }, operator: { id: null }, value: "" }] };
var _state;

function storeUndo() {
    var newState = _.clone(_state, true);
    
    if (stack.size() > 0) {
        var oldState = stack.peek();
        var areEqual = _.eq(oldState, newState);  
        if (areEqual) {
            return;
        }
        
    }    
    stack.push(newState);
}
var Store = new BaseStore({
    displayName: 'RuleStore',
    events: ['change'],
    getState: function() {
        return _state;
    },
    onDeletePredicate: function(idToDelete) {
       
        _.remove(_state.predicates, {
            id: idToDelete
        });
        this.emit('change');
    },
    onLoadData: function() {

        if (localStorage.getItem("rule") == null) {
            localStorage.setItem("rule", JSON.stringify(_default));
        }
        _state = JSON.parse(localStorage.getItem("rule"));
        this.emit('change');
    },
    onAddPredicate: function (data) {
        storeUndo();
        var afterIndex = _state.predicates.indexOf(data.after);
        _state.predicates.splice(afterIndex+1,0, data.predicate );
        this.emit('change');

    },
    onClearRule: function() {
        storeUndo();
        localStorage.removeItem("rule");
        this.onLoadData();

    },
    onSaveRule: function() {
        localStorage.setItem("rule", JSON.stringify(_state));

    },
    onUndo: function () {
        
        if (stack.size() >0) {
            _state = stack.pop();
            this.emit('change');
        }

    },
    onUpdateRule: function (payload) {
        storeUndo();
        _state.matchType = payload;
        this.emit('change');

    },
    onChangePredicate: function(newRule) {
        storeUndo();

        var ruleToChange = _.find(_state.predicates, {
            id: newRule.id
        });
        _.assign(ruleToChange, newRule);
        this.emit('change');

    }

});

module.exports = Store