//Geting User module.
const users = require('./users.js');

module.exports = {
    readAll: function () {
        return users.find();
    },

    findUserById: function (userId) {
        return users.findOne('id', userId);
    },

    getAdmins: function () {
        return users.find('type', 'admin');
    },

    getNonAdmins: function () {
        return users.find('type', 'user');
    },

    getUsersByFavorite: function (favorite) {
        var tempObj = users.find();
        //console.log('Showing return for geUserByFaovirte: ', tempObj);
        var tempArray = [];

        for (var index = 0; index < tempObj.length; index++) {
            for (var i2 = 0; i2 < tempObj[index]["favorites"].length; i2++) {
                if(tempObj[index]["favorites"][i2] === favorite){
                    tempArray.push(tempObj[index]);
                }
            }
        }

        //console.log('Show the find favorite results: ', tempArray);
        return tempArray;
    },

    getUsersByAgeLimit: function (age) {
        return users.find('age', age);
    },

    findUserByQuery: function (query, value) {
        var tempQuery = query.toLowerCase();
        //console.log('Showing finduser query: ', tempQuery);

        return users.find(tempQuery, value);
    },

    createUser: function (userObj) {
        return users.add(userObj);
    },

    updateUser: function (userId, obj) {
        console.log('Showing stuff for updateUser: ');
        console.log('Showing userId val: ', userId);
        console.log('Showing Obj val: ', obj);
        users.update('id', userId, obj); 
    },

    removeUser: function (userId) {
        var tempVal = users.findOne('id', userId);
        users.remove('id', userId);
        return tempVal;
    }
};