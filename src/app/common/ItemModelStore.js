define([
        "dojo/_base/declare",
        "dojo/_base/lang",
        "dojo/store/Memory",
        "dojo/request",
        "dojo/_base/array",
        "dojo/topic"
    ],
    function (declare, lang, Memory, request, array, topic) {
        return declare(Container, {

            initialise: function () {
                request("/services/habmin/config/items", {
                    timeout: 5000,
                    handleAs: 'json',
                    preventCache: true,
                    headers: {
                        "Content-Type": 'application/json; charset=utf-8',
                        "Accept": "application/json"
                    }
                }).then(
                    lang.hitch(this, function (data) {
                        console.log("The item model response is: ", data);

                    }),
                    lang.hitch(this, function (error) {
                        console.log("An error occurred: " + error);
                    })
                );

            },

            getStore: function () {
                if (store != null)
                    return store;

                store = new Memory({data: x});

                return store;
            }
        })
});
