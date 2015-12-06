 'use strict';
 
var React = require("React");  
var Autocomplete=require('react-select')
var Superagent = require("superagent");

var app = React.createClass( {
 	 
	 handleOnChange:function(data,selectedOptions){
	  var closure = {
			getValue:function(){return selectedOptions}
		 };
		this.props.onChange(closure)
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
	  inputLength:2,
	  multi:true
    }},
    render: function() {

	 var async =null;
		if (this.props.remoteDataSource){

			async= this.getOptions;
		}
    	return <div style= { {"display":"inline-block", "width":"100%","paddingBottom":"5px" }} >
		<Autocomplete autoload={this.props.autoload} ref="autocomplete" value={this.props.value||null} options={this.props.options} onChange ={this.handleOnChange} multi={this.props.multi} asyncOptions={async}  /></div>
	 
    } 

})

module.exports = app ;




