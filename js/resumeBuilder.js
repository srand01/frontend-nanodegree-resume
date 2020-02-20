/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name": "Srand01",
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
}

var education = {
    "schools": [
        {
            "name": "University",
            "location": "USA",
            "degree": "BA",
            "majors": ["Communication"],
            "dates": 2018,
            "url": "http://example.com"
        },
        {
            "name": "srand01",
            "location": "earth",
            "degree": "BA",
            "majors": ["communication"],
            "dates": 2018,
            "url": "http://example"
        }
    ],

    "onlineCourses": [
        {
            "title": "JavaScript Syntax",
            "school": "Udacity",
            "dates": 2020,
            "url": "htt"
        }
    ]
}

var work = {
    "jobs": [
        {
            "employer": "Planet Express",
            "title": "Delivery Boy",
            "dates": "January 3000 - Future",
            "description": "Who moved my cheese cheesy feet cauliflower cheese",
        },
        {
            "employer": "Panucci's Pizza",
            "title": "Delivery Boy",
            "dates": "1998 - December 31, 1999",
            "description": "Who moved my cheese cheesy feet cauliflower cheese",
        }
    ]
}

var projects = {
    "projects": [
        {
            "title": "Sample Project 1",
            "dates": "2014",
            "description": "Who moved my cheese cheesy feet cauliflower",
            "images": [
                "https://images.dog.ceo/breeds/spaniel-japanese/n02085782_382.jpg",
                "https://images.dog.ceo/breeds/eskimo/n02109961_11634.jpg"
            ]
        },
        {
            "title": "Sample Project 2",
            "dates": "2018",
            "description": "Who moved my cheese cheesy feet cauliflower",
            "images": [
                "https://images.dog.ceo/breeds/spaniel-japanese/n02085782_382.jpg",
                "https://images.dog.ceo/breeds/eskimo/n02109961_11634.jpg"
            ]
        }

    ]
}

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);

}


$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));