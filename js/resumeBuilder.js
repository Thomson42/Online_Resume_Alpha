// var "new object" _____ = _____ (.replace changes old string tag to new string tag but only changes what is given like "awesome to fun"

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
	"welcomeMessage": "Hello Everyone! glad to see you want to know more about me",
	"skills": ["custum web desine", "political analysis", "political assistance"],
	"bioPic": "images/sweater.jpg"
};
var work;
work = {
	"jobs": [{
		"Sunrun": {
			"employer": "Sunrun",
			"dates": "Aug 2015-Nov 2015",
			"title": "Field Advisor",
			"location": "Portland, Oregon"
		},
		"Brent Barton Campaign": {
			"employer": "Brent Barton Campaign",
			"dates": "May 2014-Nov 2014",
			"title": "Deputy Field Director",
			"location": "Oregon City, Oregon"
		},
		"Sears": {
			"title": "Sears",
			"duration": "Sep 2009-Dec 2009",
			"postion": "Package Pickup serviceman",
			"location": "Happy Vally, Oregon"
		}
	}]
};
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
		"Udasity": {
			"title": "Web Developer Nano Degree",
			"school": "Udasity",
			"dates": "Jan 2016-Mar 2016",
			"url": ""
		}
	}]
};

if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkills);
}
/*$("#main").append(education.location);
// .append inserts after .prepend inserts before
$("#header").prepend(formattedName);
$("#header").append(formattedRole);*/
