import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import svgs from './svgs';
import comments from './comments';
import charts from './charts';

const rootReducer = combineReducers({svgs, comments, charts, routing: routerReducer });

export default rootReducer;
