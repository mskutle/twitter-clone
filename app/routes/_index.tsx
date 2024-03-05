import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { PageHeading } from "~/common/PageHeading";
import { TimelineModeSwitcher } from "~/common/Tabs";
import { Timeline } from "~/Timeline";
import { TweetComposer } from "~/TweetComposer";
import type { Tweet } from "~/tweets/tweet";
import tweets from "../tweets/tweets";

export async function loader() {
  const data: Tweet[] = tweets.map((p: any) => ({
    id: p.id,
    body: p.body,
    author: {
      name: "Magne Skutle",
      handle: "@mskutle",
      avatarUrl: "/img/magne.png",
    },
  }));

  return json(data);
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
