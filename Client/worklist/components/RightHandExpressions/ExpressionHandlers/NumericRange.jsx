var Range= require("./../../Controls/Range.jsx")
var React = require("React");

var DataTypes = require('../../../Constants/SubjectConstants.js');
module.exports = {
    

    canHandle: function(rule) {
        //gross!
        if (rule.operator.id ==  897897 || rule.operator.id ==  8978971) {
            return true;
        }
    },

    handle:function(rule, onChange) {
	 
		 
			return <Range  ref= "RightHandExpression"   value={rule.value} onChange={onChange}/>
			
     }
}