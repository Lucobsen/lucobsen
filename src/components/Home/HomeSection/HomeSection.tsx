import { Stack, Typography } from '@mui/material';
import { useContext, type JSX } from 'react';
import { ScreenSizeContext } from '../../../utils/screen-size-context';

type HomeSectionProps = {
  title: string;
  children: JSX.Element;
};

export const HomeSection = ({ title, children }: HomeSectionProps) => {
  const { isSmallScreen } = useContext(ScreenSizeContext);

  return (
    <section>
      <Stack
        sx={{
          textAlign: 'center',
          gap: 6,
          justifySelf: 'center',
          width: '85%',
          maxWidth: 1200,
          margin: '80px 0',
        }}
      >
        <Typography variant={isSmallScreen ? 'h4' : 'h2'}>{title}</Typography>

        {children}
      </Stack>
    </section>
  );
};
