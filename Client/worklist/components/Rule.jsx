var React = require("React");
var Button= require('react-bootstrap').Button; 
var AddRule = require("../Actions/AddRuleActionCreator.js");
var ChangeRule = require("../Actions/ChangeRuleSubjectActionCreator.js");
var DeleteRule = require("../Actions/DeleteRuleActionCreator.js");
var Select = require('./Select.jsx');
var Glyphicon = require('react-bootstrap').Glyphicon
var createStoreMixin = require('../mixins/StoreListenerMixin')
var Input=require('react-bootstrap').Input
var OperatorStore= require("../Stores/OperatorStore.js") 
var RuleValueFactory= require("./ExpressionFactory.jsx") 
var DataTypes = require('../Constants/SubjectConstants.js');
var _ =require("lodash");

var app = React.createClass({


		
	 	mixins: [createStoreMixin([OperatorStore])],
		handleAddRule:function(){
			AddRule.fire()
		},
		handleValueChange:function(e){
			var ruleChange=_.clone(this.props.rule )
		    ruleChange.value=e.getValue();
			ChangeRule.fire(ruleChange)
		},
		
		handleOperatorChange:function(e){
			var ruleChange=_.clone(this.props.rule )
		 
		    ruleChange.operator.id=e.getValue();
			ChangeRule.fire(ruleChange)
		},
		handleSubjectChange:function(){
			var ruleChange=_.clone(this.props.rule )
			var subject = _.find(this.props.subjects, function(s){
				return s.id==this.refs.subject.getValue()
			},this)
		    ruleChange.subject=subject;
			ChangeRule.fire(ruleChange)
		},

		handleDeleteRule:function(){
			DeleteRule.fire(this.props.rule.id)
		},
		getOperatorList:function(){
			var self=this;
	
		   var item = _.find (this.state.operators, function(op){
				return (op.type == self.props.rule.subject.type) 
			 });
			 
			if (item===undefined){

				return [];
			};
			return item.operators;
			},
		render: function() { 
		
		 	var operatorList = this.getOperatorList()	 
			return (
	
			 <div>
				  <Select ref="subject" onChange={this.handleSubjectChange} options={this.props.subjects} selected={this.props.rule.subject.id} />
				  <Select options={operatorList} onChange={this.handleOperatorChange} selected={this.props.rule.operator.id} />
  				 {RuleValueFactory.create(this.props.rule,this.handleValueChange)}
				 <button type="button" onClick={this.handleAddRule} disabled={this.props.preventNewRules} ><Glyphicon glyph='plus' /></button>
				 <button type="button" onClick={this.handleDeleteRule} ><Glyphicon glyph='minus' /></button>
			  </div>
			)
		},


	getStateFromStores:function() {
		return {
		operators: OperatorStore.getState()		};
	}

})

module.exports = app ;




