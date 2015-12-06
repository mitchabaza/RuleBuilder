'use strict';

var Superagent = require("superagent");

var RuleServiceClient = {
    
    
    executeRule: function (rule) {
        var actions = require("../actions/formActions.js");
        
        Superagent
            .post('http://localhost/webservice/form/listFieldValues?criteria=' + criteria)
            .set('Accept', 'application/json')
            .end(function (res) {
            if (res.ok) {
                actions.receiveListFieldValues(res.body);

            } else {
                alert('Oh no! error ' + res.text);
            }
        });
    }
};

module.exports = ServiceClient;