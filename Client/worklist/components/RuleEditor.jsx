var React = require("React");
var SubjectStore= require("../Stores/SubjectStore.js") 
var SaveRule = require("../Actions/SaveRuleActionCreator.js");
var RuleStore= require("../Stores/RuleStore.js") 
var createStoreMixin = require('../mixins/StoreListenerMixin')
var Rule= require("./rule.jsx")
var Select= require("./Select.jsx")

var Bootstrap=require('react-bootstrap') 
var ClearRule = require("../Actions/ClearRulesActionCreator.js");
var app = React.createClass({
	mixins: [createStoreMixin([SubjectStore,RuleStore])] ,
	getInitialState:function(){
		return {activeRule:null}
	},
	onHandleSaveClick:function(){
		SaveRule.fire();
	},
	onHandleClearClick:function(){
		ClearRule.fire();
	},
    handleOnSelect:function(id){
		this.setState({activeRule:id})
	},
	handleRuleClick:function(){
		 
	},
	render: function() { 
	var noMoreRules = this.state.rules.length==10
	
	var rules = [];
	var self=this;
	this.state.rules.map(function(rule){
		rules.push(<Rule onRuleSelect={self.handleOnSelect} key={rule.id} active={self.state.activeRule==rule.id} preventNewRules={noMoreRules} subjects={self.state.subjects} rule={rule}/>)
	})
	return (
		<div className="container" >

		<h3>Patient Rule Creator</h3>
		<div className="alert alert-warning" style={{display:noMoreRules?'block':'none'}} role="alert">
		<b>Warning!</b>&nbsp;&nbsp;  Your rule is getting too complicated you dumbass!!</div>
		
		<div className="panel panel-default">
		<div className="panel-heading clearfix">Match <Select onChange={this.handleRuleClick} options={[{id:1,name:"all"},{id:2,name:"any"}]}/>of the following conditions
		<Bootstrap.Button className="pull-right" onClick={this.onHandleClearClick} type="button">Clear</Bootstrap.Button><Bootstrap.Button className="pull-right" bsStyle='primary' onClick={this.onHandleSaveClick} type="button">Save</Bootstrap.Button>
		</div>
		<div className="panel-body">
			{rules}
				
		</div>
	</div>
		
		</div>
	)
    },


	getStateFromStores:function() {
		return {
		rules:RuleStore.getState(),
		subjects: SubjectStore.getState()		};
	}

})

module.exports = app ;




