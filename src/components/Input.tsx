import React from 'react';

type Prop = {
  typeOfPassword: boolean,
  value: string,
  setValue: (e: string) => void,
}

export const Input: React.FC<Prop> = ({ typeOfPassword, value, setValue }) => {
  return (
    <input
      value={value}
      onChange={(e) => {setValue(e.target.value)}}
      className="input"
      id="password"
      type={typeOfPassword ? 'text' : 'password'}
    />
  );
};
