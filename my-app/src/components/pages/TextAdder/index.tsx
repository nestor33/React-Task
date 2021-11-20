import React, { useState } from 'react';
import { Button, Paper } from '@material-ui/core';
import '.';
import ResultPlusMinusComponent from '../../baseElements/ResultPlusMinus';
import { Link } from 'react-router-dom';

interface StateButtonState {
  name: string;
  uv: number;
}

function InputPlusMinusComponent() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [arr, setArr] = useState([]) as any;

  function addResultToArr(count: number) {
    let obj: StateButtonState = { name: 'Page A', uv: count };
    setArr(arr.push(obj));
    console.log(arr);
    return arr;
  }

  return (
    <div>
      <Link to='/page2' style={{ position: 'absolute', top: 0, left: 0 }}>
        Page 2
      </Link>
      <div>
        <h1>
          It's custom calculator <br /> You should add two numbers and substract
          the second from the first
        </h1>
      </div>
      <div className='mainButton'>
        <div className='stateButtonDiv'>
          <Paper variant='outlined' />
          <h1>Number 1</h1>
          <br />
          <br />
          <div
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              margin: '30px',
            }}
          >
            <div style={{ marginRight: '20px' }}>
              <Button
                variant='contained'
                color='primary'
                onClick={() => {
                  setCount1(count1 + 1);
                }}
              >
                +1
              </Button>
            </div>
            <div>
              <Button
                variant='contained'
                color='primary'
                onClick={() => {
                  setCount1(count1 - 1);
                }}
              >
                -1
              </Button>
            </div>
          </div>
          <h1>{count1}</h1>
          <Paper variant='outlined' defaultValue={count1} />
        </div>

        <div className='stateButtonDiv'>
          <Paper variant='outlined' />
          <h1>Number 2</h1>
          <br />
          <br />
          <div
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              margin: '30px',
            }}
          >
            <div style={{ marginRight: '20px' }}>
              <Button
                variant='contained'
                color='primary'
                onClick={() => {
                  setCount2(count2 + 1);
                }}
              >
                +1
              </Button>
            </div>
            <div>
              <Button
                variant='contained'
                color='primary'
                onClick={() => {
                  setCount2(count2 - 1);
                }}
              >
                -1
              </Button>
            </div>
          </div>

          <h1>{count2}</h1>
          <Paper variant='outlined' />
        </div>
      </div>
      <div className='mainButton'>
        <Paper variant='outlined' defaultValue={count1} />
        <ResultPlusMinusComponent
          count1={count1}
          count2={count2}
          setCount1={setCount1}
          setCount2={setCount2}
          addResultToArr={addResultToArr}
        />
        <Paper variant='outlined' defaultValue={count1} />
      </div>
    </div>
  );
}

export default InputPlusMinusComponent;
