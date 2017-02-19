/**
 * Created by noz687 on 2/19/2017.
 */

var common = require("./common");

const user_access =
    [
        {
            "userName" : "Counselor1",
            "password" : "Password1",
            "role" : "coach",
            "settings" : {
               "pageColor" : "blue"
            }
        },
        {
            "userName" : "Counselor2",
            "password" : "Password2",
            "role" : "coach",
            "settings" : {
                "pageColor" : "blue"
            }
        }
    ];

const incoming_messages =
    [
        {
            "phoneNumber" : "312-555-1234",
            "presentInSystem" : true,
            "studentName" : "Mickey Mouse",
            "date" : "02/14/2017",
            "time" : "7:27 AM",
            "message" : "College student #Support",
            "read" : false,
            "couchName" : "Counselor1",
            "flag" : false
        },
        {
            "phoneNumber" : "312-555-1267",
            "presentInSystem" : false,
            "studentName" : "Unknown",
            "date" : "02/13/2017",
            "time" : "8:27 AM",
            "message" : "Student #Support",
            "read" : false,
            "couchName" : "Counselor1",
            "flag" : false
        },
        {
            "phoneNumber" : "312-555-1267",
            "presentInSystem" : true,
            "studentName" : "Donald Duck",
            "date" : "02/13/2017",
            "time" : "8:27 AM",
            "message" : "Student #Support",
            "read" : true,
            "couchName" : "Counselor2",
            "flag" : true
        }
    ];

const students = [
    {
        "name" : "Mickey Mouse",
        "contact" : {
            "phone" : {
                "cell" : "611-567-9012",
                "home" : "612-561-0012"
            },
            "email" : {
                "primary" : "mickey@cool.com",
                "secondary" : "mickey.mouse@cool.com"
            }
        },
        "tags" : ['#Student', '#Finance', "#Job"],
        "highSchool" : "Cook County School",
        "collegesInterestedIn" : ["University of Machigan", "University of Cook", "University of Hack"],
        "collegeAcceptedInto" : ["University of Machigan", "University of Hack"],
        "interactions" :
            [
                {
                    "media" : "SMS",
                    "date" : {
                        "time": "12:55 PM",
                        "day": "02/18/2017"
                    },
                    "message" : "Hey I am looking for some help"
                },
                {
                    "media" : "Email",
                    "date" : {
                        "time": "02:15 PM",
                        "day": "02/17/2017"
                    },
                    "message" : "Give me some inputs mentioned in email"
                },
                {
                    "media" : "Call",
                    "date" : {
                        "time": "10:25 PM",
                        "day": "02/16/2017"
                    },
                    "message" : "Please send you profile details"
                },
                {
                    "media" : "Social",
                    "date" : {
                        "time": "11:21 PM",
                        "day": "02/19/2017"
                    },
                    "message" : "Check for this website to get help"
                }
            ],
        "flag" : false,
        "coachName" : "Counselor1"
    },
    {
        "name" : "Super Mouse",
        "contact" : {
            "phone" : {
                "cell" : "611-567-9012",
                "home" : "612-561-0012"
            },
            "email" : {
                "primary" : "mickey@cool.com",
                "secondary" : "mickey.mouse@cool.com"
            }
        },
        "tags" : ['#Student', '#Finance', "#Job"],
        "highSchool" : "Cook County School",
        "collegesInterestedIn" : ["University of Machigan", "University of Cook", "University of Hack"],
        "collegeAcceptedInto" : ["University of Machigan", "University of Hack"],
        "interactions" :
            [
                {
                    "media" : "SMS",
                    "date" : {
                        "time": "12:55 PM",
                        "day": "02/18/2017"
                    },
                    "message" : "Hey I am looking for some help"
                },
                {
                    "media" : "Email",
                    "date" : {
                        "time": "02:15 PM",
                        "day": "02/17/2017"
                    },
                    "message" : "Give me some inputs mentioned in email"
                },
                {
                    "media" : "Call",
                    "date" : {
                        "time": "10:25 PM",
                        "day": "02/16/2017"
                    },
                    "message" : "Please send you profile details"
                },
                {
                    "media" : "Social",
                    "date" : {
                        "time": "11:21 PM",
                        "day": "02/23/2017"
                    },
                    "message" : "Hey Check for this website to get help"
                }
            ],
        "flag" : false,
        "coachName" : "Counselor1"
    },
    {
        "name" : "Queen Mouse",
        "contact" : {
            "phone" : {
                "cell" : "611-567-9012",
                "home" : "612-561-0012"
            },
            "email" : {
                "primary" : "mickey@cool.com",
                "secondary" : "mickey.mouse@cool.com"
            }
        },
        "tags" : ['#Student', '#Finance', "#Job"],
        "highSchool" : "Cook County School",
        "collegesInterestedIn" : ["University of Machigan", "University of Cook", "University of Hack"],
        "collegeAcceptedInto" : ["University of Machigan", "University of Hack"],
        "interactions" :
            [
                {
                    "media" : "SMS",
                    "date" : {
                        "time": "12:55 PM",
                        "day": "02/18/2017"
                    },
                    "message" : "Hey I am looking for some help"
                },
                {
                    "media" : "Email",
                    "date" : {
                        "time": "02:15 PM",
                        "day": "02/17/2017"
                    },
                    "message" : "Give me some inputs mentioned in email"
                },
                {
                    "media" : "Call",
                    "date" : {
                        "time": "10:25 PM",
                        "day": "02/16/2017"
                    },
                    "message" : "Please send you profile details"
                },
                {
                    "media" : "Social",
                    "date" : {
                        "time": "11:21 PM",
                        "day": "02/26/2017"
                    },
                    "message" : "Please, Check for this website to get help"
                }
            ],
        "flag" : false,
        "coachName" : "Counselor2"
    },
    {
        "name" : "King Mouse",
        "contact" : {
            "phone" : {
                "cell" : "611-567-9012",
                "home" : "612-561-0012"
            },
            "email" : {
                "primary" : "mickey@cool.com",
                "secondary" : "mickey.mouse@cool.com"
            }
        },
        "tags" : ['#Student', '#Finance', "#Job"],
        "highSchool" : "Cook County School",
        "collegesInterestedIn" : ["University of Machigan", "University of Cook", "University of Hack"],
        "collegeAcceptedInto" : ["University of Machigan", "University of Hack"],
        "flag" : true,
        "coachName" : "Counselor1"
    },
    {
        "name" : "Mouse",
        "contact" : {
            "phone" : {
                "cell" : "611-567-9012",
                "home" : "612-561-0012"
            },
            "email" : {
                "primary" : "mickey@cool.com",
                "secondary" : "mickey.mouse@cool.com"
            }
        },
        "highSchool" : "Cook County School",
        "collegesInterestedIn" : ["University of Machigan", "University of Cook", "University of Hack"],
        "collegeAcceptedInto" : ["University of Machigan", "University of Hack"],
        "flag" : true,
        "coachName" : "Counselor2"
    }
];


module.exports.createConfig = function(db) {
    common.configAdopter(db, "incoming_messages", incoming_messages);
    common.configAdopter(db, "students", students);
    common.configAdopter(db, "user_access", user_access);
};
