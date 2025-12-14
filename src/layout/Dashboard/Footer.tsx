// material-ui
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// assets
import DiscordOutlined from '@ant-design/icons/DiscordOutlined';
import GithubOutlined from '@ant-design/icons/GithubOutlined';
import TwitterOutlined from '@ant-design/icons/TwitterOutlined';
import GlobalOutlined from '@ant-design/icons/GlobalOutlined';
import BookOutlined from '@ant-design/icons/BookOutlined';

export default function Footer() {
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      sx={{ gap: 1.5, alignItems: 'center', justifyContent: 'space-between', p: '24px 16px 0px', mt: 'auto' }}
    >
      <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
        <Link href="https://expl.one" target="_blank" underline="hover" color="secondary" variant="caption">
          ONE Ecosystem
        </Link>
        <Link href="https://node.expl.one" target="_blank" underline="hover" color="secondary" variant="caption">
          EXPL Nodes
        </Link>
        <Link href="https://docs.expl.one" target="_blank" underline="hover" color="secondary" variant="caption">
          Documentation
        </Link>
      </Stack>
      <Typography variant="caption" color="secondary" sx={{ fontFamily: "'Roboto Mono', monospace" }}>
        // Powered by EXPL Nodes
      </Typography>
      <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
        <IconButton
          component="a"
          href="https://discord.com/invite/RetTCVq7tJ"
          target="_blank"
          rel="noopener noreferrer"
          size="small"
          color="secondary"
          sx={{ '&:hover': { color: 'primary.main' } }}
          aria-label="Discord"
        >
          <DiscordOutlined style={{ fontSize: '1.15rem' }} />
        </IconButton>
        <IconButton
          component="a"
          href="https://x.com/explorills_main"
          target="_blank"
          rel="noopener noreferrer"
          size="small"
          color="secondary"
          sx={{ '&:hover': { color: 'primary.main' } }}
          aria-label="Twitter/X"
        >
          <TwitterOutlined style={{ fontSize: '1.15rem' }} />
        </IconButton>
        <IconButton
          component="a"
          href="https://github.com/explorills"
          target="_blank"
          rel="noopener noreferrer"
          size="small"
          color="secondary"
          sx={{ '&:hover': { color: 'primary.main' } }}
          aria-label="GitHub"
        >
          <GithubOutlined style={{ fontSize: '1.15rem' }} />
        </IconButton>
      </Stack>
    </Stack>
  );
}
