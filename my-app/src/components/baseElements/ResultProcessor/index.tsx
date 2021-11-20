import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNumberProcessor } from '../../../store/selectors/useNumberProcessor';
import { updateStoreNumber } from './../../../store/reducers/slices/numberProcessor.slice';

function ResultProcessorComponent() {
  const dispatch = useDispatch();
  const { storedNumber } = useNumberProcessor();
  const [data, setData] = useState('Input text and see it');
  function onFormSubmit(event: FormEvent) {
    event.preventDefault();
    dispatch(updateStoreNumber(data));
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          type='text'
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setData(event.target.value)
          }
        />
      </form>
      <br /> <br /> <br />
      <h2>{storedNumber}</h2>
    </div>
  );
}

export default ResultProcessorComponent;
