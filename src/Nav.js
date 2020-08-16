import React, { Component } from 'react'
import {Navbar} from 'reactstrap'
import './App.css'



export default class Nav extends Component {
    render() {
        return (
            <div>   
                <Navbar className="bg-primary" style={{height:70,justifyContent:"center"}}>
                    <p className="text" style={{color:"white",fontWeight:900}}>BEDEN KİTLE ENDEKSİ HESAPLAMA</p>
                </Navbar>
            </div>
        )
    }
}
