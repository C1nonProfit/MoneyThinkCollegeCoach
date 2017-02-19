/**
 * Created by noz687 on 2/18/2017.
 */

var AWS = require("aws-sdk");

AWS.config.update({
    region: "us-east-1",
    endpoint: "http://dynamodb.us-east-1.amazonaws.com",
    "accessKeyId": "AKIAJZ5Q6JVPOP6AILBA",
    "secretAccessKey": "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"
});

var docClient = new AWS.DynamoDB.DocumentClient();

exports.getStudents = function(callback) {
    var params = {
        TableName: "MoneyThinkStudent"
    };
    docClient.scan(params, function(err, data) {
        if (err) {
            console.error(err);
        } else {
            callback(data.Items);
        }
    });
};

exports.getMessages = function() {

};