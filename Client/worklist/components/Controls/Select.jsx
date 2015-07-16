var React = require("React");
var Input=require('react-bootstrap').Input
var _ = require("lodash") 
var Select = React.createClass({
 
	focus:function(){
		 this.refs.select.getInputDOMNode().focus();

	},
	getDefaultProps: function() {
    return {
      defaultOption: true
    }},
	getValue:function(){
		return this.refs.select.getInputDOMNode().value;	
	},
	getText:function() {

	    var el = this.refs.select.getInputDOMNode().options;
		return el[el.selectedIndex].innerHTML;	

	},
    render: function() { 
		var options=[];
		if (this.props.defaultOption==true){
			options.push(<option key="-1" value='-1'>Select...</option>);
		}
		var self=this;

		this.props.options.map(function(option){
				options.push(<option key={option.id} value={option.id}>{option.name}</option>)
		   })
		return (
	
			 <Input   style={this.props.style} ref="select" onChange={self.props.onChange.bind(null, this)} type='select' value={self.props.selected}  placeholder='-1' >
			  {options}
			</Input>
		)
    }
})

module.exports = Select ;




