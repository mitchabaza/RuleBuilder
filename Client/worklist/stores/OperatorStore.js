var BaseStore = require('./basestore.js');

var DataTypes = require('../Constants/SubjectConstants.js');
var Store = new BaseStore({
    displayName: 'OperatorStore',
    events: ['change'],
    getState: function() {
        return [
            {
                type: DataTypes.TEXT,
                operators: [
                    { name: "Does Not Equal", id: 1 },
                    { name: "Equals", id: 2 },
                    { name: "Is Not Null", id: 3 },
                    { name: "Contains", id: 4 },
                    { name: "Does Not Contain", id: 213224 },
                    { name: "Ends With", id: 5 },
                    { name: "Starts With", id: 6 },
                    { name: "Is Null", id: 7 }
                ]
            },
            {
                type: DataTypes.DROP,
                operators: [
                    { name: "Is In ", id: 216 },
                    { name: "Is Not In", id: 317 }
                ]
            },
            {
                type: DataTypes.NUMERIC,
                operators: [
                    { name: "Is Greater Than", id: 16 },
                    { name: "Is Less Than", id: 17 },
                    { name: "Is Equal To", id: 31 },
                    { name: "Is In The Range", id: 897897 },
                    { name: "Is Not In The Range", id: 8978971 }
                ]
            },
           
            {
                type: DataTypes.BOOL,
                operators: [
                    { name: "Is True", id: 216 },
                    { name: "Is False ", id: 217 }
                ]
            },
            {
                type: DataTypes.DATE,

                operators: [
                    { name: "Is Any", id: 1216 },
                    { name: "Is Today", id: 2217 },
                    { name: "Is Not Today", id: 21216 },
                    { name: "Is In The Last", id: 654564 },
                    { name: "Is Not In The Last", id: 6545641}
   
                ]
                //operators: [
                //    { name: "Is", id: 1216 },
                //    { name: "Is After", id: 2217 },
                //    { name: "Is Before", id: 21216 },
                //    { name: "Is In The Range", id: 121216 },
                //    { name: "Is Today", id: 151 },
                //    { name: "Is Not Today", id: 213151 },
                //    { name: "Is In The Last", id: 751212 }


                //]
            }
        ];
    }
});

module.exports = Store;