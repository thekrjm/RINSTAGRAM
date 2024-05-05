export type Comment = {
  username: string;
  comment: string;
  image: string;
};

export type SimplePost = Omit<FullPost, 'comments'> & {
  comments: number;
};

export type FullPost = {
  id: string;
  username: string;
  userImage: string;
  image: string;
  text: string;
  comments: Comment[];
  likes: string[];
  createdAt: string;
};
