import { Avatar } from "./common/Avatar";
import type { Tweet as TweetType } from "./tweets/tweet";

type Props = {
  tweet: TweetType;
};

function Tweet(props: Props) {
  const { tweet } = props;
  return (
    <li className="grow p-4 flex items-start gap-4 last:border-0 border-b border-gray-100 hover:bg-zinc-50 hover:cursor-pointer">
      <Avatar src={tweet.author.avatarUrl} alt={tweet.author.name} />
      <div className="flex flex-col gap-x-4">
        <div className="inline-flex gap-1">
          <strong>{tweet.author.name}</strong>
          <span className="text-gray-600">{tweet.author.handle}</span>
        </div>
        <p className="leading-snug">{tweet.body}</p>
      </div>
    </li>
  );
}

export { Tweet };
