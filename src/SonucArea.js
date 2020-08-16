import React, { Component } from 'react'
import {Col,Row, Input,Card,Button} from 'reactstrap'
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import './App.css'

export default class SonucArea extends Component {
    state={
        ideal:'',
        endeks:'',
        aciklama:'',
        color:this.props.color,
        aciklama2:'',
    }
    componentDidMount(){
        if(this.props.radio1 === 'checked'){
            this.setState({
                ideal:50+2.3*((this.props.boy/2.54)-60)
            })
        }
        else if(this.props.radio2 === 'checked'){
            this.setState({
                ideal:45.5+2.3*((this.props.boy/2.54)-60)
            })
        }

        this.setState({
            endeks: this.props.kilo/((this.props.boy/100)*(this.props.boy/100))
        })

        if(this.props.kilo/((this.props.boy/100)*(this.props.boy/100)) <= 18.49){
            this.setState({
                aciklama:'İdeal kilonun altında',
                color:'rgb(255, 185, 7)',
                aciklama2:'İdeal kilonun altında kalmışsın ama yükselmen için yanındayız! Tek ihtiyacın biraz motivasyon biraz da düzenli ve dengeli beslenme. Biz de tam bunun için varız! Bizi takip et, senin için tüyolarımız var; birlikte başarabiliriz!'
            })
        }
        else if(this.props.kilo/((this.props.boy/100)*(this.props.boy/100)) >= 18.5 && this.props.kilo/((this.props.boy/100)*(this.props.boy/100)) <= 24.99){
            this.setState({
                aciklama:'Kilonuz ideal',
                color:'rgb(36, 157, 61)',
                aciklama2:'Harikasın! Tam da ideal kilondasın! Şimdi sana düşen bunu korumak. Hareketi ihmal etmeden, düzenli ve dengeli beslenmeye ve bizi takip etmeye devam!'
            })
        }
        else if(this.props.kilo/((this.props.boy/100)*(this.props.boy/100)) >= 25 && this.props.kilo/((this.props.boy/100)*(this.props.boy/100)) <= 29.99){
            this.setState({
                aciklama:'İdeal kilonun üzerinde',
                color:'rgb(255, 185, 7)',
                aciklama2:"Hedefe yakınsın! Önünde kısa bir yol var. Dengeli beslenme ve düzenli fiziksel aktivite ile tam 12'den en ideali vurabilirsin!"
            })
        }
        else if(this.props.kilo/((this.props.boy/100)*(this.props.boy/100)) > 30){
            this.setState({
                aciklama:'İdeal kilonun çok üzerinde',
                color:'rgb(215, 46, 61)',
                aciklama2:'İdeal kilonu biraz uzakta bırakmışsın ama güzel bir haberimiz var; ona kavuşmak sandığın kadar zor değil. Her şey kararlı ve motive olmakla başlıyor, asla pes etme ve motivasyonunu yüksek tut, hareket ve dengeli beslenme hayatının bir parçası olduğunda değişimin hızına sen bile inanamayacaksın. Motivasyonu yüksek tutup, dengeli ve düzenli beslenmeye dikkat edip, hareketi artırarak umduğunuzdan bile kolay olacak. İhtiyacınız olan her şey, okunmak üzere burada sizi bekliyor! Haydi ilk iş olarak biraz ilham al ve harekete geç!'
            })
        }
    }
    render() {
        return (
            <div id="gonderGelsin">
                <Row>
                   <Link to="/"><Button className="bg-danger ml-2"><FontAwesomeIcon icon={faArrowLeft}/></Button></Link>
                </Row>
                <Row className="pt-2 aciklama" style={{justifyContent:'center'}}><p style={{color:this.state.color}}> {this.state.aciklama} </p></Row>
                <Row className="px-3 pt-2">
                    <Col>
                        <div className="bg-primary ml-4 p-5 divBalon">
                            <p className="text-white Bmi">Boy Kilo Endeksi(BMI)</p>
                            <p className="mt-5 text-warning Kg">{Math.floor(this.state.endeks)} kg/m2</p>
                        </div>
                    </Col>

                    <Col> 
                        <div className="bg-primary ml-4 p-5 divBalon">
                            <p className="text-white Bmi">İdeal Vücut Ağırlığınız</p>
                            <p className="mt-5 text-warning Kg">{Math.floor(this.state.ideal)} Kg</p> 
                        </div>
                    </Col>
                </Row>
                <Row className="p-3">
                    <p className="mt-3 text-success">{this.state.aciklama2}</p>
                </Row>
            </div>
        )
    }
}
