import { AppBar, Toolbar, Typography } from '@mui/material'

export const Header = () => {
  return (
    <AppBar position="relative">
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h6" color="inherit" noWrap>
          Test App
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
