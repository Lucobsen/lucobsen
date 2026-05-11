import { Button, Grid } from '@mui/material';
import { Link } from '@tanstack/react-router';
import { useContext } from 'react';
import { ScreenSizeContext } from '../../../utils/screen-size-context';

type CategoryButtonProps = {
  label: string;
};

const CategoryButton = ({ label }: CategoryButtonProps) => (
  <Button
    variant="text"
    disableRipple
    sx={{
      color: '#fff',
      fontSize: '40px',
      transition: ({ transitions }) =>
        transitions.create(['transform'], {
          duration: transitions.duration.standard,
        }),

      ':hover': { transform: 'scale(1.05)' },
    }}
  >
    {label}
  </Button>
);

export const NavItems = () => {
  const { isSmallScreen, isMediumScreen } = useContext(ScreenSizeContext);

  return (
    <Grid container sx={{ rowGap: isMediumScreen ? 1 : 0 }}>
      <Grid
        size={{ md: 3, sm: 6, xs: 12 }}
        sx={{ borderRight: isSmallScreen ? 0 : 1, borderColor: '#fff' }}
      >
        <Link to="/" hash="dancer">
          <CategoryButton label="Dancer" />
        </Link>
      </Grid>

      <Grid
        size={{ md: 3, sm: 6, xs: 12 }}
        sx={{ borderRight: isMediumScreen ? 0 : 1, borderColor: '#fff' }}
      >
        <Link to="/" hash="developer">
          <CategoryButton label="Developer" />
        </Link>
      </Grid>

      <Grid
        size={{ md: 3, sm: 6, xs: 12 }}
        sx={{ borderRight: isSmallScreen ? 0 : 1, borderColor: '#fff' }}
      >
        <Link to="/" hash="musician">
          <CategoryButton label="Musician" />
        </Link>
      </Grid>

      <Grid size={{ md: 3, sm: 6, xs: 12 }}>
        <Link to="/" hash="photographer">
          <CategoryButton label="Photographer" />
        </Link>
      </Grid>
    </Grid>
  );
};
