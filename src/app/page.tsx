'use client'

import Grid from '@mui/material/Grid'
import { Loader, PostCard, PageLayout } from '@/components'
import type { Post } from '@/shared/types'
import { Box, Button, Card } from '@mui/material'
import { useQuery } from 'react-query'
import { unique } from '@/shared/lib'

export default function Page() {
  const { data: posts, isLoading: isPostsLoading } = useQuery<Post[]>([
    '/news?sortBy=createdAt&order=desc',
  ])

  return (
    <PageLayout>
      {isPostsLoading && <Loader />}
      {posts && (
        <Grid container spacing={4}>
          {unique(posts, 'id').map((post) => {
            return (
              <Grid item key={post.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <PostCard
                    author={post.author}
                    image={post.image}
                    text={post.text}
                    views={post.views}
                    name={post.name}
                    createdAt={post.createdAt}
                  />
                  <Box display="flex" justifyContent="center" my="10px">
                    <Button size="small" href={`/posts/${post.id}`}>
                      Открыть новость
                    </Button>
                  </Box>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      )}
    </PageLayout>
  )
}
