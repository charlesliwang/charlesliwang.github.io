import React, {Component} from 'react'
import { Col, Row, Container, Image, ResponsiveEmbed } from 'react-bootstrap'

import './CodePage.css';

class CodePage extends Component {
    componentDidMount() {
        document.title = 'Charles Wang | Code + Games'
    }
    render() {
        return(
            <Container>
                <Row xs={1} md={2}>
                    <Col className="cp-col">
                        <ResponsiveEmbed aspectRatio="16by9">
                            <iframe src="https://player.vimeo.com/video/388868981" title="glsl" webkitallowfullscreen mozallowfullscreen allowFullScreen></iframe>
                        </ResponsiveEmbed>
                    </Col>
                    <Col className="cp-col">
                        <h3>TOUCHDESIGNER GLSL EXPERIMENTS</h3>
                        <p>A few studies and experiments in using GLSL in a TouchDesigner environment. All major effects are achieved through GLSL, including particle motion.</p>
                    </Col>
                    <Col className="cp-col">
                        <Image style={{height: "auto", width: "100%"}} className="thumbnail" src={require("./../images/thumbnails/rd-gold.jpg")}></Image>
                    </Col>
                    <Col className="cp-col">
                        <h3>REACTION DIFFUSION VISUALIZER</h3>
                        <p>This project is an visual experiment using the <a href="http://www.karlsims.com/rd.html" target="_blank" rel="noopener noreferrer">Gray-Scott Reaction Diffusion model</a>. Please read the linked article for a full description of the technique. </p>
                        <br></br>
                        <p>The goal of this project was to experiment using frame buffers for iterative simulations and to see how adding a few simple configurable rules to a system can allow for a huge range of outcomes.</p>
                        <br></br>
                        <p>Check out a <a href="https://charlesliwang.com/Reaction-Diffusion/" target="_blank" rel="noopener noreferrer"> Live Demo </a> or check out the code on <a href="https://github.com/charlesliwang/Reaction-Diffusion" target="_blank" rel="noopener noreferrer">Github</a>.</p>
                    </Col>
                    <Col className="cp-col">
                        <Image style={{height: "auto", width: "100%"}} className="thumbnail" src={require("./../images/thumbnails/propuga.jpg")}></Image>
                    </Col>
                    <Col className="cp-col">
                        <h3>PROPUGA: Procedurally generated puzzle game</h3>
                        <p>Propuga is an online puzzle game where each puzzle is procedurally generated. This means that rather than designing every playable puzzle, I’ve designed a program that will generate an infinite number of challenging puzzles. I find that puzzle games are a fun quick source of entertainment, but a limited number of puzzle designs tends to result in limited replay value. Ideally, I wanted to create a puzzle game with as much emergent gameplay as possible.</p>
                        <br></br>
                        <p>Play it <a href="https://charlesliwang.com/Propuga/">here</a> or check it the code on on <a href="https://github.com/charlesliwang/Propuga" target="_blank" rel="noopener noreferrer">Github</a>.</p>
                    </Col>
                    <Col className="cp-col">
                        <ResponsiveEmbed aspectRatio="16by9">
                        <iframe src="https://player.vimeo.com/video/191907453" title="obscura" webkitallowfullscreen mozallowfullscreen allowFullScreen></iframe>
                        </ResponsiveEmbed>
                    </Col>
                    <Col className="cp-col">
                        <h3>OBSCURA (UNREAL)</h3>
                        <p> Obscura is a 3D, third person, puzzle exploration game in which the player is a shadow being searching for its caster. The character can only walk in the shadows. The way that the player interacts with the world is by changing the position of the sun in the sky, such that shadows are cast at different angles, thus exposing different parts of the terrain and level architecture for traversal.  </p>
                        <br></br>
                        <p>Check it out on <a href="https://github.com/charlesliwang/Obscura" target="_blank" rel="noopener noreferrer">Github</a>.</p>
                    </Col>
                    <Col className="cp-col">
                        <ResponsiveEmbed aspectRatio="16by9">
                        <iframe src="https://player.vimeo.com/video/196372438" title="angry" webkitallowfullscreen mozallowfullscreen allowFullScreen></iframe>
                        </ResponsiveEmbed>
                    </Col>
                    <Col className="cp-col">
                        <h3>ANGRY BEARD (UNITY VR)</h3>
                        <p> Angry Beard is a VR game designed for the HTC Vive where the player is a wizard defending a lone tower from a hoard of incoming enemies. The player has access to several different types of spells with different properties, each activated by a specific motion gesture tracked on the Vive controllers. Each level of this game has a set number of procedurally generated enemies that are out to get your single tower. These enemies have different strengths and weaknesses, so the player must choose their spells strategically when attacking. Later levels will produce larger hoards and more resilient enemies; mastering the motion controls and spell match-ups is key!
                        </p>
                        <br></br>
                        <p>Check it out on <a href="https://github.com/rahwang/AngryBeard" target="_blank" rel="noopener noreferrer">Github</a>.</p>
                    </Col>
                    <Col className="cp-col">
                        <Image style={{height: "auto", width: "100%"}} className="thumbnail" src={require("./../images/thumbnails/clustered.jpg")}></Image>
                    </Col>
                    <Col className="cp-col">
                        <h3>Clustered Forward+ and Deferred Renderer</h3>
                        <p>A WebGL Clustered Forward+ and Deferred Renderer implemented for the University of Pennsylvania's <a href="https://cis565-fall-2017.github.io/" target="_blank" rel="noopener noreferrer">GPU Programming course</a></p>
                        <br></br>
                        <p>Learn more about my implementation in my README on <a href="https://github.com/charlesliwang/Project5-WebGL-Clustered-Deferred-Forward-Plus" target="_blank" rel="noopener noreferrer">Github</a>.</p>
                        <p> <a href="http://charlesliwang.com/Project5-WebGL-Clustered-Deferred-Forward-Plus/" target="_blank" rel="noopener noreferrer">Live Demo</a>.</p>
                    </Col>
                    <Col className="cp-col">
                        <Image style={{height: "auto", width: "100%"}} className="thumbnail" src={require("./../images/thumbnails/gpupathtracer.jpg")}></Image>
                    </Col>
                    <Col className="cp-col">
                    <h3>GPU Path Tracer</h3>
                    <p>A CUDA Path Tracer implemented for the University of Pennsylvania's <a href="https://cis565-fall-2017.github.io/" target="_blank" rel="noopener noreferrer">GPU Programming course</a></p>
                    <br></br>
                    <li>Naive Path Tracing ("BRDF" sampled lambert and perfect specular)</li>
                    <li><i style={{letterSpacing: "1px"}}>Main Feature:</i> BVH (Bounding Volume Hierarchy) Acceleration</li>
                    <li>OBJ loading</li>
                    <li>Stream compaction for terminating rays and free-ing up threads</li>
                    <li>Depth of Field</li>
                    <li>Naive Anti-Aliasing</li>
                    <li>Material Sorting (to avoid divergence)</li>
                    <br></br>
                    <p>Learn more about my implementation in my README on <a href="https://github.com/charlesliwang/Project3-CUDA-Path-Tracer" target="_blank" rel="noopener noreferrer">Github</a>.</p>
                </Col>
                </Row>
                
            </Container>
        );
    }
}

export default CodePage;