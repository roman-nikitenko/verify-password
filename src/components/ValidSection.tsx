import React from 'react';
import classNames from 'classnames';
import useStrong from '../servicec/useStrong';

type Prop = {
  value: string,
}


export const ValidSection: React.FC<Prop> = ({  value}) => {
  const { short, easy, medium, strong } = useStrong(value)

  return (
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
  );
};
