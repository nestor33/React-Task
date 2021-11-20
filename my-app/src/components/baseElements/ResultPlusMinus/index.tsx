import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import './style.css';
import { LineChart, Line } from 'recharts';

interface PlusMinusComponentProps {
  count1: number;
  count2: number;
  setCount1: React.Dispatch<React.SetStateAction<number>>;
  setCount2: React.Dispatch<React.SetStateAction<number>>;
  addResultToArr(count: number): any;
}

function ResultPlusMinusComponent(props: PlusMinusComponentProps) {
  const [result, setResult] = useState(0);
  return (
    <div>
      <div className='mainDiv mainButton'>
        <div className='stateButtonDiv'>
          <Button
            variant='contained'
            color='primary'
            onClick={() => setResult(props.count1 + props.count2)}
          >
            Plus Button
            <br />+
          </Button>
          <h3>"Plus" to add two numbers</h3>
        </div>
        <div></div>

        <div className='stateButtonDiv'>
          <Button
            variant='contained'
            color='primary'
            onClick={() => setResult(props.count1 - props.count2)}
          >
            Minus Button
            <br />-
          </Button>
          <h3>
            "Minus" to substract the second <br /> from the first
          </h3>
        </div>
        <div></div>
      </div>
      <div>
        <h1 className='resultView'>{result}</h1>
      </div>

      <Button
        variant='contained'
        color='primary'
        onClick={() => {
          setResult(0);
          props.setCount1(0);
          props.setCount2(0);
        }}
      >
        Try Again <br />-
      </Button>
      <h3>"TRY AGAIN" to reset all</h3>
      <LineChart width={400} height={400} data={[]}>
        <Line type='monotone' dataKey='uv' stroke='#8884d8' />
      </LineChart>
    </div>
  );
}

export default ResultPlusMinusComponent;
