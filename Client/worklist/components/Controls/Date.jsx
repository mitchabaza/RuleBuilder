var React = require("React");  
var DatePicker=require('react-bootstrap-datetimepicker')
var Select=require("./Select.jsx")
 var moment = require("moment")
var app = React.createClass( {
 	 
	focus:function(){

	},
	handleOnChange:function(date){
		 
		 var obj = {
			getValue:function(){return date}
		 };
		this.props.onChange(obj)
	},
    render: function() { 
		var value=null;
		if (this.props.value==null){
			value = moment().format("MM/DD/YY");
		}
 		return <div className="form-group"><DatePicker format="MM/DD/YY" mode="date" dateTime={value} ref="Date" onChange={this.handleOnChange} /></div>
		
		
    } 

})

module.exports = app ;




