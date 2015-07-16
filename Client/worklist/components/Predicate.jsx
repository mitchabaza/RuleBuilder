var React = require("React");
var Button= require('react-bootstrap').Button; 
var AddRule = require("../Actions/AddPredicateActionCreator.js");
var ChangeRule = require("../Actions/ChangePredicateActionCreator.js");
var DeleteRule = require("../Actions/DeletePredicateActionCreator.js");
var Select = require('./Controls/Select.jsx');
var Glyphicon = require('react-bootstrap').Glyphicon
var createStoreMixin = require('../mixins/StoreListenerMixin')
var Input=require('react-bootstrap').Input 
var OperatorStore= require("../Stores/OperatorStore.js") 
var RightHandExpressionFactory= require("./RightHandExpressions/Factory.js") 
var DataTypes = require('../Constants/SubjectConstants.js');
var _ =require("lodash");

var app = React.createClass({


		
	 	mixins: [createStoreMixin([OperatorStore])],
		handleAddRule:function(){
			AddRule.fire(this.props.predicate)
		},
		handleValueChange:function(e){
			this.setState({clicked:"value"})

			this.props.onPredicateSelect(this.props.predicate.id);
			var ruleChange=_.clone(this.props.predicate )
		    ruleChange.value=e.getValue();
			ChangeRule.fire(ruleChange)
		},
		componentDidUpdate :function(){
			if (!this.props.active){
				return
			}
			if (this.state.clicked=='operator'){
				if (this.refs.RightHandExpression!=null && this.props.active==true){
					this.refs.RightHandExpression.focus()
				}
			}
			else if(this.state.clicked=='subject'){
				this.refs.operator.focus();
			}
			else if(this.state.clicked=='value'){
			}
			else{
				this.refs.subject.focus()
			}
		  
		},
		
		handleOperatorChange:function(e){
			this.setState({clicked:'operator'})
		 	var ruleChange=_.clone(this.props.predicate )
			ruleChange.value=null;
			ruleChange.operator.id=e.getValue();
			this.props.onPredicateSelect(this.props.predicate.id);
			ChangeRule.fire(ruleChange)
		},
		handleSubjectChange:function(){
			this.setState({clicked:'subject'})
			var ruleChange=_.clone(this.props.predicate )
			var subject = _.find(this.props.subjects, function(s){
				return s.id==this.refs.subject.getValue()
			},this)
			ruleChange.value=null
		    ruleChange.subject=subject;
			this.props.onPredicateSelect(this.props.predicate.id);
			ChangeRule.fire(ruleChange)
		},

		handleDeleteRule:function(){
			DeleteRule.fire(this.props.predicate.id)
		},
		getOperatorList:function(){
			var self=this;
	
		   var item = _.find (this.state.operators, function(op){
				return (op.type == self.props.predicate.subject.type) 
			 });
			 
			if (item===undefined){

				return [];
			};
			return item.operators;
			},
		render: function() { 
		 	
		 	var operatorList = this.getOperatorList()	 
			var  rightHandExpression= RightHandExpressionFactory.create(this.props.predicate, this.handleValueChange)
			return (
	
			 <div className="vertical">
				<div className="vertical conditional">{ this.props.matchType }</div>
				
				
				 <Select ref="subject" onChange={this.handleSubjectChange} options={this.props.subjects} selected={this.props.predicate.subject.id} />
				 <Select ref="operator" options={operatorList} onChange={this.handleOperatorChange} selected={this.props.predicate.operator.id} />
				 {rightHandExpression}
				 <div className="pull-right">
				<div className="predicate-button-container">
					<button type="button" onClick={this.handleAddRule} disabled={this.props.preventNewPredicates} ><Glyphicon glyph='plus' /></button>
					<button type="button" style={{visibility:this.props.hideDelete?"hidden":"visible"}} onClick={this.handleDeleteRule} ><Glyphicon glyph='minus' /></button> 
					<button type="button" onClick={this.handleAddSub} ><Glyphicon glyph='hand-down' /></button> 
			
				</div>
				
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




