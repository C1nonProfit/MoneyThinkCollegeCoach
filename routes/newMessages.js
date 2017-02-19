var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1",
  endpoint: "http://dynamodb.us-east-1.amazonaws.com",
  "accessKeyId": "AKIAJZ5Q6JVPOP6AILBA",
  "secretAccessKey": "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"
});

var docClient = new AWS.DynamoDB.DocumentClient();



exports.getMessages = function(callback) {
    // var studentsObj = require('../students.json');
    // return studentsObj.students;

    var params = {
    TableName: "moneyThinkMessages"
    // FilterExpression: ""
    // ExpressionAttributeNames: {
    //     "#yr": "year",
    // },
    // ExpressionAttributeValues: {
    //      ":start_yr": 1950,
    //      ":end_yr": 1959
    // }
    };

    docClient.scan(params, function(err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            //console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
            callback(data.Items);
        }
    });
};

exports.getMessages = function() {

};
