var Rule = require('./components/RuleEditor.jsx');
var React = require('react');
var LoadRule= require("./actions/LoadRuleActionCreator.js");

React.render(<Rule/> ,document.getElementById('body'));

setTimeout(LoadRule.fire(), "4000");
//apiFactory.getTasks();
