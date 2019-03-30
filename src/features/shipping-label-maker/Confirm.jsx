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
        let shippingDetail = this.props.shippingDetail;
        return(
            <div>
                
                    <table>
                    <tbody>
                        <tr><td colSpan='2'><b>Reciever Address:</b></td></tr>
                        <tr><td colSpan='2'>{shippingDetail.to.name}</td></tr>
                        <tr><td>{shippingDetail.to.street}</td><td>{shippingDetail.to.city}</td></tr>
                        <tr><td>{shippingDetail.to.state}</td><td>{shippingDetail.to.zip}</td></tr>
                    </tbody>
                    </table>
                    <table>
                    <tbody>
                        <tr><td colSpan='2'><b>Sender Address:</b></td></tr>
                        <tr><td colSpan='2'>{shippingDetail.from.name}</td></tr>
                        <tr><td>{shippingDetail.from.street}</td><td>{shippingDetail.from.city}</td></tr>
                        <tr><td>{shippingDetail.from.state}</td><td>{shippingDetail.from.zip}</td></tr>
                        </tbody>
                    </table>
                    <br/>
                    <div>
                        weight : {shippingDetail.weight} <br/>
                        shipping Charges : {shippingDetail.price}
                    </div>
                    <button type='button'  value='cancel' onClick= {this.callBack}  disabled={ this.props.steps === 1  }> Previous </button>
             <button type='button'  value='next' onClick= {this.callNext}  disabled={ this.props.steps === 6  }> Confirm </button>
            </div>
        )
    }

}