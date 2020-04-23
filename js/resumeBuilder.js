/*START OF BIO*/
var bio = {

    "name": "Srand01",
    "role": "Web Developer",
    "contacts": {
        "mobile": "000-000-0000",
        "email": "srand01@github.com",
        "github": "srand01",
        "twitter": "srand01Twitter",
        "location": "Miami, Florida"
    },

    "WelcomeMessage": "Hi there!",
    "skills": ["HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP", "JQUERY", 
        "MONGO DB", "METEOR", "GIT", "GITHUB", "ENGLISH", "SPANISH",
        "PORTUGUESE"],
    "bioPic": "./images/chairmander.png",

    display: function() {

        var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedHeaderName);

        for (var contact in bio.contacts) { 
            var formattedHTMLcontactGeneric = HTMLcontactGeneric.replace("%contact%", contact);
            formattedHTMLcontactGeneric = formattedHTMLcontactGeneric.replace("%data%", bio.contacts[contact]);
            $("#topContacts").append(formattedHTMLcontactGeneric);
            $("#footerContacts").append(formattedHTMLcontactGeneric);     
        }

        var formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.WelcomeMessage);
        $("#header").append(formattedHTMLwelcomeMsg);

        var formattedHTMLbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
        $("#header").append(formattedHTMLbioPic);
        
        $("#header").append(HTMLskillsStart);
        if (bio.skills.length > 0) {
            for (var skill in bio.skills){
                var formattedHTMLskills = HTMLskills.replace("%data%", bio.skills[skill]);
                $("#skills").append(formattedHTMLskills);
            }
        }

    }
}
/*END OF BIO*/

/*START OF WORK*/
var work = {
    "jobs": [
        {
            "employer": "The junction | Dinning services",
            "title": "Junction employee",
            "location": "Logan, Utah",
            "dates": "2015 - 2016",//I put this by myself, can be 'in progress'
            "description": "Serve food, wash dishes, keep food area clean",
            "url": "https://dining.usu.edu/locations/the-junction",
        },
        {
            "employer": "Utah State University",
            "title": "Spanish Teaching Assistant",
            "location": "Price, Utah",
            "dates": "2016 - 2017",//I put this by myself, can be 'in progress'
            "description": "Helping out teachers, office hours, grading homework",
            "url": "http://lpcs.usu.edu/",
        }
    ],
    display: function(){
        for (var i = 0; i < work.jobs.length; i++) {
            $("#workExperience").append(HTMLworkStart);
    
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            formattedEmployerTitle = formattedEmployerTitle.replace("#", work.jobs[i].url);
    
            $(".work-entry:last").append(formattedEmployerTitle);
            $(".work-entry:last").append(formattedDates);
            $(".work-entry:last").append(formattedLocation);
            $(".work-entry:last").append(formattedDescription);
    
        }

    }
}
/*END OF WORK*/

/*START OF PROJECTS*/
var projects = {
    "projects": [
        {
            "title": "Background Generator",
            "dates": "2020",
            "description": "Mix your favorite colors or generate them",
            "url": "https://srand01.github.io/background-generator/",
            "images": [
                "images/project1.2.png",
                "images/test.png"
            ]
        },
        {
            "title": "Survey Form",
            "dates": "2019",
            "description": "A survey form made only with HTML and CSS",
            "url": "https://srand01.github.io/survey-form/",
            "images": [
                //"https://images.dog.ceo/breeds/spaniel-japanese/n02085782_382.jpg",
                //"https://images.dog.ceo/breeds/eskimo/n02109961_11634.jpg"
                "images/project2.2.png", "images/project2.png"
            ]
        }

    ],
    display: function(){
        for (prop in projects.projects) {
            $("#projects").append(HTMLprojectStart);
    
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[prop].title);
            formattedTitle = formattedTitle.replace("#", projects.projects[prop].url);
            $(".project-entry:last").append(formattedTitle);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[prop].dates);
            $(".project-entry:last").append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[prop].description);
            $(".project-entry:last").append(formattedDescription);
    
            if (projects.projects[prop].images.length > 0) {
                for (image in projects.projects[prop].images) {
                    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[prop].images[image]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        }

    }
}
/*END OF PROJECTS*/

/*START OF EDUCATION*/
var education = {
    "schools": [
        {
            "name": "Utah State University",
            "location": "Logan, Utah",
            "degree": "BA",
            "majors": ["Global Communications", "minors in Computer science"],
            "dates": "2013-2017",
            "url": "https://www.usu.edu"
        },
    ],
    
    "onlineCourses": [
        {
            "title": "Responsive Website Basics: Code with HTML, CSS, and JavaScript",
            "school": "University of London",
            "dates": "2020",
            "url": "https://www.coursera.org/learn/website-coding",
            "certificate": "https://coursera.org/share/cbf4cff724ed8b80831307f2cbc9a76a"
        },
        {
            "title": "Responsive Web Design",
            "school": "University of London",
            "dates": "2020",
            "url": "https://www.coursera.org/learn/responsive-web-design?specialization=website-development",
            "certificate": "https://coursera.org/share/2ddf969b7554175d501d608d5fd393ec"
        },
        {
            "title": "Introduction to Meteor.js Development ",
            "school": "University of London",
            "dates": "IN PROGRESS",
            "url": "https://www.coursera.org/learn/meteor-development?specialization=website-development",
            "certificate": "#"
        }
    ],

    display: function(){
        /*************************************************SCHOOLS********************************************/

        $("#education").append(HTMLschoolStart);

        for (var i = 0; i < education["schools"].length; i++){

            var formattedHTMLschoolName = HTMLschoolName.replace("%data%", education["schools"][i].name);
            var formattedHTMLschoolDegree = HTMLschoolDegree.replace("%data%", education["schools"][i].degree);
            var formattedsSchoolNameDegree = formattedHTMLschoolName + formattedHTMLschoolDegree;
            formattedsSchoolNameDegree = formattedsSchoolNameDegree.replace("#", education["schools"][i].url);
            $(".education-entry").append(formattedsSchoolNameDegree);

            var formattedHTMLschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            $(".education-entry").append(formattedHTMLschoolDates);

            var formattedHTMLschoolLocation = HTMLschoolLocation.replace("%data%", education["schools"][i].location);
            $(".education-entry").append(formattedHTMLschoolLocation);

            var formattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%", education["schools"][i].majors);
            formattedHTMLschoolMajor = formattedHTMLschoolMajor.replace(/,/gm, ", ");
            $(".education-entry").append(formattedHTMLschoolMajor);
        }
        
        /*************************************************ONLINE COURSES********************************************/

        $("#education").append(HTMLonlineClasses);//<h3<Online Classes</h3>

        for (var i = 0; i < education["onlineCourses"].length; i++) {
            
            $("#education").append(HTMLschoolStart);//<div class=education-entry></div>
            
            var formattedHTMLonlineTitle = HTMLonlineTitle.replace("%data%", education["onlineCourses"][i].title);
            var formattedHTMLonlineSchool = HTMLonlineSchool.replace("%data%", education["onlineCourses"][i].school);
            var onlineSchoolTitle = formattedHTMLonlineTitle + formattedHTMLonlineSchool;
            onlineSchoolTitle = onlineSchoolTitle.replace("#", education["onlineCourses"][i].url);
            
            $(".education-entry:last").append(onlineSchoolTitle);

            var formattedHTMLonlineDates = HTMLonlineDates.replace("%data%", education["onlineCourses"][i].dates);
            $(".education-entry:last").append(formattedHTMLonlineDates);

            var formattedHTMLonlineURL = HTMLonlineCertificate.replace("#", education["onlineCourses"][i].certificate);
            $(".education-entry:last").append(formattedHTMLonlineURL.replace("%data%", "Course certificate"));

        }
        
    }
    
}

/*END OF EDUCATION*/


/*************************************************************************************************************/
bio.display();
work.display();
projects.display();
education.display();


/************************************************************************************************************ */


function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() +
        name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];


}

//$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);
