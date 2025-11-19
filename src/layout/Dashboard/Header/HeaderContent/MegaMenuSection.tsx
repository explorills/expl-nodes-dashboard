import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// material-ui
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project imports
import MainCard from 'components/MainCard';
import Dot from 'components/@extended/Dot';
import IconButton from 'components/@extended/IconButton';
import Transitions from 'components/@extended/Transitions';
import AnimateButton from 'components/@extended/AnimateButton';

import { DRAWER_WIDTH } from 'config';

// assets
import ArrowRightOutlined from '@ant-design/icons/ArrowRightOutlined';
import WindowsOutlined from '@ant-design/icons/WindowsOutlined';

// ==============================|| HEADER CONTENT - MEGA MENU SECTION ||============================== //

export default function MegaMenuSection() {
  const anchorRef = useRef<any>(null);
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: MouseEvent | TouchEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }}>
      <Tooltip title="Explorills Resources" disableInteractive>
        <IconButton
          color="secondary"
          variant="light"
          sx={(theme) => ({
            color: 'text.primary',
            bgcolor: open ? 'grey.100' : 'transparent',
            ...theme.applyStyles('dark', { bgcolor: open ? 'background.default' : 'transparent' })
          })}
          aria-label="open profile"
          ref={anchorRef}
          aria-controls={open ? 'profile-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <WindowsOutlined />
        </IconButton>
      </Tooltip>
      <Popper
        placement="bottom"
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [-180, 9]
              }
            }
          ]
        }}
      >
        {({ TransitionProps }) => (
          <Transitions type="grow" position="top" in={open} {...TransitionProps}>
            <Paper
              sx={(theme) => ({
                boxShadow: theme.vars.customShadows.z1,
                minWidth: 750,
                width: {
                  md: `calc(100vw - 100px)`,
                  lg: `calc(100vw - ${DRAWER_WIDTH + 100}px)`,
                  xl: `calc(100vw - ${DRAWER_WIDTH + 140}px)`
                },
                maxWidth: 1024
              })}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <MainCard elevation={0} border={false} content={false}>
                  <Grid container>
                    <Grid
                      sx={(theme) => ({
                        background: `linear-gradient(183.77deg, ${theme.vars.palette.primary.main} 11.46%, ${theme.vars.palette.primary[700]} 100.33%)`
                      })}
                      size={{ md: 4 }}
                    >
                      <Box sx={{ p: 4.5, pb: 3 }}>
                        <Stack sx={(theme) => ({ color: 'background.paper', ...theme.applyStyles('dark', { color: 'text.primary' }) })}>
                          <Typography variant="h2" sx={{ fontSize: '1.875rem', mb: 1 }}>
                            Explorills Resources
                          </Typography>
                          <Typography variant="h6">
                            Official documentation, community resources, and support channels for the Explorills ecosystem.
                          </Typography>
                          <Stack direction="row" sx={{ alignItems: 'flex-end', justifyContent: 'space-between', mt: -1 }}>
                            <AnimateButton>
                              <Button
                                variant="contained"
                                color="secondary"
                                sx={{
                                  bgcolor: 'background.paper',
                                  color: 'text.primary',
                                  '&:hover': { bgcolor: 'background.paper', color: 'text.primary' }
                                }}
                                endIcon={<ArrowRightOutlined />}
                                component="a"
                                href="https://docs.explorills.com"
                                target="_blank"
                              >
                                Documentation
                              </Button>
                            </AnimateButton>
                            <CardMedia component="img" src="/Resources_Logo.png" alt="Explorills" sx={{ mr: -5, mb: -2.5, width: 124 }} />
                          </Stack>
                        </Stack>
                      </Box>
                    </Grid>
                    <Grid size={{ md: 8 }}>
                      <Box
                        sx={{
                          p: 4,
                          '& .MuiList-root': { pb: 0 },
                          '& .MuiListSubheader-root': { p: 0, pb: 1.5 },
                          '& .MuiListItemButton-root': {
                            p: 0.5,
                            '&:hover': { bgcolor: 'transparent', '& .MuiTypography-root': { color: 'primary.main' } }
                          }
                        }}
                      >
                        <Grid container spacing={6}>
                          <Grid size={4}>
                            <List
                              component="nav"
                              aria-labelledby="nested-list-products"
                              subheader={
                                <ListSubheader id="nested-list-products">
                                  <Typography variant="subtitle1" color="text.primary">
                                    Products
                                  </Typography>
                                </ListSubheader>
                              }
                            >
                              <ListItemButton disableRipple component="a" target="_blank" href="https://mint.explorills.com/#explorills-Nodes">
                                <ListItemIcon>
                                  <Dot size={7} color="secondary" variant="outlined" />
                                </ListItemIcon>
                                <ListItemText primary="Nodes" />
                              </ListItemButton>
                              <ListItemButton disableRipple component="a" target="_blank" href="https://mint.explorills.com/#TNO-Bronze">
                                <ListItemIcon>
                                  <Dot size={7} color="secondary" variant="outlined" />
                                </ListItemIcon>
                                <ListItemText primary="TNO Cards" />
                              </ListItemButton>
                              <ListItemButton disableRipple component="a" target="_blank" href="https://explorills.network/">
                                <ListItemIcon>
                                  <Dot size={7} color="secondary" variant="outlined" />
                                </ListItemIcon>
                                <ListItemText primary="Explorills Network" />
                              </ListItemButton>
                              <ListItemButton disableRipple component="a" target="_blank" href="https://explorills.world/">
                                <ListItemIcon>
                                  <Dot size={7} color="secondary" variant="outlined" />
                                </ListItemIcon>
                                <ListItemText primary="Explorills World" />
                              </ListItemButton>
                            </List>
                          </Grid>
                          <Grid size={4}>
                            <List
                              component="nav"
                              aria-labelledby="nested-list-community"
                              subheader={
                                <ListSubheader id="nested-list-community">
                                  <Typography variant="subtitle1" color="text.primary">
                                    Community
                                  </Typography>
                                </ListSubheader>
                              }
                            >
                              <ListItemButton disableRipple component="a" target="_blank" href="https://discord.gg/jaZ23J3NCc">
                                <ListItemIcon>
                                  <Dot size={7} color="secondary" variant="outlined" />
                                </ListItemIcon>
                                <ListItemText primary="Discord" />
                              </ListItemButton>
                              <ListItemButton disableRipple component="a" target="_blank" href="https://x.com/explorills_main">
                                <ListItemIcon>
                                  <Dot size={7} color="secondary" variant="outlined" />
                                </ListItemIcon>
                                <ListItemText primary="Twitter" />
                              </ListItemButton>
                              <ListItemButton disableRipple component="a" target="_blank" href="https://github.com/explorills">
                                <ListItemIcon>
                                  <Dot size={7} color="secondary" variant="outlined" />
                                </ListItemIcon>
                                <ListItemText primary="GitHub" />
                              </ListItemButton>
                              <ListItemButton disableRipple component="a" target="_blank" href="https://www.linkedin.com/company/explorills">
                                <ListItemIcon>
                                  <Dot size={7} color="secondary" variant="outlined" />
                                </ListItemIcon>
                                <ListItemText primary="LinkedIn" />
                              </ListItemButton>
                            </List>
                          </Grid>
                          <Grid size={4}>
                            <List
                              component="nav"
                              aria-labelledby="nested-list-resources"
                              subheader={
                                <ListSubheader id="nested-list-resources">
                                  <Typography variant="subtitle1" color="text.primary">
                                    Resources
                                  </Typography>
                                </ListSubheader>
                              }
                            >
                              <ListItemButton disableRipple component="a" target="_blank" href="https://explorills.com/">
                                <ListItemIcon>
                                  <Dot size={7} color="secondary" variant="outlined" />
                                </ListItemIcon>
                                <ListItemText primary="Main Landing" />
                              </ListItemButton>
                              <ListItemButton disableRipple component="a" target="_blank" href="https://docs.explorills.com/">
                                <ListItemIcon>
                                  <Dot size={7} color="secondary" variant="outlined" />
                                </ListItemIcon>
                                <ListItemText primary="Documentation" />
                              </ListItemButton>
                              <ListItemButton disableRipple component="a" target="_blank" href="https://blog.explorills.com/">
                                <ListItemIcon>
                                  <Dot size={7} color="secondary" variant="outlined" />
                                </ListItemIcon>
                                <ListItemText primary="Explorills Blog" />
                              </ListItemButton>
                              <ListItemButton disableRipple component="a" target="_blank" href="mailto:support@explorills.com">
                                <ListItemIcon>
                                  <Dot size={7} color="secondary" variant="outlined" />
                                </ListItemIcon>
                                <ListItemText primary="Email Support" />
                              </ListItemButton>
                            </List>
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                  </Grid>
                </MainCard>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </Box>
  );
}
