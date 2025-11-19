// material-ui
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// assets
import DiscordOutlined from '@ant-design/icons/DiscordOutlined';
import GithubOutlined from '@ant-design/icons/GithubOutlined';
import LinkedinOutlined from '@ant-design/icons/LinkedinOutlined';
import TwitterOutlined from '@ant-design/icons/TwitterOutlined';

export default function Footer() {
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      sx={{ gap: 1.5, alignItems: 'center', justifyContent: 'space-between', p: '24px 16px 0px', mt: 'auto' }}
    >
      <Typography variant="caption" color="secondary">
        Powered by{' '}
        <Link href="https://mint.explorills.com/" target="_blank" underline="hover">
          EXPL Nodes
        </Link>
      </Typography>
      <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
        <IconButton
          component="a"
          href="https://discord.gg/jaZ23J3NCc"
          target="_blank"
          size="small"
          color="secondary"
          sx={{ '&:hover': { color: 'primary.main' } }}
        >
          <DiscordOutlined style={{ fontSize: '1.15rem' }} />
        </IconButton>
        <IconButton
          component="a"
          href="https://x.com/explorills_main"
          target="_blank"
          size="small"
          color="secondary"
          sx={{ '&:hover': { color: 'primary.main' } }}
        >
          <TwitterOutlined style={{ fontSize: '1.15rem' }} />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.linkedin.com/company/explorills"
          target="_blank"
          size="small"
          color="secondary"
          sx={{ '&:hover': { color: 'primary.main' } }}
        >
          <LinkedinOutlined style={{ fontSize: '1.15rem' }} />
        </IconButton>
        <IconButton
          component="a"
          href="https://github.com/explorills"
          target="_blank"
          size="small"
          color="secondary"
          sx={{ '&:hover': { color: 'primary.main' } }}
        >
          <GithubOutlined style={{ fontSize: '1.15rem' }} />
        </IconButton>
      </Stack>
      <Typography variant="caption" color="secondary">
        © All rights reserved 2025
      </Typography>
    </Stack>
  );
}
