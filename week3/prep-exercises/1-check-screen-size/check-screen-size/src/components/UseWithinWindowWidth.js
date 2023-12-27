import { useDebugValue } from 'react';
import { useWindowSize } from './UseWindowSize';

export function useWithinWindowWidth(minWidth, maxWidth) {
  const { width } = useWindowSize();
  const isWithin = width && width > minWidth && width < maxWidth;
  useDebugValue({ minWidth, maxWidth, isWithin });

  return isWithin;
}
