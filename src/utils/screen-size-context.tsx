import { createContext } from 'react';

export interface IScreenSizeContext {
  isExtraLargeScreen: boolean;
  isLargeScreen: boolean;
  isMediumScreen: boolean;
  isSmallScreen: boolean;
  isExtraSmallScreen: boolean;
}

export const ScreenSizeContext = createContext<IScreenSizeContext>({
  isExtraSmallScreen: false,
  isSmallScreen: false,
  isMediumScreen: false,
  isLargeScreen: false,
  isExtraLargeScreen: false,
});
