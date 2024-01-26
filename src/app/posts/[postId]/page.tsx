'use client'

import { Loader, PageLayout, PostCard, CommentBlock } from '@/components'
import { Comment, Post, useAxios } from '@/shared'
import { Box, Button, Card } from '@mui/material'

export default function Page({
  params,
}: {
  params: {
    postId: number
  }
}) {
  const { response: post, loading: postLoading } = useAxios<Post>({
    method: 'GET',
    url: `/news/${params.postId}`,
  })

  const { response: comments, loading: commentsLoading } = useAxios<Comment[]>({
    method: 'GET',
    url: `/news/${params.postId}/comments`,
  })

  return (
    <PageLayout>
      <Box display="flex" justifyContent="center">
        <Button href="/">На домашнюю страницу</Button>
      </Box>
      {(postLoading || commentsLoading) && <Loader />}
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
