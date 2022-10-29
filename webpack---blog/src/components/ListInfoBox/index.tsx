import React from 'react';
import ArrowTop from '../../../static/assets/icons/arrows/arrow-top.svg';
import Props from '../interfaces/Infos';
import InfoBox from './styles';
import { Text3 } from '../atoms/body';

function ListInfoBox(props: Props): JSX.Element {
  const { children, ...others } = props;
  return (
    <InfoBox {...others}>
      <ArrowTop />
      <Text3 as="p">{children}</Text3>
    </InfoBox>
  );
}

export default ListInfoBox;
