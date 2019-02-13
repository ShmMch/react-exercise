import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let app;

beforeEach(() => {
  app = document.createElement('app');
  document.body.appendChild(app);
});

afterEach(() => {
  document.body.removeChild(app);
  app = null;
});

it('renders without crashing', () => {
  ReactDOM.render(<App />, app);
  ReactDOM.unmountComponentAtNode(app);
});

//Add test to 

describe('input',()=>{
  it('restricts invalid characters', () => {
    const input = app.querySelectorAll('input');
    input.ref.value = 'abc';
    expect(input.textContent).toBe('abc');
    input.ref.value = '@#';
    expect(input.textContent).toBe('abc');
  });


  it('changes the state bg to input value', () => {
  });
});

describe('output',()=>{
  it('changes div bg color to state bg property', () => {
    
  });
})
