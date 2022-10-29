import React from 'react';
import classNames from 'classnames';
import { Button } from './styles';

interface Props {
  text: string;
  isSending: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function InputButton(props: Props): JSX.Element {
  const { text, isSending, ...rest } = props;
  const btnClass = classNames({
    sending: isSending,
    disabled: props.disabled
  });

  return (
    <Button className={btnClass} {...rest}>
      {text}
    </Button>
  );
}

export default InputButton;
