import React, {Component} from 'react';
import { Col, Row, Container, Image, Button, ResponsiveEmbed } from 'react-bootstrap'
import './ArtPage.css';

class ArtDescription extends Component {

    render() {
        return(
            <Container className="ap-proj-desc">
            <Button onClick={this.props.closeWindow} 
                style={{position:"absolute", right:"15px", top:"10px", zIndex:"3", 
                        padding: '0px 5px', backgroundColor: 'transparent', color: "grey",
                        fontSize: "30px"}}>   x   </Button>
                <Row >
                    <h3 style={{margin: "30px auto", padding: "0", textAlign: "center"}}>{this.props.projectDetails.name}</h3>
                </Row>
                <Row >
                    <div style={{margin: "0 auto"}}>
                    {this.props.projectDetails.icons.map(icon => (
                    <Image className="icon" key={this.props.projectName} src={require("./../images/icons/" + icon + ".png")}>
                            </Image>
                    ))}
                    </div>
                </Row>
                <Row>
                    {this.props.projectDetails.main.map(image =>(
                        image.startsWith("http") ?
                            <ResponsiveEmbed aspectRatio="16by9" style={{maxHeight: "500px", margin: "50px auto 0px"}}>
                                            <iframe src={image} title="mainVideo" webkitallowfullscreen mozallowfullscreen allowFullScreen></iframe>
                            </ResponsiveEmbed>
                            :
                            <Image style={{maxHeight: "500px", maxWidth: "100%", margin: "50px auto 0px"}} src={require("./../images/projects/" + image)}></Image>
                    ))}
                </Row>
                
                {this.props.projectDetails.breakdown ?
                <div>
                    <Row>
                        <h3 style={{margin: "30px auto 0px", padding: "0"}}>Breakdown</h3>
                    </Row>
                    <Row  xs={1} md={2} style={{justifyContent: "center"}}>
                        {this.props.projectDetails.breakdown.map(image =>(
                            <Col style={{maxWidth: "500px", textAlign: "center"}}>
                            {
                            image.startsWith("http") ?
                                <ResponsiveEmbed style={{maxHeight: "300px", margin: "30px auto 0px"}}>
                                                <iframe src={image} title="mainVideo" webkitallowfullscreen mozallowfullscreen allowFullScreen></iframe>
                                </ResponsiveEmbed>
                                :
                                <Image style={{maxHeight: "300px", maxWidth: "100%", margin: "30px auto 0px"}} src={require("./../images/projects/" + image)}></Image>
                            }
                            </Col>
                        ))}
                        <div></div>
                    </Row> 
                </div>:
                <div></div>
                }
            </Container>
        );

    }
}

export default ArtDescription;