import { Box, Button, Grid } from '@mui/material';
import { Link } from '@tanstack/react-router';
import { useContext, useRef, type RefObject } from 'react';
import { ScreenSizeContext } from '../../utils/screen-size-context';
import { useHeroNavTransition } from '../../utils/use-hero-nav-transition';

type CategoryButtonProps = {
  label: string;
};

const CategoryButton = ({ label }: CategoryButtonProps) => (
  <Button
    variant="text"
    disableRipple
    sx={{
      // White while floating over the hero photo, easing to the palette
      // green as the nav settles into the dark section below.
      color: ({ palette }) =>
        `color-mix(in srgb, ${palette.text.primary} calc(var(--nav-p) * 100%), #fff)`,
      // Counteracts the wrapper's scale-down so the floating nav reads larger
      // under the hero title without spreading the items further apart. The
      // floating size is capped against viewport width so the three labels
      // never collide with each other in the 3-across layout.
      fontSize:
        'calc(clamp(32px, 5vw, 68px) * (1 - var(--nav-p)) + 40px * var(--nav-p))',
      whiteSpace: 'nowrap',
      textShadow: '1px 1px 2px rgb(0 0 0 / calc(1 - var(--nav-p)))',
      transition: ({ transitions }) =>
        transitions.create(['transform'], {
          duration: transitions.duration.standard,
        }),

      ':hover': {
        transform: 'scale(1.05)',
        color: 'primary.light',
        backgroundColor: 'transparent',
      },
    }}
  >
    {label}
  </Button>
);

type NavItemsProps = {
  anchorRef?: RefObject<HTMLElement | null>;
};

export const NavItems = ({ anchorRef }: NavItemsProps) => {
  const { isSmallScreen, isMediumScreen } = useContext(ScreenSizeContext);
  const navRef = useRef<HTMLDivElement>(null);

  useHeroNavTransition(navRef, anchorRef);

  const borderSx = {
    borderRight: isSmallScreen ? 0 : 1,
    borderColor: 'rgb(255 255 255 / var(--nav-p))',
  };

  return (
    <Box
      ref={navRef}
      sx={{
        '--nav-p': '1',
        '--nav-offset': '0px',
        transform:
          'translateY(calc((var(--nav-p) - 1) * var(--nav-offset))) scale(calc(0.55 + 0.45 * var(--nav-p)))',
        transformOrigin: 'center top',
        willChange: 'transform',
      }}
    >
      <Grid container sx={{ rowGap: isMediumScreen ? 1 : 0 }}>
        <Grid size={{ md: 4, sm: 4, xs: 12 }} sx={borderSx}>
          <Link to="/" hash="dancer">
            <CategoryButton label="Dancer" />
          </Link>
        </Grid>

        <Grid size={{ md: 4, sm: 4, xs: 12 }} sx={borderSx}>
          <Link to="/" hash="musician">
            <CategoryButton label="Musician" />
          </Link>
        </Grid>

        <Grid size={{ md: 4, sm: 4, xs: 12 }}>
          <Link to="/" hash="streamer">
            <CategoryButton label="streamer" />
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};
