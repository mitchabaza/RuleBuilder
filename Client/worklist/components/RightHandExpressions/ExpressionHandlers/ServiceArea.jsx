var React = require("React");

var AutoComplete = require("./../../Controls/AutoComplete.jsx")
module.exports = {
    
    
    canHandle: function (rule) {
        if (rule.subject.id == 4) {
            return true;
        }
    },
    
    handle: function (rule, onChange) {
        return <AutoComplete remoteDataSource='/Sentri7.Services/ServiceArea/Search?beginsWith=' ref= "RightHandExpression" inputLength={0} value={rule.value} autoload={true} onChange={onChange}/>;
    }
}