var React = require("React");
var Input=require('react-bootstrap').Input
var _ = require("lodash") 
var Select = React.createClass({
 
	getDefaultProps: function() {
    return {
      defaultOption: false
    }},
	getValue:function(){
		return this.refs.select.getInputDOMNode().value;	
	},

    render: function() { 
		var options=[];
		if (this.props.defaultOption){
			options.push(<option value='select'>Select...</option>);
		}
		var self=this;

		this.props.options.map(function(option){
				options.push(<option value={option.id}>{option.name}</option>)
		   })
		return (
	
			 <Input  ref={this.props.ref} style ={this.props.style} ref="select" onChange={self.props.onChange.bind(null, this)} type='select' value={self.props.selected} standalone placeholder='select' >
			  {options}
			</Input>
		)
    }
})

module.exports = Select ;




