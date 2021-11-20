import { useSelector } from 'react-redux';
import { INumberProcessor } from './../reducers/slices/numberProcessor.slice';

export const useNumberProcessor = () => {
  return useSelector(
    (state: { numberProcessorSlice: INumberProcessor }) =>
      state.numberProcessorSlice
  );
};
