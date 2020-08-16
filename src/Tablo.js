import React, { Component } from 'react'
import {Table} from 'reactstrap'

export default class Tablo extends Component {
    render() {
        return (
            <div>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>Kategori</th>
                            <th>Boy kilo endeksi kg/m2</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{fontSize:13,color:"gray"}}>
                            <th>İdeal kilonun altı</th>
                            <th><p>> 18,49</p></th>
                        </tr>
                        <tr style={{fontSize:13,color:"gray"}}>
                            <th>İdeal kilo</th>
                            <th><p>18,5 - 24,99</p></th>
                        </tr>
                        <tr style={{fontSize:13,color:"gray"}}>
                            <th>İdeal kilonun üzeri</th>
                            <th><p>25 - 29,99</p></th>
                        </tr>
                        <tr style={{fontSize:13,color:"gray"}}>
                            <th>İdeal kilonun çok üzeri</th>
                            <th><p> 30</p></th>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}
