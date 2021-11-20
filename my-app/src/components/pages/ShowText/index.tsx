import React from 'react';
import ResultProcessorComponent from '../../baseElements/ResultProcessor';
import { Link } from 'react-router-dom';

function InputMultiplyComponent() {
  return (
    <div>
      <Link to='/' style={{ position: 'absolute', top: 0, left: 0 }}>
        Home Page
      </Link>
      <ResultProcessorComponent />
    </div>
  );
}

export default InputMultiplyComponent;
