import React from 'react';

export default class SenderAddress extends React.Component {

    constructor(props){
        super(props);
        this.state={
            name:this.props.name,
            street:this.props.street,
            city:this.props.city,
            state:this.props.state,
            zip:this.props.zip,
        }

        this.callNext = this.callNext.bind(this);
    }

    callNext(){
        this.props.goNext(this.state);
    }

   

    render(){
        return (
            <div>
            <h3>Enter the sender's address </h3>
            Name : <input type="text" name="name"
            value={this.state.name} onChange={(e) => {this.setState({name: e.target.value})}}
            
            /><br/>
            Street : <input type="text" name="street"
            value={this.state.street} onChange={(e) => {this.setState({street: e.target.value})}}
            /><br/>
            City: <input type="text" name="city"
            value={this.state.city} onChange={(e) => {this.setState({city: e.target.value})}}
            /> State: <input type="text" name="state"
            value={this.state.state} onChange={(e) => {this.setState({state: e.target.value})}}/> 
            Zip:<input type="text" name="zip"
            value={this.state.zip} onChange={(e) => {this.setState({zip: e.target.value})}}/>  <br/>

            <button type='button'  value='cancel' onClick= {this.props.goBack}  disabled={ this.props.steps === 1  }> Previous </button>
             <button type='button'  value='next' onClick= {this.callNext}  disabled={ this.props.steps === 4  }> Next </button>
             
            </div>
             
        );
    }
}