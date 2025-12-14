// material-ui
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

// project imports
import DrawerHeaderStyled from './DrawerHeaderStyled';
import Logo from 'components/logo';
import PoweredByExplNodes from 'components/PoweredByExplNodes';

import useConfig from 'hooks/useConfig';
import { MenuOrientation } from 'config';

interface Props {
  open: boolean;
}

// ==============================|| DRAWER HEADER ||============================== //

export default function DrawerHeader({ open }: Props) {
  const theme = useTheme();
  const downLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  const { state } = useConfig();
  const isHorizontal = state.menuOrientation === MenuOrientation.HORIZONTAL && !downLG;

  return (
    <DrawerHeaderStyled
      open={open}
      sx={{
        minHeight: isHorizontal ? 'unset' : '60px',
        width: isHorizontal ? { xs: '100%', lg: '424px' } : 'initial',
        paddingTop: isHorizontal ? { xs: '10px', lg: '0' } : '8px',
        paddingBottom: isHorizontal ? { xs: '18px', lg: '0' } : '8px',
        paddingLeft: isHorizontal ? { xs: '24px', lg: '0' } : open ? '24px' : 0
      }}
    >
      <Stack direction="row" spacing={1.5} alignItems="center">
        <Logo isIcon={!open} sx={{ width: open ? 'auto' : 35, height: 35 }} />
        {open && (
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Typography 
              variant="h4" 
              sx={{ 
                fontWeight: 600, 
                whiteSpace: 'nowrap',
                lineHeight: 1.2,
                fontSize: '1.5rem', // increased by 6px from 1.25rem
              }}
            >
              <Box component="span" sx={{ color: 'white' }}>ONE </Box>
              <Box component="span" sx={{ color: 'primary.main' }}>network</Box>
            </Typography>
            <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
              <PoweredByExplNodes size="md" />
            </Box>
          </Stack>
        )}
      </Stack>
    </DrawerHeaderStyled>
  );
}
