import { CardContent, CardMedia, Typography, Box } from '@mui/material'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import PersonIcon from '@mui/icons-material/Person'
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder'
import { format } from 'date-fns'
import type { Post } from '@/shared/types'

export const PostCard = ({
  author,
  createdAt,
  image,
  name,
  text,
  views,
}: Omit<Post, 'id'>) => {
  return (
    <>
      <CardMedia
        component="div"
        sx={{
          pt: '56.25%',
        }}
        image={image}
      />
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          rowGap: '10px',
        }}
      >
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Box display="flex" alignItems="center" columnGap="5px">
          <PersonIcon /> {author}
        </Box>
        <Box display="flex" alignItems="center" columnGap="5px">
          <QueryBuilderIcon /> {format(new Date(createdAt), 'MM/dd/yyyy')}
        </Box>
        <Typography>{text}</Typography>
        <Box display="flex" alignItems="center" columnGap="5px">
          <RemoveRedEyeIcon /> {views}
        </Box>
      </CardContent>
    </>
  )
}
