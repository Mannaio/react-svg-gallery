import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import svgs from './svgs';
import comments from './comments';
import charts from './charts';
import nums from './nums';

const rootReducer = combineReducers({svgs, comments, charts, nums, routing: routerReducer });

export default rootReducer;
