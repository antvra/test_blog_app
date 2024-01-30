'use client'

import { Loader, PageLayout, PostCard, CommentBlock } from '@/components'
import type { Comment, Post } from '@/shared/types'
import { Box, Button, Card } from '@mui/material'
import { useQuery } from 'react-query'

export default function Page({
  params,
}: {
  params: {
    postId: number
  }
}) {
  const { data: post, isLoading: isPostLoading } = useQuery<Post>([
    `/news/${params.postId}`,
  ])
  const { data: comments, isLoading: isCommentsLoading } = useQuery<Comment[]>([
    '/comments',
  ])

  return (
    <PageLayout>
      <Box display="flex" justifyContent="center">
        <Button href="/">На домашнюю страницу</Button>
      </Box>
      {(isPostLoading || isCommentsLoading) && <Loader />}
      {post && (
        <Card
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '10px',
          }}
        >
          <PostCard
            author={post.author}
            createdAt={post.createdAt}
            image={post.image}
            name={post.name}
            text={post.text}
            views={post.views}
          />
        </Card>
      )}
      {comments && (
        <Box display="flex" flexDirection="column" rowGap="10px" p="20px">
          {comments.map((comment) => {
            return (
              <CommentBlock
                key={comment.id}
                text={comment.text}
                author={comment.author}
                avatar={comment.avatar}
                createdAt={comment.createdAt}
              />
            )
          })}
        </Box>
      )}
    </PageLayout>
  )
}
