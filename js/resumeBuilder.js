var bio;
bio = {
	"name": "Christopher Thomson",
	"role": "Web Development and Political Assistance",
	"contacts": {
		"Email": "Christopher.thomson42@gmail.com",
		"phone": "503-956-4825",
		"github": "Thomson42",
		"located": "Portland, Oregon"
	},
	"welcomeMessage": "Hello Everyone! Glad to see you want to know more about me.",
	"skills": ["custum web desine", "political analysis", "political assistance", "World builder"],
	"bioPic": "images/sweater.jpg"
};
var work;
work = {
	"jobs": [{
		"sunrun": {
			"employer": "Sunrun",
			"dates": "Aug 2015-Nov 2015",
			"title": "Field Advisor",
			"location": "Portland, Oregon"
		},
		"brentBartonCampaign": {
			"employer": "Brent Barton Campaign",
			"dates": "May 2014-Nov 2014",
			"title": "Deputy Field Director",
			"location": "Oregon City, Oregon"
		},
		"sears": {
			"title": "Sears",
			"duration": "Sep 2009-Dec 2009",
			"postion": "Package Pickup serviceman",
			"location": "Happy Vally, Oregon"
		}
	}]
};
 console.log("name= " + bio.name);
var education;
education = {
	"schools": [{
		"UofO": {
			"name": "University of Oregon",
			"degree": "Batchelors of Science",
			"majors": "Political Science",
			"dates": "2011-2013",
			"location": "Eugene, Oregon"
		},
		"CCC": {
			"name": "Clacamas Comuinity College",
			"degree": "Assoicates of the Arts Transfer degree",
			"majors": "Political Science",
			"duration": "2009-2011",
			"location": "Oregon City, Oregon"
		},
		"Udacity": {
			"title": "Web Developer Nano Degree",
			"school": "Udacity",
			"dates": "Jan 2016-Mar 2016",
			"url": ""
		}
	}]
};

if(bio.name.length > 0){
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#topContacts").append(formattedRole);
	var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").prepend(formattedImage);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMsg);
}

if(bio.skills.length > 0){
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
for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
    }
