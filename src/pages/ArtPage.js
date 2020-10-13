import React, {Component} from 'react';
import { Col, Row, Container, Image, Button } from 'react-bootstrap'
import './ArtPage.css';
import ArtDescription from './ArtDescription';
import projects from '../json/projects.json'

class ArtPage extends Component {
    state = {
        displayProject: false,
        projects : {'airmax97' : {},
                    'pokemonbattle' : {},
                    'maskgirl' : {},
                    'yugioh' : {},
                    'coral' : {},
                    'guitar' : {},
                    'env_anim' : {},
                    'doodles' : {} },
        curProject : 'airmax97'
    }

    componentDidMount() {
        document.title = 'Charles Wang | 3D Art'
    }
   
    displayArt = (project) => {
        this.setState({
            displayProject: !this.state.displayProject,
            curProject : project
        })
    }

    closeWindow = () => {
        this.setState({
            displayProject: !this.state.displayProject,
        })
    }

    render() {
        let project = null;
        if ( this.state.displayProject ) {
            project = (
                <ArtDescription closeWindow={this.closeWindow} 
                                projectName={this.state.curProject}
                                projectDetails={projects[this.state.curProject]}>
                </ArtDescription>
            )
        }
        let projectsArr = Object.keys(projects).map((key) => key);
        return(
            <div>
                {project}
            <Container className={this.state.displayProject ? "d-none ap-container" : "ap-container"}>
                <Row>
                    {projectsArr.map(project => (
                        <Col className='ap-col'>
                        <Button className="hvr-grow" onClick={() => this.displayArt(project)}>
                            <Image className="thumbnail" src={require("./../images/thumbnails/" + project + "_sq.jpg")}>
                            </Image>
                        </Button>
                    </Col>
                    ))}
                </Row>
            </Container>
            </div>
        );

    }
}

export default ArtPage;