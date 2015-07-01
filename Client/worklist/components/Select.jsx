var React = require("React");
 var Input=require('react-bootstrap').Input
 
var Select = React.createClass({
 
	getValue:function(){
		return this.refs.select.getInputDOMNode().value;	
	},

    render: function() { 
		var options=[];
		options.push(<option value='select'>Select...</option>);
		var self=this;

		this.props.options.map(function(option){
				options.push(<option value={option.id}>{option.name}</option>)
		   })
		return (
	
			 <Input  ref={this.props.ref} ref="select" onChange={self.props.onChange.bind(null, this)} type='select' value={self.props.selected} standalone placeholder='select' >
			  {options}
			</Input>
		)
    }
})

module.exports = Select ;




