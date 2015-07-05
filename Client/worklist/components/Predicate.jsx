﻿var React = require("React");
var Button= require('react-bootstrap').Button; 
var AddRule = require("../Actions/AddPredicateActionCreator.js");
var ChangeRule = require("../Actions/ChangePredicateActionCreator.js");
var DeleteRule = require("../Actions/DeletePredicateActionCreator.js");
var Select = require('./Select.jsx');
var Glyphicon = require('react-bootstrap').Glyphicon
var createStoreMixin = require('../mixins/StoreListenerMixin')
var Input=require('react-bootstrap').Input 
var OperatorStore= require("../Stores/OperatorStore.js") 
var RightHandExpressionFactory= require("./RightHandExpressions/Factory.jsx") 
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
		componentDidUpdate :function(){
			if (this.refs.RightHandExpression!=null && this.props.active==true){
				this.props.onPredicateSelect(null);
				this.refs.RightHandExpression.focus()
			}
		  
		},
		
		handleOperatorChange:function(e){
		 	var ruleChange=_.clone(this.props.rule )
			ruleChange.operator.id=e.getValue();
			this.props.onPredicateSelect(this.props.rule.id);
			ChangeRule.fire(ruleChange)
		},
		handleSubjectChange:function(){
			var ruleChange=_.clone(this.props.rule )
			var subject = _.find(this.props.subjects, function(s){
				return s.id==this.refs.subject.getValue()
			},this)
			ruleChange.value=null
		    ruleChange.subject=subject;
			this.props.onPredicateSelect(null);
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
			var  rightHandExpression= RightHandExpressionFactory.create(this.props.rule, this.handleValueChange)
			return (
	
			 <div>
				 <Select ref="subject" onChange={this.handleSubjectChange} options={this.props.subjects} selected={this.props.rule.subject.id} />
				 <Select options={operatorList} onChange={this.handleOperatorChange} selected={this.props.rule.operator.id} />
				 {rightHandExpression}
				 <div className="pull-right">
				 <button type="button" onClick={this.handleAddRule} disabled={this.props.preventNewPredicates} ><Glyphicon glyph='plus' /></button>
				 <button type="button" style={{visibility:this.props.hideDelete?"hidden":"visible"}} onClick={this.handleDeleteRule} ><Glyphicon glyph='minus' /></button>
				 </div>

			  </div>
			)
		},


	getStateFromStores:function() {
		return {
		operators: OperatorStore.getState()		};
	}

})

module.exports = app ;




