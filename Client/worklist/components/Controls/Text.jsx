﻿var React = require("React");  
var Input=require('react-bootstrap').Input
 


var app = React.createClass( {
 	 
	getValue:function(){
		return this.refs.textInput.getInputDOMNode().value;
	
	},
	 
	focus:function(){
	
		 this.refs.textInput.getInputDOMNode().focus();
	},
    render: function() { 
	 

		return <Input ref="textInput" onBlur={this.props.onChange.bind(null, this)} type='text' defaultValue={this.props.value} />
	    
	 
    } 

})

module.exports = app ;




