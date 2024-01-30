import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { PageHeading } from "~/common/PageHeading";
import { TimelineModeSwitcher } from "~/common/Tabs";
import { Timeline } from "~/Timeline";
import { TweetComposer } from "~/TweetComposer";
import type { Tweet } from "~/tweets/tweet";

export async function loader() {
  const tweets: Tweet[] = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  )
    .then((response) => response.json())
    .then((posts) => posts.slice(0, 25))
    .then((posts) =>
      posts.map((p: any) => ({
        id: p.id,
        body: p.body,
        author: {
          name: "Magne Skutle",
          handle: "@mskutle",
          avatarUrl: "/img/magne.png",
        },
      }))
    );

  return json(tweets);
}

export default function Index() {
  const tweets = useLoaderData<typeof loader>();

  return (
    <div className="">
      <PageHeading>Home</PageHeading>
      <TimelineModeSwitcher />
      <TweetComposer />
      <Timeline tweets={tweets} />
    </div>
  );
}
