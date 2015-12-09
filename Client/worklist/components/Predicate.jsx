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
var RightHandExpressionFactory= require("./RightHandExpressions/Factory.jsx")
var DataTypes = require('../Constants/SubjectConstants.js');

var AutoComplete = require("./Controls/AutoComplete.jsx");
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
				if (this.refs.RightHandExpression!=null){
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
		handleSubjectChange:function(value){
			this.setState({clicked:'subject'})
			var subjectVal=value.getValue().length==1?value.getValue()[0].value:null;
			var ruleChange=_.clone(this.props.predicate )
			var subject = _.find(this.props.subjects, function(s){
				return s.id==subjectVal
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
	_createSubjectsForDropDown:function(){
		return _.map(this.props.subjects, function(s){
			return  {value:s.id, label:s.name}
		})
	},
		render: function() {

			var opts = this._createSubjectsForDropDown()
		 	var operatorList = this.getOperatorList()
			var subjectValue= {value:this.props.predicate.subject.id, label:this.props.predicate.subject.name}
			var  rightHandExpression= RightHandExpressionFactory.create(this.props.predicate, this.handleValueChange)
			return (
	
			 <div className="vertical row" >

				<div className="vertical conditional col-md-1" >{ this.props.matchType }</div>


				<div  className="col-md-3"> <AutoComplete ref="newSubject" options={opts} value={subjectValue} multi={false} onChange={ this.handleSubjectChange}/></div>
				 <div  className="col-md-3">	 <Select ref="operator" options={operatorList} onChange={this.handleOperatorChange} selected={this.props.predicate.operator.id} /></div>
				 <div  className="col-md-4">		 {rightHandExpression}</div>
				<div className="pull-right">
				<div className="col-md-1 predicate-button-container">
					<button type="button" onClick={this.handleAddRule} disabled={this.props.preventNewPredicates} ><Glyphicon glyph='plus' /></button>
					<button type="button" style={{visibility:this.props.hideDelete?"hidden":"visible"}} onClick={this.handleDeleteRule} ><Glyphicon glyph='minus' /></button>
				 
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




