import React from 'react';
import {
  useDesktopQuery,
  useTabletQuery,
  useMobileQuery,
} from '../../utils/useDeviceSizes';

interface IDevices {
  children: JSX.Element;
}

const Desktop = ({ children }: IDevices): JSX.Element | null => {
  const isDesktop = useDesktopQuery();

  return isDesktop ? children : null;
};

const Tablet = ({ children }: IDevices): JSX.Element | null => {
  const isTablet = useTabletQuery();

  return isTablet ? children : null;
};

const Mobile = ({ children }: IDevices): JSX.Element | null => {
  const isMobile = useMobileQuery();

  return isMobile ? children : null;
};

export { Desktop, Tablet, Mobile };
