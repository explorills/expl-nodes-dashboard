// material-ui
import { useColorScheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';

// project imports
import { ThemeMode } from 'config';

const StyledPre = styled('pre')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100],
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  overflow: 'auto',
  '& code': {
    fontFamily: 'monospace',
    fontSize: '0.875rem'
  }
}));

// ==============================|| CODE HIGHLIGHTER ||============================== //

export default function SyntaxHighlight({ children, ...others }: { children: string }) {
  return (
    <StyledPre {...others}>
      <code>{children}</code>
    </StyledPre>
  );
}
