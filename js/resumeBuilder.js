/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name": "Mo Zhou",
    "role": "Web Developer",
    "contacts": {
        "mobile": "613-2622516",
        "email": "mozhou216@gmail.com",
        "twitter": "@weekendchow",
        "github": "weekendchow",
        "blog": "weekendchow.github.io",
        "location": "Ottawa, Ontario, Canada"
    },
    "biopic": "images/me.jpg",
    "welcomeMessage": "Hello to my world!",
    "skills": ["JS", "HTML", "CSS", "JAVA", "MATLAB"]
};

var work = {
    "jobs": [{
            "employer": "Siemens Shenzhen Magnetic Resonance Ltd.",
            "title": "Team Assistant at AX Process Engineering Dept. (Internship)",
            "dates": "Jul. 2014 – Sept. 2014",
            "location": "Shenzhen, Guangdong, China",
            "description": "Working as an Assistant in the team of AX Process Engineering Dept"
        },
        {
            "employer": "Shaanxi Blower Group Co., Ltd.",
            "title": "Team Assistant at Technical Dept. (Internship)",
            "dates": "Jul. 2013 – Sept. 2013",
            "location": "Xi'an, Shanxi, China",
            "description": "Working as an Assistant at Technical Dept."
        }
    ]
};

var education = {
    "schools": [{
            "name": "University of Ottawa",
            "location": "Ottawa, Ontario, Canada",
            "degree": "Masters",
            "majors": ["Electrical and Computer Engineering"],
            "dates": "2014 - 2016",
            "url": "https://www.uottawa.ca/"
        },
        {
            "name": "Shenzhen University",
            "location": "Shenzhen, Guangdong, China",
            "degree": "Bachelor",
            "majors": ["Optoelectronic Information Engineering"],
            "dates": "2010 - 2014",
            "url": "http://www.szu.edu.cn/2014/"
        }
    ],
    "onlineCourses": [{
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "2017",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        },
        {
            "title": "Java",
            "school": "Tarena",
            "dates": "2016",
            "url": "http://java.tedu.cn/"
        }
    ]
};

var projects = {
    "projects": [{
            "title": "Escape Forest 3D Running Game",
            "dates": "Sept. 2015 – Jan. 2016",
            "description": "This game was developed using C# in Unity3D environment for multimedia course. Player can avoid obstacles and collectcoins through turn left, turn right, jump and slide actions. Different obstacles and coins are generating randomly. For thisgame, I create the scenes, use some functions to realize character’s actions, set the camera and control the game state, generate GUI and finally add some sounds effect.",
            "link": "https://github.com/weekendchow/Escape-Forest-3D-Running-Game",
            "images": ["images/p1.jpg"]
        },
        {
            "title": "Plane Shooting Game in Java",
            "dates": "Apr. 2015 – Jun. 2015",
            "description": "This game was developed using Java(OOP) in Mac OSX Eclipse development environment. In this game, the player can move the hero plane to shoot the enemy planes which occur randomly and fire bullets every several seconds. Also player can shoot the bees to gain more lives. There are different modes to fire bullets according to different scores.",
            "link": "https://github.com/weekendchow/Plane-Shooting-Game-in-Java",
            "images": ["images/p2.jpg"]
        },
        {
            "title": "Dynamic Simulation with Particles in Chai3D",
            "dates": "Sept. 2015 – Jan. 2016",
            "description": "This course project is mainly aims at developing a particle system includes 3 particles connected with springs, falling from certain height and collide with a plane then bounce back. The plane was draw by cMesh(AABB collision detector). Set fixed or random initial position, then update the position and velocity using Forward Euler Integration. Also complete functions in keyselect(adjust parameters/switch mode/restart falling). This project was simulated in Visual Studio environment by using C++, OpenGL and C++ simulation framework Chai 3D.",
            "link": "https://github.com/weekendchow/Dynamic-Simulation-with-Particles-in-Chai3D",
            "images": ["images/p3.jpg"]
        }
    ]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    $("#header").append(formattedName);
    $("#header").append(formattedRole);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMsg);

    displayContactInfo();
    displaySkills();
};

bio.display();

function displayContactInfo() {
    var formattedContactInfo = [];
    formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
    formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
    formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
    formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));
    formattedContactInfo.push(HTMLblog.replace("%data%", bio.contacts.blog));

    for (var i = 0; i < formattedContactInfo.length; i++) {
        $("#topContacts").append(formattedContactInfo[i]);
        $("#footerContacts").append(formattedContactInfo[i]);
    }
}


function displaySkills() {
    if (bio.skills.length > 0) {

        $("#header").append(HTMLskillsStart);

        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }
}


work.display = function () {
    if (work.jobs.length > 0) {

        $("#workExperience").append(HTMLworkStart);

        for (var i = 0; i < work.jobs.length; i++) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

            var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

            $(".work-entry:last").append(formattedEmployerWorkTitle);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedDatesWorked);
            $(".work-entry:last").append(formattedWorkDescription);
        }

    }
}

work.display();


projects.display = function() {
    if (projects.projects.length > 0) {
        for (var i = 0; i < projects.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].link);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);


            for (var img = 0; img < projects.projects[img].images.length; img++) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
                $(".project-entry:last").append(formattedProjectImage);
            }
        }
    }
};

projects.display();


education.display = function() {
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
        for (var i = 0; i < education.schools.length; i++) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);

            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);
        }

        if (education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for (var j = 0; j < education.onlineCourses.length; j++) {
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title).replace("#", education.onlineCourses[j].url);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[j].url).replace("#", education.onlineCourses[j].url);

                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                $(".education-entry:last").append(formattedOnlineDates);
                $(".education-entry:last").append(formattedOnlineURL);
            }
        }

    }
};

education.display();

function inName(name) {
    name = name.trim().split(" ");
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    name[1] = name[1].toUpperCase();
    return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
