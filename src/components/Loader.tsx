import { CircularProgress } from '@mui/material'
import { Container } from '@mui/system'

export const Loader = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <CircularProgress />
    </Container>
  )
}
