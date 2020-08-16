import React, { Component } from 'react'
import { Card, CardTitle, CardBody, CardFooter,Button, Input,Form,FormGroup,Label} from 'reactstrap'
import {Link} from "react-router-dom";
import './App.css'

export default class  InputArea extends Component{
    render(){
        return (
            <div id="gonderGitsin" className="pB">
                <Card>
                    <CardTitle className="text-info" style={{ textAlign: "center", fontWeight: 600 }}>VÜCUT KİTLE ENDEKSİ HESAPLAMA ARACI</CardTitle>
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Label for="">Boyunuz :</Label>
                                <Input type="number"  id="boy" placeholder="Boyunuz(cm)" value={this.props.boy} onChange={this.props.handleChangeboy} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="">Kilonuz :</Label>
                                <Input type="number"  id="kilo" placeholder="Kilonuz(kg)" value={this.props.kilo} onChange={this.props.handleChangekilo} />
                            </FormGroup>
                        </Form>
                    </CardBody>
                    <CardFooter style={{ textAlign: "center" }}>
                        <Link to={this.props.sonuc}><Button id="Hesapla" color="primary" onClick={this.props.hesapla}>Hesapla</Button></Link>
                    </CardFooter>
                </Card>
            </div>
        )
    }
        
}
