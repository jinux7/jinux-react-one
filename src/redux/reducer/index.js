import { combineReducers } from 'redux';
const listReducer = (state = [], action)=>{
  switch(action.type){
    case 'ADD_ITEM':
      return [
          ...state, 
          {
            item: action.newItem, //列表项内容
            ID: state.length, //列表项ID
            del: false //列表项是否已划掉
          }
      ];
      break;
    case 'TOGGLE_ITEM':
      return state.map((item)=>{
          return Object.assign({},item,{
            del: action.changeID == item.ID ? !item.del : item.del
          });
        });
      break;
    default:
      return state;
  }
}

const count = (state = 0, action)=>{
  switch(action.type){
    case 'ADD_COUNT':
      return state++;
      break;
    default:
      return state;
  }
}

const breadcrumb = (state = [{'href':'/home','name':'home'},{'href':'/page1','name':'page1'}], action)=>{
  switch(action.type){
    case 'BREADCRUMB':
      state = action.data;
      return state;
    default:
      return state;
  }
}
export default combineReducers({listReducer, count, breadcrumb});