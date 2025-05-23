import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import meter4 from "../assets/img/meter4.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import experienceIcon from "../assets/img/experience.png"; // Use the correct image name
import educationIcon from "../assets/img/education.png"; // Use the correct image name

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>

              <div className="experience">
                <h3>Experience</h3>
                
                <div className="experience-item">
                  <img src={experienceIcon} alt="Experience Icon" className="experience-icon" />
                  <div className="experience-details">
                    <h4>LeapMile Robotics.</h4>
                    <h5>Software Engineer: 3+ years -> Present</h5>
                    <p>I designed and implemented API framework architecture using Python and FastAPI, ensuring seamless integration through REST APIs. I developed and executed automated tests with Selenium and pytest to guarantee robust and reliable API performance.</p>
                  </div>
                </div>

                <div className="experience-item">
                  <img src={experienceIcon} alt="Experience Icon" className="experience-icon" />
                  <div className="experience-details">
                    <h4>Cisco Systems</h4>
                    <h5>Software Test Engineer: 1 year</h5>
                    <p>I tested new and existing features for continuous integration on embedded wireless controllers. I qualified image upgrades and downgrades for Cisco 9100 APs using Cisco DNA Center through SWIM, WebUI, and CLI options. My responsibilities included using Jenkins for baseline testing of EWC images, documenting CI and longevity test results, and reporting discrepancies in expected performance.</p>
                  </div>
                </div>

              </div>

              <div className="education">
                <h3>Education</h3>
                <div className="education-item">
                  <img src={educationIcon} alt="Education Icon" className="education-icon" />
                  <div className="education-details">
                    <h5>Bachelor of Engineering in Computer Science Engineering (B.E. in CSE)</h5>
                  </div>
                </div>
              </div>

              <Carousel responsive={responsive} 
                infinite={true} 
                autoPlay={true} 
                autoPlaySpeed={3000} 
                className="owl-carousel owl-theme skill-slider">

                <div className="item">
                  <img src={meter1} alt="Python" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Python Automation" />
                  <h5>Python Automation</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="API: FastApi/Flask" />
                  <h5>API: FastApi/Flask</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="SQL/PostgreSQL/MySql" />
                  <h5>SQL/PostgreSQL/MySql</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Java" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={meter4} alt="HTML/CSS" />
                  <h5>HTML/CSS</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
}
