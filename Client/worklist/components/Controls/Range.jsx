var React = require("React");  
var Input=require('react-bootstrap').Input
 
var app = React.createClass( {
 	 
	getValue:function(){
		return {min:this.refs.min.getInputDOMNode().value, max:this.refs.max.getInputDOMNode().value};
	
	},
	focus:function(){
		this.refs.min.getInputDOMNode().focus();

	},
    render: function() { 
	 
	 var min="";
	 var max="";
	  if (this.props.value && this.props.value.min )
		{min=this.props.value.min};
	  if (this.props.value && this.props.value.max )
		{max=this.props.value.max};

		return		 <span>
           <Input ref="min" value={min} onChange={this.props.onChange.bind(null,this)} type="text"/>
           <Input ref="max" value={max}  onChange={this.props.onChange.bind(null,this)} type="text"/>
        </span>
		
    } 

})

module.exports = app ;




