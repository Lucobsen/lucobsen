import { useMediaQuery, useTheme } from '@mui/material';
import { useMemo, type ReactNode } from 'react';
import {
  ScreenSizeContext,
  type IScreenSizeContext,
} from './screen-size-context';

export const ScreenSizeContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { breakpoints } = useTheme();

  const isExtraLargeScreen = useMediaQuery(breakpoints.down('md'));
  const isLargeScreen = useMediaQuery(breakpoints.down('md'));
  const isMediumScreen = useMediaQuery(breakpoints.down('md'));
  const isSmallScreen = useMediaQuery(breakpoints.down('sm'));
  const isExtraSmallScreen = useMediaQuery(breakpoints.down('xs'));

  const value = useMemo<IScreenSizeContext>(
    () => ({
      isExtraLargeScreen,
      isLargeScreen,
      isMediumScreen,
      isExtraSmallScreen,
      isSmallScreen,
    }),
    [
      isExtraLargeScreen,
      isLargeScreen,
      isMediumScreen,
      isSmallScreen,
      isExtraSmallScreen,
    ]
  );

  return (
    <ScreenSizeContext.Provider value={value}>
      {children}
    </ScreenSizeContext.Provider>
  );
};
