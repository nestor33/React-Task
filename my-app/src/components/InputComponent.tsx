import React, { useState } from "react";
import { Button, Paper, Grid } from "@material-ui/core";
import "./InputComponent.css";
import ResultComponent from "./ResultComponent";
import { type } from "os";

interface StateButtonState {
  name: string;
  uv: number;
}

function InputComponent() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [arr, setArr] = useState([]) as any;

  function addResultToArr(count: number) {
    let obj: StateButtonState = { name: "Page A", uv: count };
    setArr(arr.push(obj));
    console.log(arr);
    return arr;
  }

  return (
    <div>
      <div>
        <h1>
          It's custom calculator <br /> You should add two numbers and substract
          the second from the first
        </h1>
      </div>
      <div className="mainButton">
        <div className="stateButtonDiv">
          <Paper variant="outlined" />
          <h1>Number 1</h1>
          <br />
          <br />
          <div>
            <div className="StatePlusMinusButton">
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setCount1(count1 + 1);
                }}
              >
                +1
              </Button>
            </div>
            <div>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setCount1(count1 - 1);
                }}
              >
                -1
              </Button>
            </div>
          </div>
          <h1>{count1}</h1>
          <Paper variant="outlined" defaultValue={count1} />
        </div>

        <div className="stateButtonDiv">
          <Paper variant="outlined" />
          <h1>Number 2</h1>
          <br />
          <br />
          <div>
            <div className="StatePlusMinusButton">
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setCount2(count2 + 1);
                }}
              >
                +1
              </Button>
            </div>
            <div>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setCount2(count2 - 1);
                }}
              >
                -1
              </Button>
            </div>
          </div>

          <h1>{count2}</h1>
          <Paper variant="outlined" />
        </div>
      </div>
      <div className="mainButton">
        <Paper variant="outlined" defaultValue={count1} />
        <ResultComponent
          count1={count1}
          count2={count2}
          setCount1={setCount1}
          setCount2={setCount2}
          addResultToArr={addResultToArr}
        />
        <Paper variant="outlined" defaultValue={count1} />
      </div>
    </div>
  );
}

export default InputComponent;
