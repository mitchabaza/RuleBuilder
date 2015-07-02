﻿var BaseStore = require('./basestore.js');
var DataTypes = require('../Constants/SubjectConstants.js');
var Actions = require('../constants/RuleActionConstants');
var _ = require("lodash");
var uuid = require("uuid");

var _state = [];
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
    onLoadData:function() {
        
        if (localStorage.getItem("rule") == null) {
            localStorage.setItem("rule", JSON.stringify([{ id: uuid.v4(), order: null, subject: { id: null, type: null }, operator: { id: null, value: null }, value: "" }]));
        }
        _state = JSON.parse(localStorage.getItem("rule"));
        this.emit('change');
    },
    onAddRule: function(data) {
        _state.push(data);
        this.emit('change');

    },
    onClearRule: function () {

        localStorage.removeItem("rule");
        this.onLoadData();

    },
    onSaveRule:function() {
        localStorage.setItem("rule", JSON.stringify(_state));

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