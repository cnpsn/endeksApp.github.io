import React, { Component } from 'react'
import {Col,CardTitle,Row} from 'reactstrap'

export default class TitleArea extends Component {
    render() {
        return (
            <div>
                <Row className="border-top border-bottom p-4 mt-4">
                <Col>
                    <CardTitle style={{fontSize:30,color:"gray",fontWeight:700}}>BOY KİLO ENDEKSİ NEDİR?</CardTitle>
                        <p style={{fontSize:14,color:"gray"}}>Boy Kilo Endeksi veya diğer adıyla Vücut Kitle Endeksi, vücudunuzdaki tahmini yağ oranını gösteren bir değerdir.</p>
                </Col>
                <Col className="border-left">
                    <CardTitle style={{fontSize:30,color:"gray",fontWeight:700}}>BOY KİLO ENDEKSİ NASIL HESAPLANIR?</CardTitle>
                        <p style={{fontSize:14,color:"gray"}}>Boy Kilo Endeksi hesaplamasında boy-kilo oranı kullanılır. Dolayısıyla Boy Kilo Endeksi değeri, boyunuza göre ideal kilonuzun kaç olması gerektiğini gösterir. Vücut ağırlığınız, boyunuzun karesine bölünerek boy kilo cetveli üzerinde ideal kilonuz hesaplanır.</p>
                </Col>
                </Row>
            </div>
        )
    }
}
