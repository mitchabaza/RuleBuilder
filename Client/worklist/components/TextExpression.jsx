var React = require("React");  
var Input=require('react-bootstrap').Input
 


var app = React.createClass( {
 	 
	getValue:function(){
		return this.refs.textInput.getInputDOMNode().value;
	
	},
	 
    render: function() { 
	 

		return <Input ref="textInput" onChange={this.props.onChange.bind(null, this)} type='text' value={this.props.value} />
	    
	 
    } 

})

module.exports = app ;




