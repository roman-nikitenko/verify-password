import React, { useState } from 'react';
import './App.css';
import {eye} from 'react-icons-kit/icomoon/eye';
import {eyeBlocked} from 'react-icons-kit/icomoon/eyeBlocked';
import { Icon } from 'react-icons-kit';
import { Input } from './components/Input';
import { ValidSection } from './components/ValidSection';

function App() {
  const [typeOfPassword, setTypeOfPassword] = useState(false);
  const [value, setValue] = useState('');

  return (
    <div className="password">
      <div className="password-box">
        <div className="wrapper">
          <label className="password-label" htmlFor="password">
            Password
            <Icon
              onClick={() => setTypeOfPassword(prevState => !prevState)}
              className="icon__eye"
              size={16}
              icon={typeOfPassword ? eye : eyeBlocked}
            />
          </label>
          <Input typeOfPassword={typeOfPassword} setValue={setValue} value={value}  />
        </div>

        <ValidSection value={value} />
      </div>
    </div>
  );
}

export default App;
