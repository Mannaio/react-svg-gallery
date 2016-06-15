import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import svgs from './svgs';
import comments from './comments';

const rootReducer = combineReducers({svgs, comments, routing: routerReducer });

export default rootReducer;
