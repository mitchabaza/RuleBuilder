var React = require("React");
var SubjectStore= require("../Stores/SubjectStore.js") 
var createStoreMixin = require('../mixins/StoreListenerMixin')
 var Button= require('react-bootstrap').Button; 
 var Input=require('react-bootstrap').Input
 
var app = React.createClass({
	mixins: [createStoreMixin(SubjectStore)],
	 

    render: function() { 
	var innerHtml=[];
	this.state.subjects.map(function(option){
			innerHtml.push(<option value={option}>{option}</option>)
	   })
	return (
	
	 <div>
     
	 </div>
	)
    },


	getStateFromStores:function() {
		return {
		subjects: SubjectStore.getState()		};
	}

})

module.exports = app ;




