import {createStore} from 'redux'
import data from './data'

const initialstate={}
const reducer=(state,action) =>{
    return{food:data.fooditems};
};
const Store=createStore(reducer,initialstate);
export default Store;