"use client";
import Grid from "@mui/material/Grid";
import { Loader, PostCard, PageLayout } from "@/components";
import { Post, useAxios } from "@/shared";
import { Box, Button, Card } from "@mui/material";

export default function Page() {
  const { response: posts, loading: postsLoading } = useAxios<Post[]>({
    method: "GET",
    url: "/news",
    params: {
      sortBy: "createdAt",
      order: "desc",
    },
  });

  return (
    <PageLayout>
      {postsLoading && <Loader />}
      {posts && (
        <Grid container spacing={4}>
          {posts.map((post) => {
            return (
              <Grid item key={post.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
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
            );
          })}
        </Grid>
      )}
    </PageLayout>
  );
}
