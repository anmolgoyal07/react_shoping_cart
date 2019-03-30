import React from 'react'
import ShippingDetailsRedux from '../containers/shippingDetailsRedux.jsx'
import HomeContainer from '../home/home.jsx'
import { Route, Switch} from 'react-router-dom'

/*
export default class Router extends React.Component {

    render(){
        return (
            <div>
                <switch>
                    <Route exact path='/' component={HomeContainer}/>
                    <Route exact path='/shippingDetail' component={ShippingDetailsRedux}/>
                    <Route   component={HomeContainer}/>
                </switch>
            </div>
        )
    }
}
*/

const Routes = () => (
    <div>
        <Switch>
            <Route exact path='/' component={ HomeContainer } />
            <Route exact path='/shippingDetail' component={ ShippingDetailsRedux }/>
            <Route component={HomeContainer}/>
        </Switch>
    </div>
)
export default Routes