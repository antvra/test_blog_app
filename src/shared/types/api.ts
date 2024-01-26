export type Post = {
  author: string;
  createdAt: string;
  id: string;
  image: string;
  name: string;
  text: string;
  views: string;
};

export type Comment = {
  author: string;
  avatar: string;
  createdAt: string;
  id: string;
  newsId: string;
  text: string;
};
