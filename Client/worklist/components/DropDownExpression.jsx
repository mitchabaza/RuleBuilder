var React = require("React");  
var Input=require('react-bootstrap').Input
 


var app = React.createClass( {
 	 
	 getValue:function(){
		return this.refs.select.getInputDOMNode().value;	
	},

    render: function() { 
	 
		return (<Input onChange={this.props.onChange.bind(this,this)} type='select' ref="select" value={this.props.value} standalone placeholder='select' >
			<option value="select">Select...</option>
			<option value="1">Pediatric Intensive Care Unit </option>
			<option value="2">Emergency Department (ED)</option>
			<option value="3">Cardiothoracic Intensive Care Unit (CTICU)</option>
			<option value="4">Hematology/Oncology</option>
			<option value="5">Cardiovascular Acute</option>
			<option value="6">Newborn and Infant Critical Care Unit (NICCU)</option>

		</Input>
		)
	 
    } 

})

module.exports = app ;




