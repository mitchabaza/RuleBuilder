var Text = require('./TextExpression.jsx');
var PickList = require('./DropDownExpression.jsx');
var DataTypes = require('../Constants/SubjectConstants.js');

var React = require("React");  
var Factory = {
        create: function(rule, onChange) {
        
            if (rule.subject.type == DataTypes.DROP) {
                return React.createElement(PickList, { value: rule.value, onChange: onChange })
            }
            if (rule.subject.type == DataTypes.BOOL || rule.subject.type ==undefined) {
                return null;
            }

            return React.createElement(Text, { value: rule.value, onChange: onChange })

        }

}
 
module.exports = Factory;
