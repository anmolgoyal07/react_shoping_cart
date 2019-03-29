import React from 'react';

export default class Confirm extends React.Component {


    constructor(props){
        super(props);
        this.callNext = this.callNext.bind(this);
        this.callBack = this.callBack.bind(this);
    }

    callNext(){
        this.props.goNext(this.state);
    }

    callBack(){
        this.props.goBack(this.state);
    }

    render(){
        let shippingDetails = this.props.shippingDetails;
        return(
            <div>
                
                    <table>
                        <tr><td colSpan='2'><b>Reciever Address:</b></td></tr>
                        <tr><td colSpan='2'>{shippingDetails.to.name}</td></tr>
                        <tr><td>{shippingDetails.to.street}</td> <td>{shippingDetails.to.city}</td></tr>
                        <tr><td>{shippingDetails.to.state}</td> <td>{shippingDetails.to.zip}</td></tr>
                    </table>
                    <table>
                        <tr><td colSpan='2'><b>Sender Address:</b></td></tr>
                        <tr><td colSpan='2'>{shippingDetails.from.name}</td></tr>
                        <tr><td>{shippingDetails.from.street}</td> <td>{shippingDetails.from.city}</td></tr>
                        <tr><td>{shippingDetails.from.state}</td> <td>{shippingDetails.from.zip}</td></tr>
                    </table>
                    <br/>
                    <div>
                        weight : {shippingDetails.weight} <br/>
                        shipping Charges : {shippingDetails.price}
                    </div>
                    <button type='button'  value='cancel' onClick= {this.callBack}  disabled={ this.props.steps === 1  }> Previous </button>
             <button type='button'  value='next' onClick= {this.callNext}  disabled={ this.props.steps === 6  }> Confirm </button>
            </div>
        )
    }

}