import React, {Component} from 'react';
import SenderAddress from './../../../features/shipping-label-maker/SenderAddress';
import RecieverAddress from './../../../features/shipping-label-maker/RecieverAddress';
import Weight from './../../../features/shipping-label-maker/Weight';
import ShippingOption from './../../../features/shipping-label-maker/ShippingOption';
import Confirm from './../../../features/shipping-label-maker/Confirm'
import  { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Wizard extends Component {

    steps = 1;
    constructor(props){
        super(props);
        this.state = {
            shippingDetail : this.props.shippingDetail,
            steps : this.props.steps
        }
        this.goBack = this.goBack.bind(this);
        this.goNext = this.goNext.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        
    }

    componentDidMount(){
        this.setState({shippingDetail:Object.assign({},this.props.shippingDetail)
        ,steps:this.props.steps
    })
    }

    onUpdate() {
        this.props.actions.setShippingDetail(this.state.shippingDetail)
        
     }

    goBack(data){
        if(this.state.steps===1){
            
            this.setState({shippingDetail:Object.assign({},this.state.shippingDetail,{from:data})});
           
        } else if(this.state.steps ===2){
            this.setState({shippingDetail:Object.assign({},this.state.shippingDetail,{to:data})})
           // this.shippingDetail.to = data;
        } else if (this.state.steps === 3){
            this.setState({shippingDetail:Object.assign({},this.state.shippingDetail,{weight:data})})
            //this.shippingDetail.weight = data;
        } else if (this.state.steps === 4){
            this.setState({shippingDetail:Object.assign({},this.state.shippingDetail,
                {
                    shippingOption:data.shippingOption ,
                    price:data.price
                }
            )});
           // this.shippingDetail.shippingOption = data.shippingOption;
           // this.shippingDetail.price = data.price;
        }
        this.onUpdate();
        this.setState({steps : this.state.steps-1},function(){
            this.props.actions.setSteps(this.state.steps);
        })
      //  this.steps = this.steps - 1;
       // this.setState( {steps:this.steps});
    }
    goNext(data){
        if(this.state.steps===1){
            this.setState({shippingDetail:Object.assign({},this.state.shippingDetail,{from:data})});
           
        } else if(this.state.steps ===2){
            this.setState({shippingDetail:Object.assign({},this.state.shippingDetail,{to:data})})

        } else if (this.state.steps === 3){
            this.setState({shippingDetail:Object.assign({},this.state.shippingDetail,{weight:data})})
            //this.shippingDetail.weight = data;
        } else if (this.state.steps === 4){
            this.setState({shippingDetail:Object.assign({},this.state.shippingDetail,
                {
                    shippingOption:data.shippingOption ,
                    price:data.price
                }
            )});
            //this.shippingDetail.shippingOption = data.shippingOption;
            //this.shippingDetail.price = data.price;
        }
        this.onUpdate();
        this.setState({steps : this.state.steps+1},function(){
            this.props.actions.setSteps(this.state.steps);
        })
        
    }

    render(){
        let widget ='';
        switch(this.state.steps){
            case 1:
            widget=<SenderAddress name={this.state.shippingDetail.from.name} street={this.state.shippingDetail.from.street}
            city={this.state.shippingDetail.from.city} state={this.state.shippingDetail.from.state} zip={this.state.shippingDetail.from.zip}
            goBack={this.goBack} goNext={this.goNext} steps={this.state.steps}></SenderAddress>;
            break;

            case 2:
            widget=<RecieverAddress
            name={this.state.shippingDetail.to.name} street={this.state.shippingDetail.to.street}
            city={this.state.shippingDetail.to.city} state={this.state.shippingDetail.to.state} zip={this.state.shippingDetail.to.zip}
            goBack={this.goBack} goNext={this.goNext} steps={this.state.steps}></RecieverAddress>;
            break;
            
            case 3:
            widget = <Weight weight={this.state.shippingDetail.weight}  goBack={this.goBack} goNext={this.goNext} steps={this.state.steps}>
            </Weight>
            break;

            case 4:
            widget = <ShippingOption shippingOption={this.state.shippingDetail.shippingOption} weight={this.state.shippingDetail.weight}  goBack={this.goBack} goNext={this.goNext} steps={this.state.steps}>
            </ShippingOption>
            break;

            case 5:
            widget = <Confirm shippingDetail={this.state.shippingDetail}  goBack={this.goBack} goNext={this.goNext}></Confirm>
            break;

            case 6:
            widget = <h2>Thanks, Your order has been placed succesfully</h2>
            break;
        }


        return (
            <div>
                <Link to="/">Home</Link>
            <h1>Shipping Label Maker </h1>
            
                {widget}
               
            </div>
        );
    }

    

}