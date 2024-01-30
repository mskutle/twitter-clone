import { type Tweet as TweetType } from "./tweets/tweet";
import { Tweet } from "./Tweet";

type Props = {
  tweets: TweetType[];
};

function Timeline(props: Props) {
  return (
    <ul>
      {props.tweets.map((t) => (
        <Tweet key={t.id} tweet={t} />
      ))}
    </ul>
  );
}

export { Timeline };
