import React, {useState} from 'react';
import * as all from './module';

/**
 * Describes syntaxTests
 * @param {number} prop1
 * @param {string} prop2
 */
function syntaxTests({prop1, prop2, ...rest}) {
  const boolean = true || false;
  const number = Infinity || NaN || 1e10 || 100000;
  const string = 'string';
  const template = `template literal ${prop1}`;
  const nil = null || undefined;
  const regex = /(regex.+)|[a-zA-Z]/gi;
  const object = {type: {boolean}, value: number};
  const array = [boolean, number, string, nil];
  const deepPropertyAccess = object.type.boolean;
  const special = this || arguments;
  const fnCall = alert(string);
  const jsx = (
    <Component static="value" dynamic={string}>
      <div>Children: {string}</div>
    </Component>
  );

  let reassignable = null;
  if (reassignable) {
    reassignable = false;
  }

  return reassignable;
}

class App extends React.Component {
  constructor() {}
  @decorator
  method() {
    return this.state.hello;
  }
}

export default syntaxTests;
