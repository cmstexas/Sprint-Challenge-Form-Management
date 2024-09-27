import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Form from './components/Form';
import { render, fireEvent  } from '@testing-library/react';
import "@testing-library/react/cleanup-after-each";
import '@testing-library/jest-dom/extend-expect'


// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });


describe ('App />', () => {
  it('runs the app properly', () => {
    render (<App />);

  });

  it('shows user data', () => {
    const { getbyText } = render(<App />);
    getbyText(/users/i);

  });

  it('shows the Recipe', () => {
    const { getbyText } = render(<App />);
    getbyText(/Recipes/i);

  });

  it('shows the RegForm', () => {
    const { getbyText } = render(<App />);
    getbyText(/RegForm/i);

  });

  it('shows the RegForm', () => {
    const { getByPlaceholderText } = render(<App />);
    getByPlaceholderText (/Username/i);
    getByPlaceholderText (/Password/i);

  });

  it('should update the inputs when the user types in them', () => {
    const { getByPlaceholderText } = render(<App />);
    const nameInput = getByPlaceholderText (/Username/i);
    const passwordInput = getByPlaceholderText (/Password/i);

    fireEvent.change(nameInput, { target: {value: name} });
    fireEvent.change(passwordInput, { target: {value: password} });
    expect(button.disabled).toEqual(false);

  });


  it('shows the Footer ', () => {
    const { getbyText } = render(<App />);
    getbyText(/Footer/i);

  });

});


describe ("<Form />", () => {
  it('shows form properly', () => {
    renders (<Form />);
  });

  it("registers submit click", () => {
    const click = false;
    <Form submit={() => (click = true)} />
  });

  });