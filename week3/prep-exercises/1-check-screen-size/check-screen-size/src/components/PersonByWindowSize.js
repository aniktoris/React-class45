import React from 'react';
import { RandomHead, MITHI, DIANA, MIKONG } from './BigHead';
import { useWithinWindowWidth } from './UseWithinWindowWidth';

export const PersonByWindowSize = () => {
  const isBig = useWithinWindowWidth(1000, Infinity);
  const isMedium = useWithinWindowWidth(700, 999);
  const isSmall = useWithinWindowWidth(0, 699);

  let person = null;

  if (isBig) {
    person = <RandomHead person={MITHI} />;
  } else if (isMedium) {
    person = <RandomHead person={DIANA} />;
  } else if (isSmall) {
    person = <RandomHead person={MIKONG} />;
  }

  return <div>{person}</div>;
};
