/*
This is empty on purpose! Your code to build the resume will go here.
 */
var formattedName = HTMLheaderName.replace("%data%", "srand01");
$("#header").prepend(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", "Web developer");
$("header").prepend(formattedRole);