import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';
import resume from './Assets/resumeData.json'
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {
        "main": {
          "name": "Simon Lim",
          "occupation": "Software Developer",
          "description": "I have a passion for web development and love to create for web, as well as travel. Let's connect.",
          "image": "profilepic.jpg",
          "bio1": "I am a 3rd year software engineering student at Concordia University. There is no surprise that coding is a big part of my life. I enjoy taking complex problems and turning them into solutions. I also love the software development process from designing to production. It is challenging, yet so rewarding. Some of my favorite technologies are React JS and Spring Boot. They provide fast and efficient solution to building a robust application.",
          "bio2": "Furthermore, I enjoy meeting new people and finding way to build a strong and lasting relationship. I lead a team as VP event for Concordia Canadian Asian Society. We turn creative ideas into reality by designing, planning, and organizing social events for Montreal student community. ",
          "contactmessage": "Here is where you should write your message to readers to have them get in contact with you.",
          "email": "simonlim898@hotmail.com",
          "address": {
            "city": "Laval",
            "state": "Quebec",
            "country":"Canada"
          },
          "website": "http://www.timbakerdev.com",
          "resumedownload": "SimonLim_CV.pdf",
          "social": [
            {
              "name": "linkedin",
              "url": "https://www.linkedin.com/in/simonlim898/",
              "className": "fa fa-linkedin"
            },
            {
              "name": "github",
              "url": "https://github.com/nasaku898",
              "className": "fa fa-github"
            }
          ]
        },
        "resume": {
          "skillmessage": "I am a quick learner and seek new challenges",
          "education": [
            {
              "school": "College Montmorency",
              "degree": "DEC Health Science",
              "graduated": "May 2018",
              "description": "At College Montmorency, it was a period of discovery. I was doing my pre-requisites to enter university. I had the chance to take interesting classes in multiple domains to find my field of interests such as biology, chemistry, mathematics, literature, physics, programming and more. Additionally, I had the pleasure of meeting and working with smart and wonderful individuals during my 2 years in CEGEP. "
          
            },
            {
              "school": "Concordia University",
              "degree": "B.Eng Software Engineering",
              "graduated": "Expected May 2022",
              "description": "At Concordia University, I was member of the institute of Co-operative Education. This allowed me to gain work experience while studying. I was also highly involved in school activities such as being the vice-president of event for Concordia Canadian Asian Society. We plan and organize social events made for the community. In term of academic achievement, I made it into the Dean list of 2018-2019 for my high GPA. "
            }
          ],
          "work": [
            {
              "company": "SAP Canada",
              "title": "Java Backend Developer Intern ",
              "years": "September 2019 - December 2019",
              "description": "This Fall was a rite of passage into software engineering professionalism. At SAP Canada, it opened my eye to exciting new challenges and experiences in the software industry. I had the chance to gain hand-on experiencel; working in an agile environment made me understand the software development cycle from design to maintenance. My team blew me away with their willingness to share their time and wisdom. As well as their trust in me, while I worked on developing Rest APIs for their e-commerce platform with Java Spring."
            },
            {
              "company": "Concordia University DAM Labs",
              "title": "Solid Modelling Programmer",
              "years": "June 2020 - August 2020",
              "description": "I was the first intern to work in a research environment with Concordia University’s Design and Additive Manufacturing Lab. During these couples of months, I helped develop a library to improve 3D printing overhang support process. This library would help generate a new type of support structure that would help the manufacturer or the user to remove the support structure more easily and leaving no indent."
            }
          ],
          "skills": [
            {
              "name": "Java",
              "level": "90%"
            },
            {
              "name": "Python",
              "level": "70%"
            },
            {
              "name": "JavaScript",
              "level": "80%"
            },
            {
              "name": "Spring Boot",
              "level": "60%"
            },
            {
              "name": "ReactJs",
              "level": "80%"
            },
            {
              "name": "HTML/CSS",
              "level": "80%"
            },
            {
              "name": "Git",
              "level": "90%"
            }
          ]
        },
        "portfolio": {
          "projects": [
            {
              "title": "Dark Instagram",
              "category": "Social Media Platform for sharing pictures",
              "image": "dark-instagram.jpg",
              "url": "https://github.com/nasaku898/Dark-Instagram"
            },
            {
              "title": "STL Viewer",
              "category": "An online 3D model viewer",
              "image": "stl-viewer.jpg",
              "url": "https://nasaku898.github.io/Mesh-Support-Website/#/"
            },
            {
              "title": "Resume Website",
              "category": "A React based resume website template",
              "image": "resume-website.jpg",
              "url": "https://github.com/nasaku898/portfolio"
            }
          ]
        },
        "testimonials": {
          "testimonials": [
            {
              "text": "The secret of getting ahead is getting started.",
              "user": "Mark Twain"
            },
            {
              "text": "Don’t Let Yesterday Take Up Too Much Of Today.",
              "user": "Will Rogers"
            }
          ]
        }
      }
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  setResume(){
    this.setState({resumeData:resume})
  }

  /*
  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  */
  componentDidMount(){
    console.log(resume)
    //this.setResume();
    //this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Testimonials data={this.state.resumeData.testimonials}/>
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
