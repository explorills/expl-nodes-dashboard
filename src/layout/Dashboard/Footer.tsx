// material-ui
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Theme } from '@mui/material/styles';

// project imports
import PoweredByExplNodes from 'components/PoweredByExplNodes';

// assets
import DiscordOutlined from '@ant-design/icons/DiscordOutlined';
import GithubOutlined from '@ant-design/icons/GithubOutlined';
import TwitterOutlined from '@ant-design/icons/TwitterOutlined';

export default function Footer() {
  // Custom 580px breakpoint to match header transformation
  const isMobile = useMediaQuery('(max-width:580px)');

  return (
    <Box
      component="footer"
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1200,
        bgcolor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
        px: 2,
        py: 0.75,
        minHeight: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {/* Left: Copyright */}
      <Typography variant="caption" color="text.secondary" sx={{ whiteSpace: 'nowrap' }}>
        <Link 
          href="https://expl.one" 
          target="_blank" 
          rel="noopener noreferrer"
          underline="always"
          sx={{ color: 'primary.main', fontWeight: 500 }}
        >
          EXPL.ONE
        </Link>
        {' '}© 2025 ALL RIGHTS RESERVED
      </Typography>

      {/* Center: Social Icons (hidden on mobile when space is tight) */}
      <Stack 
        direction="row" 
        spacing={0.5} 
        sx={{ 
          alignItems: 'center',
          display: isMobile ? 'none' : 'flex',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <IconButton
          component="a"
          href="https://discord.com/invite/RetTCVq7tJ"
          target="_blank"
          rel="noopener noreferrer"
          size="small"
          color="secondary"
          sx={{ p: 0.5, '&:hover': { color: 'primary.main' } }}
          aria-label="Discord"
        >
          <DiscordOutlined style={{ fontSize: '1rem' }} />
        </IconButton>
        <IconButton
          component="a"
          href="https://x.com/explorills_main"
          target="_blank"
          rel="noopener noreferrer"
          size="small"
          color="secondary"
          sx={{ p: 0.5, '&:hover': { color: 'primary.main' } }}
          aria-label="Twitter/X"
        >
          <TwitterOutlined style={{ fontSize: '1rem' }} />
        </IconButton>
        <IconButton
          component="a"
          href="https://github.com/explorills"
          target="_blank"
          rel="noopener noreferrer"
          size="small"
          color="secondary"
          sx={{ p: 0.5, '&:hover': { color: 'primary.main' } }}
          aria-label="GitHub"
        >
          <GithubOutlined style={{ fontSize: '1rem' }} />
        </IconButton>
      </Stack>

      {/* Right: Social on mobile, PoweredBy on desktop */}
      {isMobile ? (
        <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center' }}>
          <IconButton
            component="a"
            href="https://discord.com/invite/RetTCVq7tJ"
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            color="secondary"
            sx={{ p: 0.5, '&:hover': { color: 'primary.main' } }}
            aria-label="Discord"
          >
            <DiscordOutlined style={{ fontSize: '1rem' }} />
          </IconButton>
          <IconButton
            component="a"
            href="https://x.com/explorills_main"
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            color="secondary"
            sx={{ p: 0.5, '&:hover': { color: 'primary.main' } }}
            aria-label="Twitter/X"
          >
            <TwitterOutlined style={{ fontSize: '1rem' }} />
          </IconButton>
          <IconButton
            component="a"
            href="https://github.com/explorills"
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            color="secondary"
            sx={{ p: 0.5, '&:hover': { color: 'primary.main' } }}
            aria-label="GitHub"
          >
            <GithubOutlined style={{ fontSize: '1rem' }} />
          </IconButton>
        </Stack>
      ) : (
        <PoweredByExplNodes size="sm" />
      )}
    </Box>
  );
}
