import { createStore, combineReducers } from 'redux';
import countreducer from '../reducers/countreducer';
const rootReducer = combineReducers(
{ count: countReducer }
);
const configurestore = () => {
return createstore(rootReducer);
}
export default configurestore;