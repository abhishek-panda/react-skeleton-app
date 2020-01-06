import React from 'react';
import './style/app.css';
import _ from 'lodash';
import { PrimaryBtn, SecondaryBtn } from '@flipkart/react-ui-components'


const App = () => {
  console.log(_.isObject({}));
  return (
    <div>
      This is the sample App
      <PrimaryBtn >Ok</PrimaryBtn>
    </div>
  );
};

export default App;
