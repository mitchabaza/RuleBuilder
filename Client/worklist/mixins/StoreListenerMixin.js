'use strict';

function createStoreMixin(stores) {
    var storeMixin = {
        getInitialState: function() {
            return this.getStateFromStores(this.props);
        },

        componentDidMount: function() {

            var self = this;
            stores.map(function (store) {
                store.on('change', self.handleStoresChanged);

            });
        },
        componentWillUnmount: function () {
            var self = this;

            stores.map(function (store) {
                store.off('change', self.handleStoresChanged);

            });

        },
        handleStoresChanged: function() {
            if (this.isMounted()) {
                this.setState(this.getStateFromStores(this.props));
            }
        }
    };
    return storeMixin;
}

module.exports = createStoreMixin;