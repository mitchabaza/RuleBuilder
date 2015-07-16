var Select= require("./../../Controls/Select.jsx")
var React = require("React");

var DataTypes = require('../../../Constants/SubjectConstants.js');
module.exports = {
    

    canHandle: function(rule) {
        if (rule.subject.type ==  DataTypes.DATE ) {
            return true;
        }
    },

    handle:function(rule, onChange) {
		var options = [
			{id:"Day",name:"Day"},
			{id:"Week",name:"Week"},
			{id:"Month",name:"Month"} 
		]
		if (rule.operator.id == 6545641 ||rule.operator.id ==654564){
			return <Select  ref= "RightHandExpression"  options={options} value={rule.value} onChange={onChange}/>;
		}
		else{
			return null
		}
     }
}