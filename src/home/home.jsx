import React from 'react'
import  { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Home extends React.Component {


    render(){
        return (
            <div>
             welcome to shipping application    
             <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/shippingDetail">shipping Detail</Link>
                </li>
            </ul>
            </div>
        )
    }
}