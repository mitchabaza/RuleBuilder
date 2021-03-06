﻿var React = require("React");

var AutoComplete = require("./../../Controls/AutoComplete.jsx")
module.exports = {
    
    
    canHandle: function (rule) {
        if (rule.subject.id == 1 && (rule.operator.id == 317|| rule.operator.id == 216 )) {
            return true;
        }
    },
    
    handle: function (rule, onChange) {
        return <AutoComplete remoteDataSource='/Sentri7.Services/Diagnosis/Search?beginsWith=' ref= "RightHandExpression"  value={rule.value} onChange={ onChange}/>;
    }
}