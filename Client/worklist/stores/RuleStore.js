var BaseStore = require('./basestore.js');
var DataTypes = require('../Constants/SubjectConstants.js');
var Actions = require('../constants/RuleActionConstants');
var _ = require("lodash");
var uuid = require("uuid");
var Stack = require('stackjs');
var stack = new Stack();
var _default= {  matchType: 1, newPredicateId:null, predicates: [{ id: uuid.v4(),  subject: { id: null, type: null }, operator: { id: null }, value: "" }] };
var _state;


var Store = new BaseStore({
    displayName: 'RuleStore',
    events: ['change','saved'],
    getState: function() {
        return _state;
    },
    _change:function(){
        localStorage.setItem("rule", JSON.stringify(_state));
        this.emit("change")
    },
    onDeletePredicate: function(idToDelete) {
       
        _.remove(_state.predicates, {
            id: idToDelete
        });
       this._change();
    },
    onLoadData: function() {

        if (localStorage.getItem("rule") == null) {
            localStorage.setItem("rule", JSON.stringify(_default));
        }
        _state = JSON.parse(localStorage.getItem("rule"));
        this._change();
    },
    onAddPredicate: function (data) {

        var afterIndex = _state.predicates.indexOf(data.after);
        _state.predicates.splice(afterIndex+1,0, data.predicate );
        this._change();

    },
    onClearRule: function() {
        localStorage.removeItem("rule");
        this.onLoadData();

    },
    onSaveRule: function() {
        localStorage.setItem("rule", JSON.stringify(_state));
        this._change();

    },
    onUndo: function () {
        
        if (stack.size() >0) {
            _state = stack.pop();
            this._change(); }

    },
    onUpdateRule: function (payload) {
         _state.matchType = payload;
        this._change();

    },
    onChangePredicate: function(newRule) {

        var ruleToChange = _.find(_state.predicates, {
            id: newRule.id
        });
        _.assign(ruleToChange, newRule);
        this._change();

    }

});

module.exports = Store