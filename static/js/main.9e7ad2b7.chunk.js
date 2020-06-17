(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),l=t(7),o=t.n(l),r=(t(13),t(1)),s=t(2),c=t(4),m=t(3),d=t(5),p=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return i.a.createElement(i.a.Fragment,null,i.a.createElement("header",{id:"home"},i.a.createElement("nav",{id:"nav-wrap"},i.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),i.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),i.a.createElement("ul",{id:"nav",className:"nav"},i.a.createElement("li",{className:"current"},i.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Projects")))),i.a.createElement("div",{className:"row banner"},i.a.createElement("div",{className:"banner-text"},i.a.createElement("h1",{className:"responsive-headline"},"Hello, I'm ",e.name),i.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},"I'm a ",e.role,".",e.roleDescription),i.a.createElement("hr",null),i.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return i.a.createElement("li",{key:e.name},i.a.createElement("a",{href:e.url,target:"_blank"},i.a.createElement("i",{className:e.className})))})))),i.a.createElement("p",{className:"scrolldown"},i.a.createElement("a",{className:"smoothscroll",href:"#about"},i.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),u=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return i.a.createElement("section",{id:"about"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"three columns"},i.a.createElement("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:""})),i.a.createElement("div",{className:"nine columns main-col"},i.a.createElement("h2",null,"About Me"),i.a.createElement("p",null,e.aboutme),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"columns contact-details"},i.a.createElement("h2",null,"Contact Details"),i.a.createElement("p",{className:"address"},i.a.createElement("span",null,e.name),i.a.createElement("br",null),i.a.createElement("span",null,"E-Mail: ",e.address),i.a.createElement("br",null),i.a.createElement("span",null,"LinkedIn: ",e.linkedinId)))))))}}]),a}(n.Component),h=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return i.a.createElement("section",{id:"resume"},i.a.createElement("div",{className:"row work"},i.a.createElement("div",{className:"three columns header-col"},i.a.createElement("h1",null,i.a.createElement("span",null,"Work"))),i.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e,a){return i.a.createElement("div",{className:"row item",key:a},i.a.createElement("div",{className:"twelve columns",key:a},i.a.createElement("h3",null,e.CompanyName),i.a.createElement("p",{className:"info"},e.specialization,i.a.createElement("span",null,"\u2022")," ",i.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),i.a.createElement("p",null,e.Achievements)))}))),i.a.createElement("div",{className:"row skill"},i.a.createElement("div",{className:"three columns header-col"},i.a.createElement("h1",null,i.a.createElement("span",null,"Skills"))),i.a.createElement("div",{className:"nine columns main-col"},i.a.createElement("p1",null,e.skillsDescription),i.a.createElement("p",null,e.skillsDescription2),i.a.createElement("div",{className:"bars"},i.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map(function(e,a){return i.a.createElement("li",{key:a},i.a.createElement("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),i.a.createElement("em",null,e.skillname))}))))))}}]),a}(n.Component),g=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return i.a.createElement("section",{id:"portfolio"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"twelve columns collapsed"},i.a.createElement("h1",null,"Projects and Applications"),i.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(function(e,a){return i.a.createElement("div",{className:"columns portfolio-item",key:a},i.a.createElement("div",{className:"item-wrap",key:a},i.a.createElement("a",{href:"#modal-".concat(a),key:a},i.a.createElement("img",{src:"".concat(e.imgurl),className:"item-img"}),i.a.createElement("div",{className:"overlay"},i.a.createElement("div",{className:"portfolio-item-meta"},i.a.createElement("h5",null,e.name),i.a.createElement("p",null,e.description))))))})),i.a.createElement("div",{id:"modal-0",className:"popup-modal mfp-hide"},i.a.createElement("img",{src:e.portfolio[0].imgurl}),i.a.createElement("div",{className:"description-box"},i.a.createElement("h4",null,e.portfolio[0].name),i.a.createElement("p",null,e.portfolio[0].stack),i.a.createElement("p",null,e.portfolio[0].detailed),i.a.createElement("a",{href:e.portfolio[0].live,target:"_blank"},"Find in the iOS App Store here"))),i.a.createElement("div",{id:"modal-1",className:"popup-modal mfp-hide"},i.a.createElement("img",{src:e.portfolio[1].imgurl}),i.a.createElement("div",{className:"description-box"},i.a.createElement("h4",null,e.portfolio[1].name),i.a.createElement("p",null,e.portfolio[1].stack),i.a.createElement("p",null,e.portfolio[1].detailed),i.a.createElement("div",{className:"projectlinks"},i.a.createElement("a",{href:e.portfolio[1].live,target:"_blank"},"View"),i.a.createElement("a",{href:e.portfolio[1].github,target:"_blank"},"Github")))),i.a.createElement("div",{id:"modal-2",className:"popup-modal mfp-hide"},i.a.createElement("img",{src:e.portfolio[2].imgurl}),i.a.createElement("div",{className:"description-box"},i.a.createElement("h4",null,e.portfolio[2].name),i.a.createElement("p",null,e.portfolio[2].stack),i.a.createElement("p",null,e.portfolio[2].detailed),i.a.createElement("div",{className:"projectlinks"},i.a.createElement("a",{href:e.portfolio[2].live,target:"_blank"},"View"),i.a.createElement("a",{href:e.portfolio[2].github,target:"_blank"},"Github")))),i.a.createElement("div",{id:"modal-3",className:"popup-modal mfp-hide"},i.a.createElement("img",{src:e.portfolio[3].imgurl}),i.a.createElement("div",{className:"description-box"},i.a.createElement("h4",null,e.portfolio[3].name),i.a.createElement("p",null,e.portfolio[3].stack),i.a.createElement("p",null,e.portfolio[3].detailed),i.a.createElement("div",{className:"projectlinks"},i.a.createElement("a",{href:"https://github.com/aaronsomo/tourviewar-client",target:"_blank"},"Front-End"),i.a.createElement("a",{href:"https://github.com/aaronsomo/tourviewar-server",target:"_blank"},"Back-End")),i.a.createElement("div",{className:"projectlinks"},i.a.createElement("a",{href:"https://arobjectimages.s3-us-west-1.amazonaws.com/portfolio/TourViewAR.ipa",target:"_blank"},"iOS(.ipa)"),i.a.createElement("a",{href:"https://arobjectimages.s3-us-west-1.amazonaws.com/portfolio/TourViewAR.apk",target:"_blank"},"Android(.apk)")))),i.a.createElement("div",{id:"modal-4",className:"popup-modal mfp-hide"},i.a.createElement("img",{src:e.portfolio[4].imgurl}),i.a.createElement("div",{className:"description-box"},i.a.createElement("h4",null,e.portfolio[4].name),i.a.createElement("p",null,e.portfolio[4].stack),i.a.createElement("p",null,e.portfolio[4].detailed),i.a.createElement("div",{className:"projectlinks"},i.a.createElement("a",{href:e.portfolio[4].live,target:"_blank"},"View"),i.a.createElement("a",{href:e.portfolio[4].github,target:"_blank"},"Github")))),i.a.createElement("div",{id:"modal-5",className:"popup-modal mfp-hide"},i.a.createElement("img",{src:e.portfolio[5].imgurl}),i.a.createElement("div",{className:"description-box"},i.a.createElement("h4",null,e.portfolio[5].name),i.a.createElement("p",null,e.portfolio[5].stack),i.a.createElement("p",null,e.portfolio[5].detailed),i.a.createElement("div",{className:"projectlinks"},i.a.createElement("a",{href:e.portfolio[5].live,target:"_blank"},"View"),i.a.createElement("a",{href:e.portfolio[5].github,target:"_blank"},"Github")))),i.a.createElement("div",{id:"modal-6",className:"popup-modal mfp-hide"},i.a.createElement("img",{src:e.portfolio[6].imgurl}),i.a.createElement("div",{className:"description-box"},i.a.createElement("h4",null,e.portfolio[6].name),i.a.createElement("p",null,e.portfolio[6].stack),i.a.createElement("p",null,e.portfolio[6].detailed),i.a.createElement("div",{className:"projectlinks"},i.a.createElement("a",{href:e.portfolio[6].live,target:"_blank"},"View"),i.a.createElement("a",{href:e.portfolio[6].github,target:"_blank"},"Github")))))))}}]),a}(n.Component),f=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).handleName=function(e){e.target;var a=e.target.value;console.log(a),t.setState({name:a})},t.handleEmail=function(e){e.target;var a=e.target.value;console.log(a),t.setState({email:a})},t.handleMessage=function(e){e.target;var a=e.target.value;console.log(a),t.setState({message:a})},t.handleSubmit=function(){console.log("handleSubmit!!")},t.state={name:"",email:"",message:"",disabled:!1,emailSent:null},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("section",{id:"contact"},i.a.createElement("div",{className:"row section-head"},i.a.createElement("div",{className:"twelve columns"},i.a.createElement("h1",{className:"lead"},"Contact me here"),i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("label",null,"Name :",i.a.createElement("input",{placeholder:"Enter Name",value:this.state.name,onChange:this.handleName})),i.a.createElement("label",null,"Email :",i.a.createElement("input",{placeholder:"Enter Email",value:this.state.email,onChange:this.handleEmail})),i.a.createElement("label",null,"Message :",i.a.createElement("textarea",{value:this.state.message,onChange:this.handleMessage}))),i.a.createElement("button",{className:"submit",type:"submit",disabled:this.state.disabled},"SUBMIT"),!0===this.state.emailSent&&i.a.createElement("p",{className:""},"Email Sent"),!1===this.state.emailSent&&i.a.createElement("p",{className:""},"Email Not Sent"))))}}]),a}(n.Component),E=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return i.a.createElement("footer",null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"twelve columns"},i.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e,a){return i.a.createElement("li",{key:a},i.a.createElement("a",{href:e.url},i.a.createElement("i",{className:e.className})))})),i.a.createElement("div",{className:"footer"},i.a.createElement("li",{className:"copyright"},"Made by Aaron Southammavong"))),i.a.createElement("div",{id:"go-top"},i.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},i.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),b={imagebaseurl:"https://github.com/aaronsomo",name:"Aaron Southammavong",role:"Full-Stack Mobile and Web Developer",linkedinId:" https://linkedin.com/in/aaronsouthammavong",roleDescription:"  I enjoy solving problems that challenge my understanding, as well as engaging myself in finding better solutions. With that said, I\u2019d love the opportunity to learn more about your challenges and have a discussion about what I can do to help solve them.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/aaronsouthammavong/",className:"fa fa-linkedin"},{name:"github",url:"http://github.com/aaronsomo",className:"fa fa-github"},{name:"twitter",url:"http://twitter.com/aaroneksouth",className:"fa fa-twitter"},{name:"resume",url:"https://resume.creddle.io/resume/g9yezxvbe6n",className:"fas fa-file-alt"}],aboutme:"Welcome! I'm Aaron and I have a knack for building creative and meaningful things, be it a bridge in Chicago or a web application on the Internet. As a former Civil Engineer, I\u2019ve worked with different teams to utilize my creative nature in designing and managing many projects, but they haven\u2019t quite filled that void - that curiosity in seeing an idea, solving issues, and having that idea realized. Software Engineering has me expressing that passion, as I take on more challenges, and I couldn't be happier.",address:"ae.southammavong@gmail.com",phone:"+ 1 ( 8 4 7 ) 2 7 1 - 6 3 0 7",education:[{UniversityName:"Hack Reactor",specialization:"Software Engineering Immersive",MonthOfPassing:"January",YearOfPassing:"2020"},{UniversityName:"University of Illinois at Chicago",specialization:"Bachelor of Science in Civil Engineering",MonthOfPassing:"May",YearOfPassing:"2013"}],work:[{CompanyName:"Terror Apps",specialization:"Front-End Software Engineer & Mobile Developer",Achievements:"Designing the web application and contributing to the publicly available PokerVault iOS application. Taking intiative in tackling UX/UI designs and decisions. Leading Terror App's second mobile project in addressing mental health."},{CompanyName:"Smrtlens.com",specialization:"CEO/Co-Founder",Achievements:"Designing and implementing business operations. Providing a means of protecting peoples' eyes from technologies that emit blue-light. Managing a small team that handles order processing and distribution."},{CompanyName:"Infrastructure Engineering, Inc",specialization:"Civil Engineer",MonthOfLeaving:"September",YearOfLeaving:"2019",Achievements:"A part of a team that managed the construction of a safe pedestrian bridge path/walkway for the community that alleviated pedestrian congestion during peak hours. A part of a team that installed a community park for a neighborhood. Redesigned hundreds of pedestrian sidewalks and intersections to accommodate ADA standards and address drainage problems, among other issues."},{CompanyName:"Illinois Department of Transportation",specialization:"Civil Engineer",MonthOfLeaving:"March",YearOfLeaving:"2013",Achievements:"Assistant Resident Engineer at Lisbon Road Bridge. Managed the construction of the bridge. Alleviated congestion during peak hours. Provided a safe route of travel for pedestrians. Assistant Resident Engineer at Minooka Road bridge. Co-managed bridge to accommodate 4 lanes of travel in anticipation of highway expansion, traffic, and neighborhood growth. A part of a team that designed infrastructure projects for District 3 in the State of Illinois."}],skillsDescription:"A quick summary of things that I frequent...",skillsDescription2:"(please see resume for a comprehensive list)",skills:[{skillname:"JavaScript"},{skillname:"React"},{skillname:"Swift"},{skillname:"Express"},{skillname:"NodeJS"},{skillname:"PostgreSQL"},{skillname:"MongoDB"},{skillname:"PingPong"}],portfolio:[{name:"PokerVault",description:"Mobile Application",stack:"SwiftUI, Redux, Core Data, VS App Center",detailed:"Worked on a small team to create a mobile application that helps users track their progress. Created analytical tools and features that displayed useful information to the user. Created the Sessions and New Session screens and functionality.",imgurl:"images/portfolio/pokervault.png",live:"https://apps.apple.com/us/app/pokervault/id1510490314",github:""},{name:"Natours",description:"Web Application",stack:"React, SASS (CSS)",detailed:"Created a React implementation of an HTML mocksite from an advanced CSS & styling course. The course strictly went over HTML, CSS styling. I took it upon myself to refactor the code into React components and modularized them for re-usability.",imgurl:"images/portfolio/reactnatours.png",live:"https://aaronsomo.github.io/react-natours/",github:"https://github.com/aaronsomo/react-natours"},{name:"HOME AWAY",description:"Full-Stack Web Application & Systems Design",stack:"React, Redux, Express, NodeJS, MongoDB, PostgreSQL, AWS, NGINX",detailed:"Re-created a mock of Home Away's front-end implementation. Re-designed a back-end system to support increase in traffic. Created ETL process to extract 15 million datasets into MongoDB and PostgreSQL databases. Optimized server and database to support a 400% increase in traffic to popular endpoints. Containerized & deployed server and database onto EC2 instances for separate management of micro-services.",imgurl:"images/portfolio/sdc.png",live:"https://www.youtube.com/watch?v=O07YBywin34",github:"https://github.com/objectobject-hr/sdc-service-aaron"},{name:"TourViewAR",description:"Augmented Reality Mobile Application",stack:"React-Native, Redux, Express, NodeJS, PostgreSQL, AWS, Heroku",detailed:"Created a mobile application that allows users to view and create 360 degree tours/images in augmented reality. Created login, create tours, camera, image upload, 360 view, 360 edit view, and text/object edit-view screens and their functionalities. Implemented camera and file upload functionality. Set up Express server and queries to a PostgreSQL database. Worked on a team that facilitated a monolithic architecture for project workflow.",imgurl:"images/portfolio/tourviewarclient.png",live:"https://github.com/aaronsomo/tourviewar-client",github:"https://github.com/aaronsomo/tourviewar-client"},{name:"Reading List",description:"Command Line Application",stack:"NodeJS",detailed:"Created the entire application in NodeJS. Allows users to search for books using the Google Book API and add results to their own reading list. Both time and space complexities were considered. Written under a time contraint of 48 hours. Tested with mocha/chai.",imgurl:"images/portfolio/readinglistcommandline.png",live:"https://www.youtube.com/watch?v=SKSFZ_Y144k",github:"https://github.com/aaronsomo/google-books-node-app"},{name:"IKEA MOCK",description:"Full-Stack Web Application",stack:"React, Express, NodeJS, MongoDB, PostgreSQL, Heroku",detailed:"Worked on a small team to design the IKEA product page. Built raw image carousels and modal components. Generated unique datasets to populate web application through simulated endpoints. Used Mongoose ORM and MongoDB to handle non-relational data set. Implemented a micro-service oriented architecture by combining multiple micro-services into a single proxy.",imgurl:"images/portfolio/ikeamock.png",live:"https://www.youtube.com/watch?v=fEuulO9LFdk",github:"https://github.com/objectobject-hr/service-aaron"},{name:"World Annona",description:"Full-Stack Web Application",stack:"React, Express, NodeJS, PostgreSQL, AWS",detailed:"Created a wep application that was submitted as an entry into NASA's 2020 48-hour Space Apps Challenge Hackathon. The project aims to help end world hunger through connecting entities who have food surpluses with distribution centers in an effort to fight food waste during the Covid-19 pandemic.",imgurl:"images/portfolio/annona.png",live:"https://worldannona.co",github:"https://github.com/No-Crop-Left-Behind"}],testimonials:[{description:"This is a sample testimonial",name:"Some technical guy"},{description:"This is a sample testimonial",name:"Some technical guy"}]},v=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(p,{resumeData:b}),i.a.createElement(u,{resumeData:b}),i.a.createElement(h,{resumeData:b}),i.a.createElement(g,{resumeData:b}),i.a.createElement(f,{resumeData:b}),i.a.createElement(E,{resumeData:b}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(15)}},[[8,2,1]]]);
//# sourceMappingURL=main.9e7ad2b7.chunk.js.map