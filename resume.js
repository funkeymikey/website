'use strict';

var resumeApp = angular.module('resumeApp', []);


resumeApp.factory('resumeData', [function(){
	return {
		name: 'Mike Kozelsky',
		tagline: 'A general technologist that enjoys making things on the web',
		bio: '',
		skills: [
			{
				category: 'Languages',
				ratings: [
					{skill: 'C#', rating: 72},
					{skill: 'Java', rating: 54},
					{skill: 'JavaScript', rating: 36}
					]
			}
		],
		email: 'mike.kozelsky@gmail.com',
		phone: '585.746.4926',
		address: {
			number: '101',
			street: 'Shoshone Street',
			city: 'Buffalo',
			state: 'New York',
			postal: '14214'
		},
		workHistory: [
			{
					employerName: 'Doolli',
					employerWebsite: 'http://www.doolli.com/',
					employerLogo: 'images/logo-large.png',
					employerTagline: 'Cloud based data management service',
					startDate: new Date('7/1/2013'),
					endDate: null,
					positions: [
					{
						role: 'Senior Developer',
						startDate: new Date('7/1/2013'),
						endDate: null,
						responsibilites: [
							'Added new functionality and bug fixes to the java based backend API.',
							'Implemented an external facing RESTful API to be used by third party developers.',
							'Served in a scrummaster capacity and led the team to adopt a fairly strict adherence to SCRUM'
						],
						recognitions: []
					}
				]
			},
			{
					employerName: 'Harris Local Government',
					employerWebsite: 'http://www.harrislocalgov.com/',
					employerLogo: 'images/logo-harris-local-gov.png',
					employerTagline: 'Software company for small municipalities',
					startDate: new Date('8/1/2012'),
					endDate: new Date('6/1/2013'),
					positions: [
					{
						role: 'Product Architect',
						startDate: new Date('8/1/2012'),
						endDate: new Date('6/1/2013'),
						responsibilites: [
							'Led the implementation of feature based / Agile development, highly influenced by the Scrum methodology.  Served in a scrum master role.',
							'Inspected and recommend various technologies and frameworks for use - for example, decided AngularJS was a JavaScript framework that fit well with our team’s skills and roles, as well as being able to solve the business needs.',
							'Started the groundwork for an Operational Data Store, to manage the environment of diverse transactional systems that front end applications need to integrate with.',
							'Mentored, code reviewed, and instructed new developers - as well as experienced developers new to .NET and SQL.',
							'Implemented git as a pilot for use as a source control system.',
							'Was a heads-down developer about half the time.'
						],
						recognitions: []
					}
				]
			},
			{
				employerName: 'Meritain Health',
				employerWebsite: 'http://www.meritain.com/',
				employerLogo: 'images/MeritainHealth.jpg',
				employerTagline: 'A third party health insurance administrator',
				startDate: new Date('1/1/2007'),
				endDate: new Date('8/1/2012'),
				positions: [
					{
						role: 'Architect/Team Lead: Product Development team',
						startDate: new Date('6/1/2011'),
						endDate: new Date('8/1/2012'),
						responsibilites: [
							'Managed a team of developers.  Was responsible for assigning responsibilities to align with business priorities.',
							'Had to mentor junior-level developers, while delegate challenging work to senior level developers.',
							'Continued the expansion of internal frameworks for use throughout the department, including streamlining the WCF service infrastructure.',
							'Developed policies for code review and unit testing.',
							'Was part of a team that developed an application architecture pattern to be used by all new software development - setting the software design up in such a way to be easily integrated into a future enterprise service bus.'
						],
						recognitions: []
					},
					{
						role: 'Architect: Applications Architecture team',
						startDate: new Date('5/1/2010'),
						endDate: new Date('5/1/2011'),
						responsibilites: [
							'Led the effort to remove the SharePoint 2007 backend from our external portal.  Created frameworks to allow for the replacement of functionality provided by SharePoint.',
							'Designed and developed solutions for developers across the enterprise to use.  These were made in collaboration with the other members of the architecture team - for example, a comprehensive, unified way of handling logging and application configuration.  Also decided best practices for tasks such as unit testing and application installation',
							'Implemented Microsoft Team Foundation Server as the source control system for the enterprise'
						],
						recognitions: [
							'2010 Meritain Health MVP award'
						]
					},
					{
						role: 'Senior Developer: Strategic Development team',
						startDate: new Date('1/1/2008'),
						endDate: new Date('4/1/2010'),
						responsibilites: [
							'Worked on a portal consolidation project.  We folded existing lines of business onto the product, while continually adding and expanding on functionality.  During this period, the application grew from a member-only portal, with a single back end system, to a multiple constituent portal which provides a consistent look and feel across multiple back end systems.  The portal currently services over 25 thousand subscriber, dependent, employer, participant, and provider users allowing them to perform data transactions with our claims systems.',
							'Worked in a lead capacity for a team of 3-5 developers on the project.  Responsibilities included assigning work  among the developers, as well as creating level of effort estimates back to the project management team.  Also was responsible for filtering all production support requests coming in from our ticketing system then would create and assign work items to other developers if necessary.'
						],
						recognitions: []
					},
					{
						role: 'Intermediate Developer: Portal Applications team',
						startDate: new Date('6/1/2007'),
						endDate: new Date('1/1/2008'),
						responsibilites: [
							'Began development of an external-facing member portal using SharePoint 2007 as the portal engine.',
							'Responsible for production support and discretionary maintenance for our many internal and external web sites.'
						],
						recognitions: []
					},
					{
						role: 'Intern: IT Enterprise Architect team',
						startDate: new Date('1/1/2007'),
						endDate: new Date('5/1/2007'),
						responsibilites: [
							'Researched different Java open source solutions for web portals and application servers.',
							'Developed a tool (JSR-186 compliant portlet) to maintain an inventory of IT resources.'
						],
						recognitions: []
					}
				]
			},
			{
				employerName: 'University at Buffalo, Department of Computer Science and Engineering',
				employerWebsite: 'http://www.cse.buffalo.edu/',
				startDate: new Date('8/1/2005'),
				endDate: new Date('5/1/2007'),
				positions: [
					{
						role: 'Teaching Assistant for Introduction to Computer Science For Majors(I)',
						startDate: new Date('8/1/2005'),
						endDate: new Date('5/1/2007'),
						responsibilites: [
							'Held weekly lab sections. This involved an instructional period to cover information required for the students to finish the weekly lab.  After instruction, assisted the students as needed.',
							'Held office hours for students to come and get one-on-one help with any class material or lab project.',
							'Graded exams and student essays as required.',
							'Attended weekly status and coordination meetings between the instructor and teaching assistants.'
						],
						recognitions: []
					},
					{
						role: 'Freelance',
						startDate: new Date('5/1/2006'),
						endDate: new Date('8/1/2006'),
						responsibilites: [
							'Assisted instructors of the Introduction to Computer Science for Majors (I) class to write an introductory textbook for computer science.  The textbook put object oriented design and modeling on the forefront rather than syntax and specific programming language issues.  The book is currently in use in the course.',
							'Developed a 2D graphics package in Java for use in the Introduction to Computer Science (I) class.  Extending on the provided Swing and AWT libraries, it allows for development of simple graphics which simulate the Swing interfaces, design patterns, and object model.  This is still in use by the course.'
						],
						recognitions: []
					}
				]
			}
		],
		hobbies:[],
		education:[
			{type:"Master of Science", from:"University at Buffalo, Department of Computer Science and Engineering", date: new Date('6/1/2007')},
			{type:"Bachelor of Science", from:"University at Buffalo, Department of Computer Science and Engineering", date: new Date('6/1/2007')}
		]
	};
}]);

resumeApp.controller('resumeController', ['$scope', 'resumeData', function($scope, resumeData){

	$scope.resumeData = resumeData;

}]);