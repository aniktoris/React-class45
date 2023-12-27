import React from 'react';
import { BigHead } from '@bigheads/core';

export const MITHI = {
  body: 'breasts',
  circleColor: 'blue',
  eyebrows: 'angry',
  eyes: 'wink',
  facialHair: 'none',
  hair: 'short',
  hairColor: 'black',
  lashes: 'false',
  lipColor: 'purple',
  mask: false,
  faceMask: false,
  mouth: 'serious',
  skinTone: 'brown',
};

export const DIANA = {
  body: 'breasts',
  circleColor: 'blue',
  eyebrows: 'angry',
  eyes: 'simple',
  facialHair: 'none2',
  hair: 'long',
  hairColor: 'pink',
  lashes: 'true',
  lipColor: 'purple',
  mask: false,
  faceMask: false,
  mouth: 'serious',
  skinTone: 'light',
};

export const MIKONG = {
  body: 'chest',
  circleColor: 'blue',
  eyebrows: 'angry',
  eyes: 'simple',
  facialHair: 'mediumBeard',
  hair: 'afro',
  hairColor: 'brown',
  lashes: 'false',
  lipColor: 'purple',
  mask: 'false',
  faceMask: false,
  mouth: 'open',
  skinTone: 'yellow',
};

export const RandomHead = ({ person }) => <BigHead {...person} />;
