import { createSlice } from '@reduxjs/toolkit';

export interface INumberProcessor {
  storedNumber: string;
}

const initialState: INumberProcessor = {
  storedNumber: 'Input text, press Enter and see it here',
};

const numberProcessorSlice = createSlice({
  name: 'numberProcessorSlice',
  initialState,
  reducers: {
    updateStoreNumber: (state, { payload }) => {
      state.storedNumber = payload;
    },
  },
});

export const { updateStoreNumber } = numberProcessorSlice.actions;
export default numberProcessorSlice.reducer;
