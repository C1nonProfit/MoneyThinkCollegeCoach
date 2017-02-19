var AWS = require("aws-sdk");

var awsConfig = require('../config/awsConfig');
AWS.config.update({
  region: awsConfig.region,
  endpoint: awsConfig.endpoint,
  "accessKeyId": awsConfig.accessKeyId,
  "secretAccessKey": awsConfig.secretAccessKey
});

var docClient = new AWS.DynamoDB.DocumentClient();



exports.getStudents = function(callback) {
    // var studentsObj = require('../students.json');
    // return studentsObj.students;

    var params = {
    TableName: "MoneyThinkStudent"
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
