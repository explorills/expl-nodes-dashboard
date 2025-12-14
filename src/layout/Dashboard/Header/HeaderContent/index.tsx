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
  const below580 = useMediaQuery('(max-width:580px)');
  const below590 = useMediaQuery('(max-width:590px)');
  const below625 = useMediaQuery('(max-width:625px)');

  const megaMenu = useMemo(() => <MegaMenuSection />, []);

  return (
    <>
      {state.menuOrientation === MenuOrientation.HORIZONTAL && !downLG && <DrawerHeader open={true} />}
      {downLG && (
        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ ml: 1 }}>
          <Logo sx={{ width: 46, height: 46 }} />
          <Stack direction={below580 ? "column" : "row"} spacing={below580 ? 0.25 : 1} alignItems={below580 ? "flex-start" : "center"}>
            <Typography 
              sx={{ 
                fontWeight: 600, 
                fontSize: '1.5rem',
                whiteSpace: 'nowrap',
                lineHeight: 1.2,
              }}
            >
              <Box component="span" sx={{ color: 'white' }}>ONE </Box>
              <Box component="span" sx={{ color: 'primary.main' }}>network</Box>
            </Typography>
            <PoweredByExplNodes size="sm" />
          </Stack>
        </Stack>
      )}
      {/* Search bar - visible on all screens except when moved to right side below 580px */}
      {!below580 && <Search />}
      {/* Spacer - only when search is on left */}
      {!below580 && <Box sx={{ width: 1, ml: 1 }} />}

      <Stack direction="row" sx={{ alignItems: 'center', gap: 0.75 }}>
        {/* Search bar moves to right side below 580px */}
        {below580 && <Search />}
        {/* Resources (MegaMenu) - hidden below 590px */}
        {!downLG && megaMenu}
        {downLG && !below590 && megaMenu}
        {/* FullScreen - hidden below 625px */}
        {!downLG && <FullScreen />}
        {downLG && !below625 && <FullScreen />}
      </Stack>
    </>
  );
}
