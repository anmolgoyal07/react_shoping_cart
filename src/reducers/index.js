import { combineReducers } from 'redux'
import { shippingDetail } from './reducer'

const shippingLabelMakerReducer = combineReducers({
  shippingDetail,
})

export default shippingLabelMakerReducer
