import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


describe ('App />', () => {
  it('runs the app properly', () => {
    render (<App />);

  });

  it('shows user data', () => {
    const { getbyText } = render(<App />);
    getbyText(/users/i);

  });

})


describe ("<Form />", () => {
  it('shows form properly', () => {
    renders (<Form />);
  });

  it("registers submit click", () => {
    const click = false;
    <Form submit={() => (click = true)} />
  });

  });