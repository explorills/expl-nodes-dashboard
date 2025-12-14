import { useMemo } from 'react';

// material-ui
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// project imports
import Search from './Search';
import FullScreen from './FullScreen';
import MegaMenuSection from './MegaMenuSection';
import Logo from 'components/logo';
import PoweredByExplNodes from 'components/PoweredByExplNodes';

import useConfig from 'hooks/useConfig';
import { MenuOrientation } from 'config';
import DrawerHeader from 'layout/Dashboard/Drawer/DrawerHeader';

// ==============================|| HEADER - CONTENT ||============================== //

export default function HeaderContent() {
  const { state } = useConfig();

  const downLG = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));

  const megaMenu = useMemo(() => <MegaMenuSection />, []);

  return (
    <>
      {state.menuOrientation === MenuOrientation.HORIZONTAL && !downLG && <DrawerHeader open={true} />}
      {downLG && (
        <Stack direction="row" spacing={1} alignItems="center" sx={{ ml: 1 }}>
          <Logo sx={{ width: 35, height: 35 }} />
          <Stack spacing={0.25}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 600, 
                color: 'white',
                fontSize: '1rem',
                whiteSpace: 'nowrap',
                lineHeight: 1.2,
              }}
            >
              ONE network
            </Typography>
            <PoweredByExplNodes size="sm" />
          </Stack>
        </Stack>
      )}
      {!downLG && (
        <>
          <Search />
        </>
      )}
      <Box sx={{ width: 1, ml: 1 }} />

      <Stack direction="row" sx={{ alignItems: 'center', gap: 0.75 }}>
        {downLG && <Search />}
        {!downLG && megaMenu}
        {!downLG && <FullScreen />}
      </Stack>
    </>
  );
}
