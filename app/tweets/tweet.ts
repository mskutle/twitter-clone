type Tweet = {
  id: number;
  body: string;
  // createdAt: string;
  author: {
    handle: string;
    name: string;
    avatarUrl: string;
  };
};

export type { Tweet };
