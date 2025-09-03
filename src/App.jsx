import React from 'react'
import './App.css' 
import profilePic from './assets/portfolio pic.JPG'
import aboutPic from './assets/about-pic.jpg'
import Typewriter from 'typewriter-effect'

const App = () => {
  const handleSmoothScroll = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  const toggleColorMode = () => {
    document.body.classList.toggle('dark-mode');
  }

// JavaScript to handle URL search parameters
        // const urlParams = new URLSearchParams(window.location.search);
        // const searchParam = urlParams.get('search');
        // document.getElementById('search').textContent = searchParam ? searchParam : 'No search parameter provided';
    
    
 

  return (
    <>
    <h3>Change website color by clicking the tab below</h3>
    <button type="button" id="toggle-color" onClick={()=>{toggleColorMode()}}>Toggle Color Mode</button>
    <p>Url search: <span id="search"></span></p>


    {/* <!-- Main content --> */}
<h2>Welcome to my portfolio</h2>
    {/* <!-- photo of me --> */}
     <div class="box">
        <img id="profile image" src={profilePic} alt="portfolio-pic" class="center"/>
     </div>

     
        {/* <!-- Nav bar --> */}
         <nav>
            <ul>
                <li><a href="#home" onClick={()=>{handleSmoothScroll()}}>Home</a></li>
                <li><a href="#about" onClick={()=>{handleSmoothScroll()}}>About</a></li>
                <li><a href="#projects" onClick={()=>{handleSmoothScroll()}}>Projects</a></li>
                <li><a href="#contact-form" onClick={()=>{handleSmoothScroll()}}>Contact</a></li>
            </ul>
        </nav>

{/* <!-- thank you greeting --> */}

    <div id="typewriter" className= "typewriter-text">
      <Typewriter options={{
        strings: ['Thank you for visiting my portfolio website!', 'Are you looking for a professional to target your website goals?'],
        autoStart: true,
        loop: true,
        cursor: '_',
      }}/>
    </div>
  
<br/>
<br/>

    <section class="container">
    
    <div class="home__data" id="home">
        <h1 class="home__title">
            Hi I am <i>Aluna Stanford</i>
        </h1>
        <h3 class="home__subtitle">
            Aspiring Full-Stack Web Developer <span>(student)</span>
        </h3>
        <p>
            Building a website can take time. It requires 
            alot of coding using software such as HTML, Javascript, CSS, React and more. The great thing about it is, its 
            done precisely to satisfy your web goals, and business goals. Good things take time to create and any good designer or developer is going
            to take their time so they deliver you something great that both them and you can be proud of.
            
         <br/>
         <br/>
          As a web developer, I am excited to bring my skills and passion for web development to your project.
            I enjoy taking complex problems and turning them into beautiful interface
            designs. I also love the logic and structure of coding and always strive to write elegant
            and efficient code. 
    </p>
    </div>
    </section>

    {/* <!-- About Me Section --> */}

        <section id="about">
            <h2>About</h2>
            {/* <img src="assets/about-pic.jpg" alt="about-pic" class="about-pic"/> */}
            <img id="about image" src={aboutPic} alt="portfolio-pic" class="center"/>
            <p className="animated-gradient">
            Passionate about building modern web apps.
            </p>

            
        <br/>
        <p>
        I know you may be wondering what a full stack developer does. Well, let me explain to you about what I love to do. I am proficient in both front-end and back-end web development. <i>Humm</i>, what does that actually mean? It means  that I handle the entire process of building and maintaining a website or web application. I am involved in all the stages of the development process, including design, development, testing, and deployment.
        <br/>
        <br/>
        I recieved my Full Stack Developer certificate September of 2025 from "NPower". Before attending NPower, I graduated with a A.A degree (Associate of Arts). I worked as a teacher for a year, and as a first-responder communication specialist dispatcher for 5 years. I honestly enjoyed both positions, but I wanted to learn a new skill and I did. As the world is evolving through the use of information technology I became more interested, and thats what lead me in the field of software development.
        </p>
    <section id="skills">
    <p><h2>Skills</h2>
        <ul class="skillUL">
            <li><span>HTML</span> (basic scripting language used by web browsers to structure a web page)</li>
            <li><span>CSS3</span> (provides the styles that control how web content looks, including font, color, layout, and more)</li>
            <li><span>JavaScript</span> (makes web browsing better and work smoothly)</li>
            <li><span>Git/GitHub</span> (access control, bug tracking, software feature request, task mng. and stores individual code projects)</li>
        </ul>  
        <h3>Education</h3>
        NPower Path2Tech, Full Stack development certificate, 2025
            <br/>
            <br/>
        Community College of Baltimore County, AA Degree, 2017 
        
        <h3>Interests</h3>
        Design, Accessibility, API Intergration, Frontend Framework
</p>
    <br/>
    <br/>
    </section>
</section>
    
        <br/>
        <br/>
{/* <!-- Project Section -->  */}

<section id="projects" class="projects">
  <h2><a href="https://dom-book-store-project.onrender.com" target="_blank" rel="noopener noreferrer">DOM PROJECT 1</a></h2>
  <p>BOOK STORE</p>
</section>

<section class="projects">
  <h2><a href="https://myweatherapp-5ul2.onrender.com" target="_blank" rel="noopener noreferrer">REACT PROJECT 2</a></h2>
  <p>WEATHER APP</p>
</section>

<section class="projects">
  <h2><a href="https://your-ecommerce-project-link.com" target="_blank" rel="noopener noreferrer">CAPSTONE PROJECT 3</a></h2>
  <p>E-Commerce</p>
</section>


{/* <section id="projects" class="projects">
    <h2>DOM PROJECT 1</h2>
    <p>BOOK STORE</p>
</section>
<section class="projects">
    <h2>REACT PROJECT 2</h2>
    <p>WEATHER APP</p>
</section>
<section class="projects">
    <h2>CAPSTONE PROJECT 3</h2>
    <p>E-Commerence</p>
        <br/>
        <br/>
</section> */}
<br/>
<br/>
<br/>

{/* <!-- Contact Form Section --> */}
 <section id="contact-form">
    <form id="feedback-form">
        <h2>Contact Me</h2>
        <p><span>Questions</span>: please fill out the form below. Thank you!</p>
        <input type="text" id="name" name="name" placeholder="Your Name" required/>
        <input type="email" id="email" name="email" placeholder="Your Email" required/>
        <textarea id="message" name="message" placeholder="Your Message" required></textarea>
        <button type="submit" id="toggle-color">Send</button>
    </form>
</section>
<br/>

{/* <!-- Footer --> */}
<footer>
    <p>&copy; 2025 Aluna Stanford Portfolio. All rights reserved.</p>

<div class="social"> 
        Email: <a href="aluna.stanford1@outlook.com">aluna.stanford1@outlook.com</a>
        <br/>
        linkedIn: <a href="https://www.linkedin.com/in/aluna-stanford">https://www.linkedin.com/in/aluna-stanford-2a9777368?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app</a>
</div>
</footer>  
</>
  )
}

export default App