"use strict";

var resumeApp = angular.module("resumeApp", ["ngSanitize"]);

resumeApp.controller("ResumeCtrl", [
  "$scope",
  "$timeout",
  function ($scope, $timeout) {
    $scope.resume = {
      name: "mike kozelsky",
      firstName: "Mike",
      image: "images/mike.jpg",
      tagline:
        "A product-focused, hands-on leader that loves every part of making good software.",
      links: [],
      coreCompetencies: [
        { icon: "fa-users", name: "Leadership & Team Management" },
        { icon: "fa-refresh", name: "Agile Development & Process Improvement" },
        { icon: "fa-desktop", name: "UX & Product Design Focus" },
        {
          icon: "fa-comments",
          name: "Stakeholder & Cross-Department Communication",
        },
        {
          icon: "fa-cogs",
          name: "Technical Decision-Making & Problem Solving",
        },
        {
          icon: "fa-check-circle",
          name: "Continuous Improvement & Quality Assurance",
        },
      ],
      skills: [
        { skill: "Agile", percent: 82 },
        { skill: "AWS", percent: 63 },
        { skill: "Html", percent: 62 },
        { skill: "C#", percent: 60 },
        { skill: "Java", percent: 54 },
        { skill: "Python", percent: 51 },
        { skill: "Azure", percent: 48 },
        { skill: "JS", percent: 46 },
        { skill: "TS", percent: 46 },
        { skill: "SQL", percent: 45 },
        { skill: "CSS", percent: 39 },
        { skill: "GCP", percent: 32 },
        { skill: "Angular", percent: 26 },
        { skill: "React", percent: 26 },
      ],
      about: {
        bio: "<p>Mike loves enabling teams to create software that makes people's life better.  After starting his career in large companies, he has worked in the fast-paced environments of startups and everything in between.  He has 6 years of engineering management experience and prides himself on being a generalist that isn't afraid to roll up his sleeves and dive in to help out wherever there is a need.  He loves doing small slices of work &mdash; then proving out, learning from users, refining, and automating until things grow from a scrappy proof of concept to an enterprise grade product.  Improving how a development team gets work done, solving people's actual problems, and talking directly to users are among the most satisfying parts of the job.  He is an expert in agile SDLC, cross-functional collaboration, continuous improvement, and fostering team growth.  Also, he's skilled in backend architecture, process improvement, and aligning product development with KPIs and user needs.  By far, his favorite role is when he gets to mentor other developers and watch them grow.</p><p>In his free time, he's rarely on a computer. He's usually at the zoo or museum with his kids &mdash; but if it's nice out, he's probably enjoying a park, or biking, or hiking in the Adirondack Mountains. His favorite NP complete problem is finding the most efficient way to load the dishwasher.  He's also really good at eating cookies.</p>",
        contact: {
          email: "mike.kozelsky@gmail.com",
          address: {
            city: "Buffalo",
            state: "NY",
          },
        },
      },
      workHistory: [
        {
          employerName: "Trusted Talent",
          employerWebsite: "https://www.trustedtalent.com/",
          employerLogo: "images/trusted.png",
          employerTagline: "Nurse and Healthcare Staffing",
          startDate: new Date("9/05/2022"),
          positions: [
            {
              role: "Engineering Manager",
              startDate: new Date("9/05/2022"),
              responsibilities: [
                "Spearheaded a successful product launch that grew to 1,000+ monthly users directly generating $2M in revenue.",
                "Brought a sprawling contractor-built jobs platform in-house and evolved into a focused tool that processed over 500,000 jobs and increased internal productivity 3x.",
                "Experienced recruiters joining the company praised our tooling to be the best in the industry.",
                "Created a lightweight, goal-aligned agile SDLC tailored to our team; helped set team culture to embrace iterative improvement.",
                "Led UX Process Improvements by introducing wireframing-first then just-in-time design to embrace collaboration and reduce rework.",
                "Recruited and built a high-performing, cross-functional development team focused on delivering a user-centered, value-driven product.",
                "Championed a product-first mindset, prioritizing features based on impact and value rather than scope or complexity.",
                "Implemented a weekly scorecard to track usage and adoption metrics, providing data-driven insights to inform product decisions.",
                "Mentored developers and designers on cross-functional, incremental delivery.",
                "Practiced vertical slicing and incremental delivery, earning executive trust and eliminating the need for status updates by demonstrating continuous progress.",
                "Built on entirely cloud-native infrastructure including AWS ECS, Lambdas, S3, RDS, SNS, SQS, AppFlow, CloudBuild, and more.",
                "Implemented continuous delivery pipelines using GitHub Actions, enabling frequent, low-risk deployments across all services.",
                "Built robust automated testing frameworks across all repositories, ensuring high confidence in releases and accelerating developer productivity.",
              ],
              recognitions: [],
            },
          ],
          technologies: [
            "Jira",
            "GitHub",
            "GitHub Actions",
            "Chat GPT",
            "GitHub Copilot",
            "Python",
            "Javascript",
            "Typescript",
            "Node.js",
            "Express",
            "Sequelize",
            "MySQL",
            "React",
            "AWS ECS, Lambdas, S3, RDS, SNS, SQS, AppFlow, CloudBuild",
            "Jest",
            "Terraform",
          ],
        },
        {
          employerName: "FanAI",
          employerWebsite: "https://www.fan.ai/",
          employerLogo: "images/fanai.png",
          employerTagline: "Sports sponsorship analysis",
          startDate: new Date("6/14/2021"),
          endDate: new Date("8/01/2022"),
          positions: [
            {
              role: "Senior Software Engineer",
              startDate: new Date("6/14/2021"),
              endDate: new Date("8/01/2022"),
              responsibilities: [
                "Architected a data ingestion workflow built on top of message queues and serverless functions.",
                "Facilitate stand-ups and retrospectives.",
                "Iterated on SDLC and production change policies to find increase efficiencies.",
                "Designed wireframes for new feature proposal.",
                "Participate in weekly leadership meetings to report technology department status and needs.",
                "Mentored other developers to find technical solutions to their problems.",
                "Created a design pattern for existing code base to allow for greater code reuse and testability.",
                "Prioritized and defined tasks.",
                "Implemented vertical slicing during feature development to increase agility by delivering value quicker and getting feedback earlier.",
                "Implemented a Continuous Integration / Continuous Delivery pipeline using Google Cloud Build.",
                "Contributed to a back end API written in Python, built on top of FastAPI.",
                "Built end to end tests of said api using Tox.",
                "Managed infrastructure in Google Cloud using Terraform.",
                "Performed data loading and analysis in Big Query.",
                "Managed Postgres database and versioning with SQLAlchemy and Alembic.",
                "Assisted with Big Data analysis using Pandas.",
              ],
              recognitions: [],
            },
          ],
          technologies: [
            "Python",
            "SQLAlchemy",
            "BigQuery",
            "Alembic",
            "FastAPI",
            "Tox",
            "Terraform",
            "Google Cloud Platform",
            "Google Cloud Functions",
            "Google Pub/Sub",
            "Google Cloud Build",
            "Shortcut.com",
          ],
        },
        {
          employerName: "Campus Labs",
          employerWebsite: "https://www.campuslabs.com/",
          employerLogo: "images/campuslabs.png",
          employerTagline: "Software for Higher Education",
          startDate: new Date("5/7/2017"),
          endDate: new Date("06/01/2021"),
          positions: [
            {
              role: "Staff Developer",
              startDate: new Date("3/1/2020"),
              endDate: new Date("06/01/2021"),
              responsibilities: [
                "Develop cross organization technical consistencies.",
                "Participate in user experience feedback interviews.",
                "Present new features to account executives, implementation team, and customer success members.",
                "Use feedback from the business to prioritize and define upcoming work.",
                "Purpose new features based on department OKRs and corporate strategic goals.",
                "Implement processes to communicate priorities, short term tasks, long term goals, and how they all fit together.",
                "Using those long term goals, prioritizing work to find most effective way to deliver value.",
                "Architcted solution to expand on legacy codebase and bring in modern benefits such as separate deployable services, quicker realeases, automated testing, etc.",
              ],
              recognitions: [],
              technologies: [],
            },
            {
              role: "Senior Developer",
              startDate: new Date("5/7/2017"),
              endDate: new Date("02/29/2020"),
              responsibilities: [
                "Strategized the goals and purpose of the new Student Assessment team.",
                "Add features and functionality to the products in the Student Assessment product line.",
                "Participate in interviews, make hiring recommendations, and mentor new hires.",
                "Set up the continuous deployment and release management workflows.",
                "Deploy and monitor cloud hosted Software As A Service applications (devops).",
                "Review costs and assets on cloud provider, eliminate and reduce costs where applicable.",
                "Jump in to an existing code base to provide immediate value during crunch time.",
                "Problem solve, trouble shoot, and analyze the first ever Campus Labs product, which is over a decade old and full of complexity.",
                "Coordinate our involvement with the student shadow program through InfoTech Niagara.",
              ],
              recognitions: [],
            },
          ],
          technologies: [
            ".NET Framework",
            ".NET Core",
            "Sql Server",
            "Entity Framework",
            "Entity Framework Migrations",
            "Asp .NET Core",
            "Automated Testing",
            "Azure RM Powershell",
            "Azure",
            "Azure Functions",
            "Blob Storage",
            "Azure Service Bus",
            "Azure Dev Ops",
          ],
        },
        {
          employerName: "Fanbassador",
          employerLogo: "images/fanbassador.jpg",
          employerTagline: "Fan Demanded Touring Decisions",
          startDate: new Date("2/1/2016"),
          endDate: new Date("12/31/2017"),
          positions: [
            {
              role: "CTO and Co-Founder",
              startDate: new Date("2/1/2016"),
              endDate: new Date("12/31/2017"),
              responsibilities: [
                "Propose, build, test, and maintain full technology stack.",
                "Interview and hire a small technical team.",
                "Own all technology and architecture decisions behind the product.",
                "Manage and work with the design team to create a professional application from scratch.",
                "Create annual budgets, manage asset inventory, and handle technology purchasing.",
                "Continually strived for best practices during development including continual refactoring and testing with over 90% coverage on automated back-end tests.",
                "Work with marketing team and co-founders to craft branding and messaging.",
                "Conversations with the rest of the group about managing expectations between their desires and realistic goals and timelines.",
                "Participated in sales and marketing efforts, as well as business operations.",
                'A whole lot of thinking about company vision, possible product diversification, and asking "what can we do better?"',
              ],
              recognitions: [],
            },
          ],
        },
        {
          employerName: "Doolli",
          employerLogo: "images/doolli.png",
          employerTagline: "Cloud based data management service",
          startDate: new Date("7/1/2013"),
          endDate: new Date("1/1/2016"),
          positions: [
            {
              role: "Senior Engineer",
              startDate: new Date("7/1/2013"),
              endDate: new Date("1/1/2016"),
              responsibilities: [
                "Added new functionality and bug fixes to the existing business logic built in Java and MySql.",
                "Refactored and improved the architecture of the code base including achieving over 90% automated back-end test coverage.",
                "Participate in developer interviews and make hiring recommendations.",
                "Implemented an external facing RESTful API to be used by third party developers via OAuth.",
                "Served in a ScrumMaster capacity and led the team to adopt a relatively strict adherence to SCRUM.",
                "Wore many hats as needed including Business Analyst, Quality Assurance, and Sales Engineer.",
              ],
              recognitions: [],
            },
          ],
        },
        {
          employerName: "Harris Local Government",
          employerWebsite: "http://www.harrislocalgov.com/",
          employerLogo: "images/harris-local-gov.png",
          employerTagline: "Software company for small municipalities",
          startDate: new Date("8/1/2012"),
          endDate: new Date("6/1/2013"),
          positions: [
            {
              role: "Product Architect",
              startDate: new Date("8/1/2012"),
              endDate: new Date("6/1/2013"),
              responsibilities: [
                "Led the implementation of feature based / Agile development, highly influenced by the Scrum methodology.  Served in a ScrumMaster role.",
                "Inspected and recommend various technologies and frameworks for use - for example, decided AngularJS was a JavaScript framework that fit well with our team's skills and roles, as well as being able to solve the business needs.",
                "Started the groundwork for an Operational Data Store, to manage the environment of diverse transactional systems that front end applications need to integrate with.",
                "Mentored, code reviewed, and instructed new developers - as well as experienced developers new to .NET and SQL.",
                "Implemented git as a pilot for use as a source control system.",
                "Was a heads-down developer about half the time.",
              ],
              recognitions: [],
            },
          ],
        },
        {
          employerName: "Meritain Health",
          employerWebsite: "http://www.meritain.com/",
          employerLogo: "images/meritain-health.jpg",
          employerTagline: "A third party health insurance administrator",
          startDate: new Date("1/1/2007"),
          endDate: new Date("8/1/2012"),
          positions: [
            {
              role: "Architect/Team Lead",
              team: "Product Development",
              startDate: new Date("6/1/2011"),
              endDate: new Date("8/1/2012"),
              responsibilities: [
                "Managed a team of developers.  Was responsible for assigning responsibilities to align with business priorities.",
                "Had to mentor junior-level developers, while delegate challenging work to senior level developers.",
                "Continued the expansion of internal frameworks for use throughout the department, including streamlining the WCF service infrastructure.",
                "Developed policies for code review and unit testing.",
                "Was part of a team that developed an application architecture pattern to be used by all new software development - setting the software design up in such a way to be easily integrated into a future enterprise service bus.",
              ],
              recognitions: [],
            },
            {
              role: "Architect",
              team: "Applications Architecture",
              startDate: new Date("5/1/2010"),
              endDate: new Date("5/1/2011"),
              responsibilities: [
                "Led the effort to remove the SharePoint 2007 backend from our external portal.  Created frameworks to allow for the replacement of functionality provided by SharePoint.",
                "Designed and developed solutions for developers across the enterprise to use.  These were made in collaboration with the other members of the architecture team - for example, a comprehensive, unified way of handling logging and application configuration.  Also decided best practices for tasks such as unit testing and application installation",
                "Implemented Microsoft Team Foundation Server as the source control system for the enterprise",
              ],
              recognitions: ["2010 Meritain Health MVP award"],
            },
            {
              role: "Senior Developer",
              team: "Strategic Development",
              startDate: new Date("1/1/2008"),
              endDate: new Date("4/1/2010"),
              responsibilities: [
                "Worked on a portal consolidation project.  We folded existing lines of business onto the product, while continually adding and expanding on functionality.  During this period, the application grew from a member-only portal, with a single back end system, to a multiple constituent portal which provides a consistent look and feel across multiple back end systems.  The portal currently services over 25 thousand subscriber, dependent, employer, participant, and provider users allowing them to perform data transactions with our claims systems.",
                "Worked in a lead capacity for a team of 3-5 developers on the project.  Responsibilities included assigning work  among the developers, as well as creating level of effort estimates back to the project management team.  Also was responsible for filtering all production support requests coming in from our ticketing system then would create and assign work items to other developers if necessary.",
              ],
              recognitions: [],
            },
            {
              role: "Intermediate Developer",
              team: "Portal Applications",
              startDate: new Date("6/1/2007"),
              endDate: new Date("1/1/2008"),
              responsibilities: [
                "Began development of an external-facing member portal using SharePoint 2007 as the portal engine.",
                "Responsible for production support and discretionary maintenance for our many internal and external web sites.",
              ],
              recognitions: [],
            },
            {
              role: "Intern",
              team: "Reported to IT Enterprise Architect",
              startDate: new Date("1/1/2007"),
              endDate: new Date("5/1/2007"),
              responsibilities: [
                "Researched different Java open source solutions for web portals and application servers.",
                "Developed a tool (JSR-186 compliant portlet) to maintain an inventory of IT resources.",
              ],
              recognitions: [],
            },
          ],
        },
        {
          employerName:
            "University at Buffalo, Department of Computer Science and Engineering",
          employerWebsite: "http://www.cse.buffalo.edu/",
          employerLogo: "images/ub.jpg",
          startDate: new Date("8/1/2005"),
          endDate: new Date("5/1/2007"),
          positions: [
            {
              role: "Teaching Assistant for Introduction to Computer Science For Majors(I)",
              startDate: new Date("8/1/2005"),
              endDate: new Date("5/1/2007"),
              responsibilities: [
                "Held weekly lab sections. This involved an instructional period to cover information required for the students to finish the weekly lab.  After instruction, assisted the students as needed.",
                "Held office hours for students to come and get one-on-one help with any class material or lab project.",
                "Graded exams and student essays as required.",
                "Attended weekly status and coordination meetings between the instructor and teaching assistants.",
              ],
              recognitions: [],
            },
            {
              role: "Freelance",
              startDate: new Date("5/1/2006"),
              endDate: new Date("8/1/2006"),
              responsibilities: [
                "Assisted instructors of the Introduction to Computer Science for Majors (I) class to write an introductory textbook for computer science.  The textbook put object oriented design and modeling on the forefront rather than syntax and specific programming language issues.  The book is currently in use in the course.",
                "Developed a 2D graphics package in Java for use in the Introduction to Computer Science (I) class.  Extending on the provided Swing and AWT libraries, it allows for development of simple graphics which simulate the Swing interfaces, design patterns, and object model.  This is still in use by the course.",
              ],
              recognitions: [],
            },
          ],
        },
      ],
      interests: [
        { name: "Buffalo, NY", image: "images/buffalo.svg" },
        { name: "WRXs", image: "images/subaru.svg" },
        { name: "Jeeps", image: "images/jeep.svg" },
        { name: "Adirondacks", image: "images/mountains.svg" },
        { name: "Yoga", image: "images/yoga.svg" },
        { name: "Snowboarding", image: "images/snowboard.svg" },
      ],
      education: [
        { type: "Certified ScrumMaster", date: new Date("12/1/2014") },
        {
          type: "Master of Science",
          from: "University at Buffalo, Department of Computer Science and Engineering",
          date: new Date("6/1/2007"),
        },
        {
          type: "Bachelor of Science",
          from: "University at Buffalo, Department of Computer Science and Engineering",
          date: new Date("6/1/2007"),
        },
      ],
    };

    var showMoreIds = [];

    $scope.toggleMore = function (someId) {
      var index = showMoreIds.indexOf(someId);
      if (index === -1) showMoreIds.push(someId);
      else showMoreIds.splice(index, 1);

      $timeout(function () {
        $("[masonry]").masonry("reloadItems");
        $("[masonry").masonry();
      }, 100);
    };

    $scope.shouldShow = function (someId) {
      return showMoreIds.indexOf(someId) !== -1;
    };

    $scope.isPopulated = function (testArray) {
      if (testArray && testArray.length > 0) return true;
      return false;
    };

    $scope.isOverflowing = function (jobIndex) {
      var el = document.getElementById("jobDetail" + jobIndex);

      var isOverflowing = el.clientHeight <= el.scrollHeight;

      return isOverflowing;
    };

    $scope.getArcPathData = function (rating) {
      return getArcPathDataByDegrees(75, 75, 70, (rating / 100) * 360);
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
      var pathData =
        "M " +
        startX +
        " " +
        startY +
        " m " +
        startArcX +
        " " +
        startArcY +
        " A " +
        radius +
        " " +
        radius +
        " " +
        rotation +
        " " +
        largeArcFlag +
        " " +
        sweepFlag +
        " " +
        endArcX +
        " " +
        endArcY;

      return pathData;
    }
  },
]);

resumeApp.directive("masonry", [
  "$timeout",
  function ($timeout) {
    return {
      restrict: "AC",
      link: function (scope, elem, attrs) {
        scope.$watch(
          function () {
            return elem[0].children.length;
          },
          function (newVal) {
            $timeout(function () {
              elem.masonry("reloadItems");
              elem.masonry();
            }, 100);
          }
        );

        elem.masonry({
          columnSize: ".grid-sizer",
          itemSelector: ".item",
        });

        scope.masonry = elem.data("masonry");
      },
    };
  },
]);
