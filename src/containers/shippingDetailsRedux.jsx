import * as stateActions from '../actions/actions'
import {connect} from 'react-redux'
import wizard from '../core/component/wizard/Wizard.jsx'
import {bindActionCreators} from 'redux'

const mapStateToProps = (state,props) => {
    return {
        shippingDetail:state.shippingDetail.detail,
        steps:state.shippingDetail.steps
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions:bindActionCreators(stateActions, dispatch),
    }
}

const ShippingDetailsRedux =connect(mapStateToProps, mapDispatchToProps)(wizard)
export default ShippingDetailsRedux