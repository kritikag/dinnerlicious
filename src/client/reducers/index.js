import { combineReducers } from 'redux';
import MenuReducer from './reducer_menulist';

const rootReducer = combineReducers({
  menu:MenuReducer
});

export default rootReducer;
