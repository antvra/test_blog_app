'use client'

import { Loader, PageLayout, PostCard, CommentBlock } from '@/components'
import type { Comment, Post } from '@/shared/types'
import { Box, Button, Card, Typography } from '@mui/material'
import Link from 'next/link'
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
    `/comments`,
    // TODO: Не работает ссылка снизу (на стороне сервиса)
    // `/news/${params.postId}/comments`,
  ])

  if (isPostLoading || isCommentsLoading) {
    return (
      <PageLayout>
        <Loader />
      </PageLayout>
    )
  }
  return (
    <PageLayout>
      <Box display="flex" flexDirection="column" rowGap="10px">
        <Box display="flex" justifyContent="center">
          <Link href="/">
            <Button>На домашнюю страницу</Button>
          </Link>
        </Box>
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
      </Box>
      {comments && (
        <Box display="flex" flexDirection="column" rowGap="10px">
          <Typography variant="h2">Комментарии</Typography>
          <Box
            display="flex"
            flexDirection="column"
            rowGap="10px"
            p="20px"
            height="200px"
            overflow="scroll"
            border="1px solid #e6e6e6"
          >
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
        </Box>
      )}
    </PageLayout>
  )
}
