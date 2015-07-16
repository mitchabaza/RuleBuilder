var React = require("React");  
var Input=require('react-bootstrap').Input
 


var app = React.createClass( {
 	 
	 getValue:function(){
		return this.refs.selectInput.getInputDOMNode().value;	
	},
	focus:function(){
	
		 this.refs.selectInput.getInputDOMNode().focus();
	},

    render: function() { 
	 
		return (<Input className="form-control-inline" onChange={this.props.onChange.bind(null,this)} type='select' ref="selectInput" value={this.props.value}  placeholder='select' >
			

		</Input>
		)
	 
    } 

})

module.exports = app ;




