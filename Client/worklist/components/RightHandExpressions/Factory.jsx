var Text = require('./Text.jsx');
var Range = require('./Range.jsx');
var PickList = require('./ComboBox.jsx');
var DataTypes = require('../../Constants/SubjectConstants.js');

var React = require("React");  
var Factory = {
        create: function(rule, onChange) {
        
            if (rule.subject.type == DataTypes.BOOL || rule.subject.type == undefined) {
                return null;
            }

            var component = Text
            if (rule.subject.type == DataTypes.DROP) {
                component = PickList;
            }
            if (rule.operator && rule.operator.id ==117) {
                component = Range;
            }
            
            return React.createElement(component, { ref: "RightHandExpression",value: rule.value, onChange: onChange })

        }

}
 
module.exports = Factory;
