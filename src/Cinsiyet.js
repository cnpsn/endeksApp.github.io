import React, { Component } from 'react'
import {CardTitle,Row,Col,Input,FormGroup,Label} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMale,faFemale } from '@fortawesome/free-solid-svg-icons'

export default class Cinsiyet extends Component {
    render() {
        return (
            <div className="pB">
                <CardTitle style={{fontSize:20,color:"gray",fontWeight:700,textAlign:"center"}}>CİNSİYET</CardTitle>
                            <Row>
                                <Col>
                                    <FormGroup check>
                                        <Label check>
                                            <Row style={{justifyContent: 'center',}}>
                                                <p className="text-info ml-2" style={{fontSize:18,fontWeight:700}} >ERKEK</p>
                                            </Row>
                                            <Row style={{justifyContent: 'center',}}>
                                                <FontAwesomeIcon id="pic" onClick={this.props.checkRadio1} className="text-primary icon" icon={faMale}/>
                                            </Row>
                                            <Row style={{justifyContent:"center",paddingLeft:40,paddingTop:10}}>
                                                <Input type="radio" name="radio2" id="radio1" checked={this.props.radio1} />
                                            </Row>
                                        </Label>
                                    </FormGroup> 
                                </Col>
                                <Col>
                                    <FormGroup check>
                                        <Label check>
                                                <Row style={{justifyContent: 'center',}}>
                                                    <p className="text-info ml-2" style={{fontSize:18,fontWeight:700}} >KADIN</p>
                                                </Row>
                                                <Row style={{justifyContent: 'center',}}>
                                                    <FontAwesomeIcon onClick={this.props.checkRadio2} className="text-primary icon" icon={faFemale}/>
                                                </Row>
                                                <Row style={{justifyContent:"center",paddingLeft:40,paddingTop:10}}>
                                                    <Input  type="radio" name="radio2" id="radio2" checked={this.props.radio2}/>
                                                </Row>
                                        </Label>
                                    </FormGroup>
                                    
                                </Col>
                            </Row>
            </div>
        )
    }
}
