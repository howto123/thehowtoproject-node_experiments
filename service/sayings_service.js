const {
    dbGetAllSayings,
    dbCreateSaying,
    dbUpdateSaying,
    dbDeleteSaying
} = require('../repository/sayings_repository');

/**
 * Here, the main logic happens. The exported functions can be used in the in the controller, more 
 * which are the endpoint callbacks of app.js. They take
 * @param {*} saying 
 * @param {*} author 
 * @param {*} topic 
 * and return an array of sayings (to be displayed at the client eventually)
 */

exports.createSaying = function (id, saying, author, topic) {
    console.log("call repository create(): ", saying, author, topic);
    const sayingObject = {
        _id: id,
        saying: saying,
        author: author,
        topic: topic
    };
    dbCreateSaying(sayingObject);
    return dbGetAllSayings();
};

exports.readSaying = function (id, saying, author, topic) {
    console.log("call repository read(): ", saying, author, topic);
    return dbGetAllSayings();
};

exports.updateSaying = function (id, saying, author, topic) {
    console.log("call repository update(): ", saying, author, topic);
    const sayingObject = {
        _id: id,
        saying: saying,
        author: author,
        topic: topic
    };
    dbUpdateSaying(sayingObject);
    return dbGetAllSayings();
}

exports.deleteSaying = function (id, saying, author, topic) {
    console.log("call repository delete(): ", saying, author, topic);
    const sayingObject = {
        _id: id,
        saying: saying,
        author: author,
        topic: topic
    };
    dbDeleteSaying(sayingObject);
    return dbGetAllSayings();
};

