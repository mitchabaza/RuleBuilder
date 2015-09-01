var React = require("React");
var SubjectStore= require("../Stores/SubjectStore.js") 
var SaveRule = require("../Actions/SaveRuleActionCreator.js");
var RuleStore= require("../Stores/RuleStore.js") 
var createStoreMixin = require('../mixins/StoreListenerMixin')
var Predicate= require("./predicate.jsx")
var Select= require("./Controls/Select.jsx")
var UpdateRule = require("../Actions/UpdateRuleActionCreator.js");
var Bootstrap=require('react-bootstrap') 
var ClearRule = require("../Actions/ClearRulesActionCreator.js");
var Undo =require("../Actions/Undo.js");
var app = React.createClass({
	mixins: [createStoreMixin([SubjectStore,RuleStore])] ,
 	handleSaveClick:function(){
		SaveRule.fire();
	},
	getInitialState:function(){
		return {rule:{matchType:1, predicates:null}}
	},
	handleClearClick:function(){
		ClearRule.fire();
	},
    handleOnSelect:function(id){
		this.setState({activePredicate:id})
	},
	translateMatchType:function() {
	    return this.state.rule.matchType.text == "any" ? "OR" : "AND";
	},
	handleMatchTypeClick:function() {
	    UpdateRule.fire({ id: this.refs.matchType.getValue(), text: this.refs.matchType.getText() });
	},
	handleUndo:function(){
		Undo.fire();
	},
	render: function() { 
		var preds = this.state.rule!=null?this.state.rule.predicates:null;
		var preventNewPredicates;
		var hideDelete ;
		var predicates = [];
	
	if (preds!=null){
		var preventNewPredicates= preds.length==10
		var hideDelete = preds.length==1
		var predicates = [];
		var self=this;
		var index=0
		this.state.rule.predicates.map(function(predicate){
		    predicates.push(<Predicate hideDelete={hideDelete} onPredicateSelect={self.handleOnSelect} key={predicate.id} active={self.state.activePredicate==predicate.id} preventNewPredicates={preventNewPredicates} matchType= {index>0?self.translateMatchType():""} subjects={self.state.subjects} predicate={predicate}/>)
	    index++;
	})
		}
	
	return (
		<div className="container" >
						
			<h3>Create new rule...</h3>
				<div className="alert alert-warning" style={{display:preventNewPredicates?'block':'none'}} role="alert">
					<b>Warning!</b>&nbsp;&nbsp;  Your rule is getting too complicated, you dumbass!!
				</div>
		
				<div className="panel panel-default">
					<div className="panel-heading clearfix">
						<Select  defaultOption={false} ref="matchType"  selected={this.state.rule.matchType.id} onChange={this.handleMatchTypeClick} options={[{id:1,name:"all"},{id:2,name:"any"}]}/>of the following are true		
						<Bootstrap.Button className="pull-right" onClick={this.handleClearClick} type="button">Clear</Bootstrap.Button>
						<Bootstrap.Button className="pull-right" bsStyle='primary' onClick={this.handleSaveClick} type="button">Save</Bootstrap.Button>
					</div>
					<div className="panel-body">
						{predicates}				
					</div>
				</div>
		</div>
	)
    },


	getStateFromStores:function() {
		return {
		rule:RuleStore.getState(),
		subjects: SubjectStore.getState()		};
	}

})

module.exports = app ;




