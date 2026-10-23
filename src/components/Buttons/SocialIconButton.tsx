import { Link, Typography } from '@mui/material';
import { useContext, type JSX } from 'react';
import { ScreenSizeContext } from '../../utils/screen-size-context';

type SocialIconButtonProps = {
  text: string;
  link: string;
  children: JSX.Element;
};

export const SocialIconButton = ({
  text,
  link,
  children,
}: SocialIconButtonProps) => {
  const { isSmallScreen } = useContext(ScreenSizeContext);

  return (
    <Link
      sx={{
        gap: 1,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
      }}
      underline="none"
      target="_blank"
      href={link}
    >
      {children}

      <Typography sx={{ color: '#000' }} variant={isSmallScreen ? 'h6' : 'h5'}>
        {text}
      </Typography>
    </Link>
  );
};
