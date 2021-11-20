import { combineReducers } from '@reduxjs/toolkit';
import numberProcessorSlice from './slices/numberProcessor.slice';

const rootReducer = combineReducers({ numberProcessorSlice });

export default rootReducer;
