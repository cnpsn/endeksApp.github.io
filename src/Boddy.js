import React, { Component } from 'react'
import {Col,Row} from 'reactstrap'
import Tablo from './Tablo'
import Cinsiyet from './Cinsiyet'
import TitleArea from './TitleArea'
import InputArea from './InputArea'
import { Switch, Route } from 'react-router-dom'
import SonucArea from './SonucArea'

export default class Boddy extends Component {
    state = {
        boy: '',
        kilo: '',
        sonuc:'sonuc',
        radio1:'',
        radio2:'',
        color:'',
    }

    checkRadio1 = () => {
        this.setState({
            radio2:'',
            radio1:'checked'
        })
    }
    checkRadio2 = () => {
        this.setState({
            radio1:'',
            radio2:'checked'
        })
    }

    handleChangeboy = (event) => {
        this.setState({ boy: event.target.value });
    }
    
    handleChangekilo = (event) => {
        this.setState({ kilo: event.target.value })
    }

    hesapla = () => {
        if (this.state.kilo === "" || this.state.boy === ""){
            alert("Lütfen Boy ve Kilonuzu giriniz...")
            this.setState({
                sonuc:''
            })
        }

        else if(this.state.radio1 === "" && this.state.radio2 === ""){
            alert("Lütfen cinsiyetinizi seçiniz...")
            this.setState({
                sonuc:''
            })

        }else{
            this.setState({
                sonuc:'sonuc'
            })
        }
    }
    render() {
        return (
            <div>
                <div className="p-0 mx-5">
                    <TitleArea/>
                    <Row className="mt-4 pb-4 border-bottom">
                        <Col md="3" className="border-right">
                            <Cinsiyet radio1={this.state.radio1} radio2={this.state.radio2} checkRadio1={this.checkRadio1} checkRadio2={this.checkRadio2} />
                        </Col>
                        <Col md="6">
                            <Switch>
                                <Route exact path="/" render={props => (
                                   <InputArea 
                                   {...props}
                                    boy={this.state.boy}
                                    kilo={this.state.kilo}
                                    handleChangeboy={this.handleChangeboy}
                                    handleChangekilo={this.handleChangekilo}
                                    hesapla={this.hesapla}
                                    sonuc={this.state.sonuc}
                                   />     
                                )} />
                                <Route exact path="/sonuc" render={props => (
                                    <SonucArea
                                    {...props}
                                    color={this.state.color}
                                    boy={this.state.boy}
                                    kilo={this.state.kilo}
                                    radio1={this.state.radio1}
                                    radio2={this.state.radio2}
                                    color={this.state.color}
                                    />
                                )} />
                            </Switch>
                        </Col>
                        <Col md="3" className="p-0">
                            <Tablo/>
                        </Col>
                    </Row>
                </div>
                
            </div>
        )
    }
}
// <FontAwesomeIcon icon={faMale} style={{fontSize:250}} />