'use strict';

function ResumeController() {
  var resumeData = {
    name: 'mike kozelsky',
    firstName: 'Mike',
    image: 'images/mike.jpg',
    tagline: 'A software generalist that loves every part of making good software.',
    links: [
      // { name: 'blog', url: 'http://blog.mikekozelsky.com' }
      ],
    skills: [
      { skill: 'C#', percent: 71 },
      { skill: 'Html', percent: 70 },
      { skill: 'Scrum', percent: 76 },
      { skill: 'REST', percent: 61 },
      { skill: 'Java', percent: 59 },
      { skill: 'SQL', percent: 45 },
      { skill: 'JS', percent: 44 },
      { skill: 'CSS', percent: 37 },
      { skill: 'ng-js', percent: 26 }
    ],
    about: {
      bio: "<p>Mike loves creating software that makes people's life better.  After starting his career in large companies, he wanted to make more of an impact and now has years of experience working in startups.  He loves doing things that don't scale and then growing the company from scrappy to enterprise.  Improving company processes, refactoring code, and learning from users are among the most satisfying part of the job.  By far, his favorite role is when he gets to help mentor other developers.</p><p>In his free time, he's rarely on a computer. He's usually outside biking; or hiking in the Adirondack Mountains with his wife and dog. He's also really good at eating cookies.</p>",
      contact: {
        email: 'mike.kozelsky@gmail.com',
        address: {
          city: 'Buffalo',
          state: 'NY'
        }
      }
    },
    workHistory: [
      {
        employerName: 'Fanbassador',
        employerWebsite: 'http://www.fanbassador.com/',
        employerLogo: 'images/fanbassador.jpg',
        employerTagline: 'Fan Demanded Touring Decisions',
        startDate: new Date('2/1/2016'),
        positions: [
          {
            role: 'CTO and Co-Founder',
            startDate: new Date('2/1/2016'),
            responsibilities: [
              'Propose, build, test, and maintain full technology stack.',
              'Own all technology and architecture decisions behind the product.',
              'Manage and work with the design team to create a professional application from scratch.',
              'Create annual budgets, manage asset inventory, and handle technology purchasing.',
              'Continually strived for best practices during development including continual refactoring and testing with over 90% coverage on automated back-end tests.',
              'Work with marketing team and co-founders to craft branding and messaging.',
              'Participated in sales and marketing efforts, and business operations.',
              'A whole lot of thinking about company vision, possible product diversification, and asking "what can we do better?"'
            ],
            recognitions: []
          }
        ]
      },
      {
        employerName: 'Doolli',
        employerWebsite: 'http://www.doolli.com/',
        employerLogo: 'images/doolli.png',
        employerTagline: 'Cloud based data management service',
        startDate: new Date('7/1/2013'),
        endDate: new Date('1/1/2016'),
        positions: [
          {
            role: 'Senior Engineer',
            startDate: new Date('7/1/2013'),
            endDate: new Date('1/1/2016'),
            responsibilities: [
              'Added new functionality and bug fixes to the existing business logic built in Java and MySql.',
              'Refactored and improved the architecture of the code base including achieving over 90% automated back-end  test coverage.',
              'Implemented an external facing RESTful API to be used by third party developers.',
              'Served in a ScrumMaster capacity and led the team to adopt a relatively strict adherence to SCRUM.',
              'Wore many hats as needed including Business Analyst, Quality Assurance, and Sales Engineer.'
            ],
            recognitions: []
          }
        ]
      },
      {
        employerName: 'Harris Local Government',
        employerWebsite: 'http://www.harrislocalgov.com/',
        employerLogo: 'images/harris-local-gov.png',
        employerTagline: 'Software company for small municipalities',
        startDate: new Date('8/1/2012'),
        endDate: new Date('6/1/2013'),
        positions: [
          {
            role: 'Product Architect',
            startDate: new Date('8/1/2012'),
            endDate: new Date('6/1/2013'),
            responsibilities: [
              'Led the implementation of feature based / Agile development, highly influenced by the Scrum methodology.  Served in a ScrumMaster role.',
              "Inspected and recommend various technologies and frameworks for use - for example, decided AngularJS was a JavaScript framework that fit well with our team's skills and roles, as well as being able to solve the business needs.",
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
        employerLogo: 'images/meritain-health.jpg',
        employerTagline: 'A third party health insurance administrator',
        startDate: new Date('1/1/2007'),
        endDate: new Date('8/1/2012'),
        positions: [
          {
            role: 'Architect/Team Lead',
            team: 'Product Development',
            startDate: new Date('6/1/2011'),
            endDate: new Date('8/1/2012'),
            responsibilities: [
              'Managed a team of developers.  Was responsible for assigning responsibilities to align with business priorities.',
              'Had to mentor junior-level developers, while delegate challenging work to senior level developers.',
              'Continued the expansion of internal frameworks for use throughout the department, including streamlining the WCF service infrastructure.',
              'Developed policies for code review and unit testing.',
              'Was part of a team that developed an application architecture pattern to be used by all new software development - setting the software design up in such a way to be easily integrated into a future enterprise service bus.'
            ],
            recognitions: []
          },
          {
            role: 'Architect',
            team: 'Applications Architecture',
            startDate: new Date('5/1/2010'),
            endDate: new Date('5/1/2011'),
            responsibilities: [
              'Led the effort to remove the SharePoint 2007 backend from our external portal.  Created frameworks to allow for the replacement of functionality provided by SharePoint.',
              'Designed and developed solutions for developers across the enterprise to use.  These were made in collaboration with the other members of the architecture team - for example, a comprehensive, unified way of handling logging and application configuration.  Also decided best practices for tasks such as unit testing and application installation',
              'Implemented Microsoft Team Foundation Server as the source control system for the enterprise'
            ],
            recognitions: ['2010 Meritain Health MVP award']
          },
          {
            role: 'Senior Developer',
            team: 'Strategic Development',
            startDate: new Date('1/1/2008'),
            endDate: new Date('4/1/2010'),
            responsibilities: [
              'Worked on a portal consolidation project.  We folded existing lines of business onto the product, while continually adding and expanding on functionality.  During this period, the application grew from a member-only portal, with a single back end system, to a multiple constituent portal which provides a consistent look and feel across multiple back end systems.  The portal currently services over 25 thousand subscriber, dependent, employer, participant, and provider users allowing them to perform data transactions with our claims systems.',
              'Worked in a lead capacity for a team of 3-5 developers on the project.  Responsibilities included assigning work  among the developers, as well as creating level of effort estimates back to the project management team.  Also was responsible for filtering all production support requests coming in from our ticketing system then would create and assign work items to other developers if necessary.'
            ],
            recognitions: []
          },
          {
            role: 'Intermediate Developer',
            team: 'Portal Applications',
            startDate: new Date('6/1/2007'),
            endDate: new Date('1/1/2008'),
            responsibilities: [
              'Began development of an external-facing member portal using SharePoint 2007 as the portal engine.',
              'Responsible for production support and discretionary maintenance for our many internal and external web sites.'
            ],
            recognitions: []
          },
          {
            role: 'Intern',
            team: 'Reported to IT Enterprise Architect',
            startDate: new Date('1/1/2007'),
            endDate: new Date('5/1/2007'),
            responsibilities: ['Researched different Java open source solutions for web portals and application servers.', 'Developed a tool (JSR-186 compliant portlet) to maintain an inventory of IT resources.'],
            recognitions: []
          }
        ]
      },
      {
        employerName: 'University at Buffalo, Department of Computer Science and Engineering',
        employerWebsite: 'http://www.cse.buffalo.edu/',
        employerLogo: 'images/ub.jpg',
        startDate: new Date('8/1/2005'),
        endDate: new Date('5/1/2007'),
        positions: [
          {
            role: 'Teaching Assistant for Introduction to Computer Science For Majors(I)',
            startDate: new Date('8/1/2005'),
            endDate: new Date('5/1/2007'),
            responsibilities: [
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
            responsibilities: [
              'Assisted instructors of the Introduction to Computer Science for Majors (I) class to write an introductory textbook for computer science.  The textbook put object oriented design and modeling on the forefront rather than syntax and specific programming language issues.  The book is currently in use in the course.',
              'Developed a 2D graphics package in Java for use in the Introduction to Computer Science (I) class.  Extending on the provided Swing and AWT libraries, it allows for development of simple graphics which simulate the Swing interfaces, design patterns, and object model.  This is still in use by the course.'
            ],
            recognitions: []
          }
        ]
      }
    ],
    interests: [
      { name: 'Buffalo, NY', image: 'images/buffalo.svg' },
      { name: 'WRXs', image: 'images/subaru.svg' },
      { name: 'Jeeps', image: 'images/jeep.svg' },
      { name: 'Adirondacks', image: 'images/mountains.svg' },
      { name: 'Biking', image: 'images/bike.svg' },
      { name: 'Snowboarding', image: 'images/snowboard.svg' }
    ],
    education: [
      { type: 'Certified ScrumMaster', date: new Date('12/1/2014') },
      { type: 'Master of Science', from: 'University at Buffalo, Department of Computer Science and Engineering', date: new Date('6/1/2007') },
      { type: 'Bachelor of Science', from: 'University at Buffalo, Department of Computer Science and Engineering', date: new Date('6/1/2007') }
    ]
  };

  this.name = resumeData.name;
  this.firstName = resumeData.firstName;
  this.image = resumeData.image;
  this.tagline = resumeData.tagline;
  this.links = resumeData.links;
  this.skills = resumeData.skills;
  this.about = resumeData.about;
  this.workHistory = resumeData.workHistory;
  this.interests = resumeData.interests;
  this.education = resumeData.education;
  this.reverse = true;
}

function UtilsController() {
  var showMoreIds = [];

  this.toggleMore = function(someId) {
    var index = showMoreIds.indexOf(someId);
    if (index === -1) showMoreIds.push(someId);
    else showMoreIds.splice(index, 1);
  };

  this.shouldShow = function(someId) {
    return showMoreIds.indexOf(someId) !== -1;
  };

  this.isPopulated = function(testArray) {
    if (testArray && testArray.length > 0) return true;
    return false;
  };

  this.isOverflowing = function(jobIndex) {

    var el = document.getElementById('jobDetail' + jobIndex);
    
    var isOverflowing = el.clientHeight < el.scrollHeight;

    return isOverflowing;
  };

  this.getArcPathData = function(rating) {
    return getArcPathDataByDegrees(75, 75, 70, rating / 100 * 360);
  };

  function getArcPathDataByDegrees(startX, startY, radius, degrees) {
    //adapted from http://perlgeek.de/blog-en/perl-6/plot-segment-of-a-circle-with-svg.html

    //figure out starting point in radians
    var start = 0;
    var end = degrees * (Math.PI / 180);

    //instead of starting at 3:00, i want to start at 12:00, so rotate everything back by half a PI
    start = start - Math.PI / 2;
    end = end - Math.PI / 2;

    //maths
    var startArcX = radius * Math.cos(start);
    var startArcY = radius * Math.sin(start);
    var rotation = 0;
    var largeArcFlag = end - start > Math.PI ? 1 : 0;
    var sweepFlag = 1;
    var endArcX = startX + radius * Math.cos(end);
    var endArcY = startY + radius * Math.sin(end);

    //Move to the center of the circle. move to the start of the arc.  Arc to the endpoint
    var pathData = 'M ' + startX + ' ' + startY + ' m ' + startArcX + ' ' + startArcY + ' A ' + radius + ' ' + radius + ' ' + rotation + ' ' + largeArcFlag + ' ' + sweepFlag + ' ' + endArcX + ' ' + endArcY;

    return pathData;
  }
}

angular.module('resumeApp', ['ngSanitize']).controller('ResumeController', ResumeController).controller('UtilsController', UtilsController);
