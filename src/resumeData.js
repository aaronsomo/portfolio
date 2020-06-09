let resumeData = {
  imagebaseurl: 'https://github.com/aaronsomo',
  name: 'Aaron Southammavong',
  role: 'Full-Stack Mobile and Web Developer',
  linkedinId: ' https://linkedin.com/in/aaronsouthammavong',
  // skypeid: 'Your skypeid',
  roleDescription:
    '  I enjoy solving problems that challenge my understanding, as well as engaging myself in finding better solutions. With that said, I’d love the opportunity to learn more about your challenges and have a discussion about what I can do to help solve them.',
  socialLinks: [
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/aaronsouthammavong/',
      className: 'fa fa-linkedin',
    },
    {
      name: 'github',
      url: 'http://github.com/aaronsomo',
      className: 'fa fa-github',
    },
    {
      name: 'twitter',
      url: 'http://twitter.com/aaroneksouth',
      className: 'fa fa-twitter',
    },
    {
      name: 'resume',
      url: 'https://resume.creddle.io/resume/g9yezxvbe6n',
      className: 'fas fa-file-alt',
    },
  ],
  aboutme:
    "Welcome! I'm Aaron and I have a knack for building creative and meaningful things, be it a bridge in Chicago or a web application on the Internet. As a former Civil Engineer, I’ve worked with different teams to utilize my creative nature in designing and managing many projects, but they haven’t quite filled that void - that curiosity in seeing an idea, solving issues, and having that idea realized. Software Engineering has me expressing that passion, as I take on more challenges, and I couldn't be happier.",
  address: 'ae.southammavong@gmail.com',
  phone: '+ 1 ( 8 4 7 ) 2 7 1 - 6 3 0 7',
  education: [
    {
      UniversityName: 'Hack Reactor',
      specialization: 'Software Engineering Immersive',
      MonthOfPassing: 'January',
      YearOfPassing: '2020',
      // Achievements: 'Some Achievements',
    },
    {
      UniversityName: 'University of Illinois at Chicago',
      specialization: 'Bachelor of Science in Civil Engineering',
      MonthOfPassing: 'May',
      YearOfPassing: '2013',
      // Achievements: 'Some Achievements',
    },
  ],
  work: [
    {
      CompanyName: 'Smrtlens.com',
      specialization: 'CEO/Co-Founder',
      // MonthOfLeaving: 'Jan',
      // YearOfLeaving: '2018',
      Achievements:
        "Designing and implementing business operations. Providing a means of protecting peoples' eyes from technologies that emit blue-light. Managing a small team that handles order processing and distribution.",
    },
    {
      CompanyName: 'Infrastructure Engineering, Inc',
      specialization: 'Civil Engineer',
      MonthOfLeaving: 'September',
      YearOfLeaving: '2019',
      Achievements:
        'A part of a team that managed the construction of a safe pedestrian bridge path/walkway for the community that alleviated pedestrian congestion during peak hours. A part of a team that installed a community park for a neighborhood. Redesigned hundreds of pedestrian sidewalks and intersections to accommodate ADA standards and address drainage problems, among other issues.',
    },
    {
      CompanyName: 'Illinois Department of Transportation',
      specialization: 'Civil Engineer',
      MonthOfLeaving: 'March',
      YearOfLeaving: '2013',
      Achievements:
        'Assistant Resident Engineer at Lisbon Road Bridge. Managed the construction of the bridge. Alleviated congestion during peak hours. Provided a safe route of travel for pedestrians. Assistant Resident Engineer at Minooka Road bridge. Co-managed bridge to accommodate 4 lanes of travel in anticipation of highway expansion, traffic, and neighborhood growth. A part of a team that designed infrastructure projects for District 3 in the State of Illinois.',
    },
  ],
  skillsDescription: "A quick summary of some of the things I've frequented...",
  skills: [
    {
      skillname: 'JavaScript',
    },
    {
      skillname: 'React',
    },
    {
      skillname: 'Swift',
    },
    {
      skillname: 'Express',
    },
    {
      skillname: 'NodeJS',
    },
    {
      skillname: 'PostgreSQL',
    },
    {
      skillname: 'MongoDB',
    },
    {
      skillname: 'PingPong',
    },
  ],
  portfolio: [
    {
      name: 'PokerVault',
      description: 'Mobile Application',
      stack: 'SwiftUI, Redux, Core Data, VS App Center',
      detailed:
        'Worked on a small team to create a mobile application that helps users track their progress. Created analytical tools and features that displayed useful information to the user. Created the Sessions and New Session screens and functionality.',
      imgurl: 'images/portfolio/pokervault.png',
      live: 'Coming soon to the iOS App Store',
      github: '',
    },
    {
      name: 'Natours',
      description: 'Web Application',
      stack: 'React, SASS (CSS)',
      detailed:
        'Created a React implementation of an HTML mocksite from an advanced CSS & styling course. The course strictly went over HTML, CSS styling. I took it upon myself to refactor the code into React components and modularized them for re-usability.',
      imgurl: 'images/portfolio/reactnatours.png',
      live: 'https://aaronsomo.github.io/react-natours/',
      github: 'https://github.com/aaronsomo/react-natours',
    },
    {
      name: 'HOME AWAY',
      description: 'Web Application & Systems Design',
      stack: 'React, Redux, Express, NodeJS, MongoDB, PostgreSQL, AWS, NGINX',
      detailed:
        "Re-created a mock of Home Away's front-end implementation. Re-designed a back-end system to support increase in traffic. Created ETL process to extract 15 million datasets into MongoDB and PostgreSQL databases. Optimized server and database to support a 400% increase in traffic to popular endpoints. Containerized & deployed server and database onto EC2 instances for separate management of micro-services.",
      imgurl: 'images/portfolio/sdc.png',
      live: 'https://www.youtube.com/watch?v=O07YBywin34',
      github: 'https://github.com/objectobject-hr/sdc-service-aaron',
    },
    {
      name: 'TourViewAR',
      description: 'Augmented Reality Mobile Application',
      stack: 'React-Native, Redux, Express, NodeJS, PostgreSQL, AWS, Heroku',
      detailed:
        'Created a mobile application that allows users to view and create 360 degree tours/images in augmented reality. Created login, create tours, camera, image upload, 360 view, 360 edit view, and text/object edit-view screens and their functionalities. Implemented camera and file upload functionality. Set up Express server and queries to a PostgreSQL database. Worked on a team that facilitated a monolithic architecture for project workflow.',
      imgurl: 'images/portfolio/tourviewarclient.png',
      live: 'https://github.com/aaronsomo/tourviewar-client',
      github: 'https://github.com/aaronsomo/tourviewar-client',
    },
    {
      name: 'Reading List',
      description: 'Command Line Application',
      stack: 'NodeJS',
      detailed:
        'Created the entire application in NodeJS. Allows users to search for books using the Google Book API and add results to their own reading list. Both time and space complexities were considered. Written under a time contraint of 48 hours. Tested with mocha/chai.',
      imgurl: 'images/portfolio/readinglistcommandline.png',
      live: 'https://www.youtube.com/watch?v=SKSFZ_Y144k',
      github: 'https://github.com/aaronsomo/google-books-node-app',
    },
    {
      name: 'IKEA MOCK',
      description: 'Full-Stack Web Application',
      stack: 'React, Express, NodeJS, MongoDB, PostgreSQL, Heroku',
      detailed:
        'Worked on a small team to design the IKEA product page. Built raw image carousels and modal components. Generated unique datasets to populate web application through simulated endpoints. Used Mongoose ORM and MongoDB to handle non-relational data set. Implemented a micro-service oriented architecture by combining multiple micro-services into a single proxy.',
      imgurl: 'images/portfolio/ikeamock.png',
      live: 'https://www.youtube.com/watch?v=fEuulO9LFdk',
      github: 'https://github.com/objectobject-hr/service-aaron',
    },
    {
      name: 'World Annona',
      description: 'Full-Stack Web Application',
      stack: 'React, Express, NodeJS, PostgreSQL, AWS',
      detailed:
        "Created a wep application that was submitted as an entry into NASA's 2020 48-hour Space Apps Challenge Hackathon. The project aims to help end world hunger through connecting entities who have food surpluses with distribution centers in an effort to fight food waste during the Covid-19 pandemic.",
      imgurl: 'images/portfolio/annona.png',
      live: 'https://worldannona.co',
      github: 'https://github.com/No-Crop-Left-Behind',
    },
  ],
  testimonials: [
    {
      description: 'This is a sample testimonial',
      name: 'Some technical guy',
    },
    {
      description: 'This is a sample testimonial',
      name: 'Some technical guy',
    },
  ],
};

export default resumeData;
