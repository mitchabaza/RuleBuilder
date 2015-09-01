 'use strict';
 
var React = require("React");  
var Autocomplete=require('react-select')
var Superagent = require("superagent");

var app = React.createClass( {
 	 
	 handleOnChange:function(data,selectedOptions){
	  var proxy = {
			getValue:function(){return selectedOptions}
		 };
		this.props.onChange(proxy)
	 },
	focus:function(){
	
		 this.refs.autocomplete.focus()
	},
	getOptions:function(input, callback){
		if (input.length<this.props.inputLength){
		return}
	  Superagent
            .post(this.props.remoteDataSource + input)
            .set('Accept', 'application/json')
            .end(function (res) {
            if (res.ok) {
		
				callback(null, res.body)
            } else {
                alert('Oh no! error ' + res.text);
            }})
	},
	getDefaultProps: function() {
    return {
      autoload: false,
	  inputLength:2
    }},
    render: function() { 
	 
    	return <div style= { {"display":"inline-block", "width":"50%","paddingBottom":"5px" }} >
		<Autocomplete autoload={this.props.autoload} ref="autocomplete" value={this.props.value||null} onChange ={this.handleOnChange} multi={true} asyncOptions={this.getOptions}/></div>
	 
    } 

})

module.exports = app ;




