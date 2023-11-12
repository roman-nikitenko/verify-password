import React, { useState } from 'react';
import './App.css';
import classNames from 'classnames';
import {eye} from 'react-icons-kit/icomoon/eye';
import {eyeBlocked} from 'react-icons-kit/icomoon/eyeBlocked';
import { Icon } from 'react-icons-kit';

function App() {
  const [easy, setEasy] = useState(false);
  const [medium, setMedium] = useState(false);
  const [strong, setStrong] = useState(false);
  const [short, setShort] = useState(false);
  const [typeOfPassword, setTypeOfPassword] = useState(false);

  const showPassword = () => {
    setTypeOfPassword(prevState => !prevState);
  }

  const changeHandler = (value: string) => {
    const PWD_LETTER:  RegExp = new RegExp(/^(?=.*[a-z])/);
    const PWD_SYMBOL:  RegExp = new RegExp(/^(?=.*[!@#$%])/);
    const PWD_NUMBER:  RegExp = new RegExp(/^(?=.*[0-9])/);
    let lowerValue = value.toLowerCase();

    const letter = PWD_LETTER.test(lowerValue);
    const symbol = PWD_SYMBOL.test(lowerValue);
    const number = PWD_NUMBER.test(lowerValue);

    setShort((lowerValue.length < 8));

    setEasy(letter || symbol || number);
    setMedium((letter && symbol) || (letter && number) || (symbol && number) );
    setStrong(letter && symbol && number);
  }

  return (
    <div className="password">
      <div className="password-box">
        <div className="wrapper">
          <label className="password-label" htmlFor="password">
            Password

            {typeOfPassword ? (
              <Icon onClick={showPassword} className="icon__eye" size={16} icon={eye} />
            ) : (
              <Icon onClick={showPassword} className="icon__eye" size={16} icon={eyeBlocked} />
            )}

          </label>
          <input
            onChange={(e) => {changeHandler(e.target.value)}}
            className="input"
            id="password"
            type={typeOfPassword ? 'text' : 'password'}
          />

        </div>

        <div className="valid-section">
          <p className={classNames({
            'green' : strong,
            'red' : short || easy,
            'yellow': medium,
          })}>Easy</p>
          <p className={classNames({
            'red' : short,
            'yellow': medium,
            'green' : strong,

          })}>Medium</p>
          <p className={classNames({
            'red' : short,
            'green': strong,
          })}>Strong</p>
        </div>
      </div>
    </div>
  );
}

export default App;
