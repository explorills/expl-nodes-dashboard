// material-ui
import { useColorScheme, useTheme } from '@mui/material/styles';

// project imports
import { ThemeMode } from 'config';
import explLogo from '/logo.png';

// ==============================|| LOGO SVG ||============================== //

export default function LogoMain({ reverse }: { reverse?: boolean }) {
  const theme = useTheme();
  const { colorScheme } = useColorScheme();

  return (
    <img src={explLogo} alt="EXPL.network" height="35" />
  );
}


