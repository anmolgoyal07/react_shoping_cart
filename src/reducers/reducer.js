import * as actionTypes from '../constants/Constants.jsx'

const shippingDetailsIntial = {

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

export const shippingDetail = (state={steps:1,detail:shippingDetailsIntial},action)=>{
    console.log('reducer called' +state )
    console.log('action' +action.type )
    switch(action.type){
        case actionTypes.SET_SHIPPING_DETAIL:
            return Object.assign({},state,{
                detail:action.data
            } );
        case actionTypes.SET_STEPS:
            return Object.assign({},state,{
                steps:action.data
            })
        default:
            return state;
    }
}
