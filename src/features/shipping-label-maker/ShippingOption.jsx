import React from 'react';

export default class ShippingOption extends React.Component {

    constructor(props){
        super(props);
        this.state={
            shippingOption:this.props.shippingOption?this.props.shippingOption:0,
        }

        this.callNext = this.callNext.bind(this);
        this.callBack = this.callBack.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    callNext(){
        this.props.goNext(this.state);
    }

    callBack(){
        this.props.goBack(this.state);
    }

    handleChange(event) {
        this.setState({shippingOption: event.target.value});
      }

    render(){
        const shippingRate = 0.40;
        let shippingCost = "";
        let shippingCostElement = "";
        if(this.state.shippingOption !== 0){
        
        shippingCost =   this.props.weight * shippingRate *
        (this.state.shippingOption == 1 ? 1 : 1.5);
        this.state.price = shippingCost;
            shippingCostElement = <h1>Shipping Cost : </h1> 
        }
        return (
            <div>
            <h3>Enter Shipping Type </h3>
            <select value={this.state.shippingOption} onChange={this.handleChange}>
        <option value="0">Select</option>
        <option value="1">ground</option>
        <option value="2">priority</option>
        
        </select>
        {shippingCostElement}
        <h2>{shippingCost}</h2>
            <button type='button'  value='cancel' onClick= {this.callBack}  disabled={ this.props.steps === 1  }> Previous </button>
            <button type='button'  value='next' onClick= {this.callNext}  disabled={ this.props.steps === 6  }> Next </button>
            </div>
            
            
        )
    }
}