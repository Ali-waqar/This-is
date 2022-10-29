import React from 'react';
import { Checkbox } from './styles';
import { Text5 } from '../../atoms/body';

interface Props {
  id: string;
  className?: string;
  children: React.ReactFragment;
  handleOnChange: (checked: boolean) => void;
}

function InputCheckbox(props: Props): JSX.Element {
  const { id, children, className = '', handleOnChange } = props;

  return (
    <Checkbox className={className}>
      <input
        id={id}
        type="checkbox"
        value="yes"
        onChange={e => handleOnChange(e.currentTarget.checked)}
      />
      <Text5 as="label" htmlFor={id}>
        {children}
      </Text5>
    </Checkbox>
  );
}

export default InputCheckbox;
