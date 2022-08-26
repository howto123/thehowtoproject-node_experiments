const { v4 } = require('uuid');
const uuidv4 = v4;

/**
 * The connection to and interaction with the database lives here
 * For now, the db is simulated
 */

// create fake db
let data = [];

exports.dbGetAllSayings = function () {
    return data;
};

exports.dbCreateSaying = function (sayingObject) {
    let id = '';
    do {
        id = String(uuidv4()).slice(0, 4);
    } while (data.some((row) => row._id === id));
    sayingObject._id = id;
    data.push(sayingObject);
};

exports.dbUpdateSaying = function (sayingObject) {
    Object.assign(
        data.find((element) => element._id === sayingObject._id),
        sayingObject
    );
};

exports.dbDeleteSaying = function (sayingObject) {
    const index = data.findIndex((element) => element._id === sayingObject._id);
    if (index > -1) {
        return data.splice(index, 1);
    }
    return undefined;
};