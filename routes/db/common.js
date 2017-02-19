/**
 * Created by noz687 on 2/17/2017.
 */


function insert(collection, config) {
    var insert = collection.insert(config);
    insert.then(function (insertDoc) {
        console.log(insertDoc);
    }, function (err) {
        console.log(err);
    });
};

function createNewConfig(db, collectionName, config) {
    var collection = db.get(collectionName);
    console.log(collectionName + " config is getting processed...!");
    collection.find({}, {}, function (err, doc) {
        if(!err) {
            if(doc == undefined || doc.length === 0) {
                insert(collection, config);
            } else {
                console.log(collectionName + " config is already present...!");
            }
        }
    });
};

module.exports.configAdopter = function(db, collectionName, config) {
    createNewConfig(db, collectionName, config);
};
