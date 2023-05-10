
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">

          <h2>What i do</h2>
                        <p>Passionate about changing the world with technology.</p>
                        <p>Tech Stack</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <h7>C, C++</h7>
                            </div>
                            <div className="item">
                                <h7>Java</h7>
                            </div>
                            <div className="item">
                                <h7>Python</h7>
                            </div>
                            <div className="item">
                                <h7>Node.js, Nest.js</h7>
                            </div>
                            <div className="item">
                                <h7>UML, Merise, Scrum</h7>
                            </div>
                            <div className="item">
                                <h7>PostgresSQL, MongoDB</h7>
                            </div>
                            <div className="item">
                                <h7>Docker, Docker-compose, Git</h7>
                            </div>
                        </Carousel>
                        
                    </div>
                </div>
            </div>
        </div>


    </section>
  )
}