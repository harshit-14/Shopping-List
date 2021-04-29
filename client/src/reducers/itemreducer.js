// reducer store the state
// here we have action performed on the state


import { GET_ITEMS,ADD_ITEM,DELETE_ITEM,ITEMS_LOADING} from '../actions/type';

const initialstate = {
    items: [],
    loading: false
}

//action is an object which has a type property

export default function(state=initialstate , action){
 switch(action.type){
     case GET_ITEMS:
           console.log("kharbanda")
           console.log(action.payload)
         return {
             ...state,
             items:action.payload,
             loading: false
         }
     case DELETE_ITEM:
         return {
             ...state,
             items : state.items.filter(item => item._id !== action.payload)
         }    
     case ADD_ITEM: 
     return {
         ...state,
         items : [action.payload, ...state.items]       //making copy of state
     }   
     case ITEMS_LOADING:
             return {
                 ...state,
                 loading: true
             } 
         default:
             return state
 }
}