import { Container } from '@mui/material'
import { Header } from '.'
import { ReactNode } from 'react'

export const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Header />
      <Container sx={{ py: 8 }} maxWidth="md">
        {children}
        <span>2</span>
      </Container>
    </main>
  )
}
