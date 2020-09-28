import React, {Component}  from 'react'
import { Row, Container, Image } from 'react-bootstrap'

class HomePage extends Component {
    componentDidMount() {
        document.title = 'Charles Wang'
    }
    render() {
        return(
            <Container>
                <Row style={{maxWidth : "475px", display: "block", padding: "18px"}}>
                    <h3>ABOUT ME</h3>
                    <p>I'm Charles, a Brooklyn-based 3D artist and developer. Before moving to NY, I earned my BSE and MSE from the University of Pennsylvania School of Engineering and Applied Sciences. I'm an enthusiast and a creator.
                        <br></br><br></br>
                        I grew up (and am still growing up) as an obsessive gamer, a devoted musician, and an experimental artist. Every fixation I've had, whether it be about music, technology, or visual arts, has molded the unique lens through which I see this hectic world. Much of my work reflects this interdisciplinary passion and the idea of a mixed identity. I believe that passion breeds passion, and that the intersection of our eclectic interests is what allows us to do amazing things.
                    <br></br><br></br><br></br><br></br>
                    </p>
                    <h3>FIND ME</h3>
                    <p>charlesliwang76@gmail.com</p>

                    <p><a href="https://github.com/charlesliwang" target="_blank" rel="noopener noreferrer">github.com/charlesliwang</a> <br></br>
                    <a href="https://www.linkedin.com/in/charlesliwang/" target="_blank" rel="noopener noreferrer">linkedin.com/in/charlesliwang</a> <br></br>
                    <a href="https://www.instagram.com/chaysonaplane/" target="_blank" rel="noopener noreferrer">instagram.com/chaysonaplane</a> <br></br><br></br>
                    or just check out my <a href={require("../pdfs/Charles_Wang_Resume.pdf")} target="_blank" rel="noopener noreferrer">resume</a>.</p>
                        
                </Row>
                <Image style={{position:"fixed",width:"250px",height:"250px",right:"0",bottom:"0"}} src={require("./../images/loris.png")}>
                </Image> 
            </Container>

            
        );
    }
}

export default HomePage;