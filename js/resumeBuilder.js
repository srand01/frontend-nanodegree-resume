/*
This is empty on purpose! Your code to build the resume will go here.
 */
var formattedRole = HTMLheaderRole.replace("%data%", "Web developer");
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", "srand01");
$("#header").prepend(formattedName);

var bio = {
    "name": "srand01",
    "role": "Web Developer",
    "contacts": {
        "mobile": "000-000-0000",
        "email": "srand01 github",
        "github": "srand01",
        "twitter": "N/A",
        "location": "earth"
    },
    "WelcomeMessage": "Hi there!",
    "skills": ["HTML", "CSS", "JAVASCRIPT"],
    "bioPic": "chairmander.png"


};

$("#main").append(bio);

var work = {};
work.position = "Developer";
work.employer = "Self-employed";
work.years = 2;

var education = {};
education["name"] = "University";
education["years"] = "2013-2018";
education["city"] = "US";

$("#main").append(work["position"]);
$("#main").append(education.name);