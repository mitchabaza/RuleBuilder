var React = require("React");
var SubjectStore= require("../Stores/SubjectStore.js") 

var RuleStore= require("../Stores/RuleStore.js") 
var createStoreMixin = require('../mixins/StoreListenerMixin')
 var Rule= require("./rule.jsx")


var app = React.createClass({
	mixins: [createStoreMixin([SubjectStore,RuleStore])] ,
    render: function() { 
	var noMoreRules = this.state.rules.length==5
	
	var rules = [];
	var self=this;
	this.state.rules.map(function(rule){
		rules.push(<Rule key={rule.id} preventNewRules={noMoreRules} subjects={self.state.subjects} rule={rule}/>)
	})
	return (
		<div className="container" >

		<h3>Patient Rule Creator</h3>
		<div className="alert alert-warning" style={{display:noMoreRules?'block':'none'}} role="alert"><b>Warning!</b>&nbsp;&nbsp;  Maximum number of rule blocks has been added, you dumbass!</div>
		
		<div className="panel panel-default">
		<div className="panel-heading">Create a Rule...</div>
	<div className="panel-body">
			{rules}
		</div>
		 
		</div></div>
	)
    },


	getStateFromStores:function() {
		return {
		rules:RuleStore.getState(),
		subjects: SubjectStore.getState()		};
	}

})

module.exports = app ;




