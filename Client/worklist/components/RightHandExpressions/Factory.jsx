
var Text = require('./../Controls/Text.jsx');
var Range = require('./../Controls/Range.jsx');
var Select = require('./../Controls/Select.jsx');
var DataTypes = require('../../Constants/SubjectConstants.js');
var React = require("React");
var exports = require("./index.js");


var Factory = {
        create: function(rule, onChange) {
        
            var component = null;

            for (var i = exports.expressionHandlers.length - 1; i >= 0; i--) {
                if (exports.expressionHandlers[i].canHandle(rule)) {
                    return exports.expressionHandlers[i].handle(rule, onChange);
                }
            }
            if (rule.subject.type === DataTypes.BOOL || rule.subject.type == undefined) {
                return component;
            }
        
            else if (rule.subject.type === DataTypes.TEXT|| rule.subject.type === DataTypes.NUMERIC) {
                component = Text;
			}
            else if (rule.operator && (rule.operator.id === 117 || rule.operator.id === 121216)) {
                component = Range;
            }
            else if (rule.subject.type === DataTypes.DATE ) {
                component = Text;
            }
            if (component==null){
                return null;
            }
            return React.createElement(component, { ref: "RightHandExpression", value: rule.value , onChange: onChange });

        }

}
 
module.exports = Factory;