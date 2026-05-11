import { Button, Stack, Typography } from '@mui/material';
import { Link } from '@tanstack/react-router';
import { useContext, type JSX } from 'react';
import { ScreenSizeContext } from '../../../utils/screen-size-context';
import { Dots } from '../../Dots';

type HomeSectionProps = {
  title: string;
  id: string;
  children: JSX.Element;
  link: string;
};

export const HomeSection = ({
  title,
  id,
  children,
  link,
}: HomeSectionProps) => {
  const { isSmallScreen } = useContext(ScreenSizeContext);

  return (
    <section id={id} style={{ scrollMarginTop: 30 }}>
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
        <Link
          to="/"
          hash={id}
          style={{ color: '#fff', textDecoration: 'none' }}
        >
          <Typography variant={isSmallScreen ? 'h4' : 'h2'}>{title}</Typography>
        </Link>

        {children}

        <Link to={link} style={{ textDecoration: 'none' }}>
          <Stack
            direction="row"
            sx={{ alignItems: 'baseline', justifyContent: 'center' }}
          >
            <Button
              disableRipple
              variant="text"
              sx={{ color: '#fff', fontSize: '30px' }}
            >
              See more
            </Button>
            <Dots />
          </Stack>
        </Link>
      </Stack>
    </section>
  );
};
