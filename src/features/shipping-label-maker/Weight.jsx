import React from 'react';

export default class Weight extends React.Component {

    constructor(props){
        super(props);
        this.state={
            weight:this.props.weight,
        }

        this.callNext = this.callNext.bind(this);
        this.callBack = this.callBack.bind(this);
    }

    callNext(){
        this.props.goNext(this.state.weight);
    }

    callBack(){
        this.props.goBack(this.state.weight);
    }

    render(){
        return (
            <div>
            <h3>Enter weight </h3>
            Name : <input type="number" name="weight"
            value={this.state.weight} onChange={(e) => {this.setState({weight: e.target.value})}} />
            <br/>
            <button type='button'  value='cancel' onClick= {this.callBack}  disabled={ this.props.steps === 1  }> Previous </button>
            <button type='button'  value='next' onClick= {this.callNext}  disabled={ this.props.steps === 4  }> Next </button>
            </div>
            
            
        )
    }
}