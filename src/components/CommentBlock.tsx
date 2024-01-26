import { Avatar, Typography, Box } from '@mui/material'
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder'
import { format } from 'date-fns'
import { Comment } from '@/shared'

export const CommentBlock = ({
  author,
  avatar,
  createdAt,
  text,
}: Omit<Comment, 'id' | 'newsId'>) => {
  return (
    <Box display="flex" columnGap="10px" justifyItems="center">
      <Box>
        <Avatar alt="Remy Sharp" src={avatar} />
      </Box>
      <Box>
        <Typography variant="h5">{author}</Typography>
        <Typography variant="h6">{text}</Typography>
        <Box display="flex" alignItems="center" columnGap="5px">
          <QueryBuilderIcon /> {format(new Date(createdAt), 'MM/dd/yyyy')}
        </Box>
      </Box>
    </Box>
  )
}
