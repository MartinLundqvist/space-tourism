import { useMediaQuery } from 'react-responsive';

const useDesktopQuery = () => useMediaQuery({ minWidth: 992 });
const useTabletQuery = () => useMediaQuery({ minWidth: 768, maxWidth: 991 });
const useMobileQuery = () => useMediaQuery({ maxWidth: 767 });

export { useDesktopQuery, useTabletQuery, useMobileQuery };
