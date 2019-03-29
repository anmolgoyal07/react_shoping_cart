import React, {Component} from 'react';
import SenderAddress from './../../../features/shipping-label-maker/SenderAddress';
import RecieverAddress from './../../../features/shipping-label-maker/RecieverAddress';
import Weight from './../../../features/shipping-label-maker/Weight';
import ShippingOption from './../../../features/shipping-label-maker/ShippingOption';
import Confirm from './../../../features/shipping-label-maker/Confirm'
export default class Wizard extends Component {

    steps = 1;
    constructor(props){
        super(props);
        this.goBack = this.goBack.bind(this);
        this.goNext = this.goNext.bind(this);
        this.state = {steps:this.steps};
    }

    shippingDetails = {

        'from': {
            'name': "",
            'street': "",
            'city': "",
            'state': "",
            'zip': ""
        },
        'to': {
            'name': "",
            'street': "",
            'city': "",
            'state': "",
            'zip': ""
        },
        'weight': 0,
        'shippingOption':"" ,
        'price':0
    }

    
    screens = {
        1:'SENDER',
        2:'RECEIVER',
        3:'WEIGHT',
        4:'SHIPPING',

    }

    renderSenderComponent(){

    }
    goBack(data){
        if(this.steps===1){
            this.shippingDetails.from = data;
        } else if(this.steps ===2){
            this.shippingDetails.to = data;
        } else if (this.steps === 3){
            this.shippingDetails.weight = data;
        } else if (this.steps === 4){
            this.shippingDetails.shippingOption = data.shippingOption;
            this.shippingDetails.price = data.price;
        }
        this.steps = this.steps - 1;
        this.setState( {steps:this.steps});
    }
    goNext(data){
        if(this.steps===1){
            this.shippingDetails.from = data;
        } else if(this.steps ===2){
            this.shippingDetails.to = data;
        } else if (this.steps === 3){
            this.shippingDetails.weight = data;
        } else if (this.steps === 4){
            this.shippingDetails.shippingOption = data.shippingOption;
            this.shippingDetails.price = data.price;
        }
        this.steps = this.steps + 1;
        this.setState({steps:this.steps});
    }

    render(){
        let widget ='';
        switch(this.steps){
            case 1:
            widget=<SenderAddress name={this.shippingDetails.from.name} street={this.shippingDetails.from.street}
            city={this.shippingDetails.from.city} state={this.shippingDetails.from.state} zip={this.shippingDetails.from.zip}
            goBack={this.goBack} goNext={this.goNext} steps={this.steps}></SenderAddress>;
            break;

            case 2:
            widget=<RecieverAddress
            name={this.shippingDetails.to.name} street={this.shippingDetails.to.street}
            city={this.shippingDetails.to.city} state={this.shippingDetails.to.state} zip={this.shippingDetails.to.zip}
            goBack={this.goBack} goNext={this.goNext} steps={this.steps}></RecieverAddress>;
            break;
            
            case 3:
            widget = <Weight weight={this.shippingDetails.weight}  goBack={this.goBack} goNext={this.goNext} steps={this.steps}>
            </Weight>
            break;

            case 4:
            widget = <ShippingOption shippingOption={this.shippingDetails.shippingOption} weight={this.shippingDetails.weight}  goBack={this.goBack} goNext={this.goNext} steps={this.steps}>
            </ShippingOption>
            break;

            case 5:
            widget = <Confirm shippingDetails={this.shippingDetails}  goBack={this.goBack} goNext={this.goNext}></Confirm>
            break;

            case 6:
            widget = <h2>Thanks, Your order has been placed succesfully</h2>
            break;
        }


        return (
            <div>
            <h1>Shipping Label Maker </h1>
            
                {widget}
               
            </div>
        );
    }

    

}