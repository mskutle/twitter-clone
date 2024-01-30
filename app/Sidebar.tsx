import { MdMoreHoriz } from "react-icons/md";
import { Card } from "./common/Card";

const trends = [
  { name: "Slack", category: "Technology", postCount: "74K" },
  { name: "SQLite", category: "Technology", postCount: "11K" },
  { name: "Batman", category: "Entertainment", postCount: "45K" },
  { name: "Slack", category: "Technology", postCount: "74K" },
  { name: "SQLite", category: "Technology", postCount: "11K" },
  { name: "Batman", category: "Entertainment", postCount: "45K" },
];

export function Sidebar() {
  return (
    <aside className="shrink hidden lg:flex flex-col sticky top-0 self-start gap-4 p-8 grow min-w-[380px] max-w-[430px]">
      <Card>
        <Card.Heading>Subscribe to Premium</Card.Heading>
        <Card.Content>
          <p>
            Subscribe to unlock new features and if eligible, receive a share of
            ads revenue.
          </p>
          <button className="bg-black text-white font-bold flex items-center rounded-full px-4 py-1.5 mt-3 hover:opacity-80">
            Subscribe
          </button>
        </Card.Content>
      </Card>
      <Card>
        <Card.Heading>Trends for you</Card.Heading>
        <Card.Content>
          <ul className="flex flex-col">
            {trends.map(({ name, category, postCount }, index) => (
              <li
                key={index}
                className="flex flex-col hover:bg-zinc-200 hover:cursor-pointer -mx-4 px-4 py-2"
              >
                <div className="flex items-center justify-between -mb-1">
                  <span className=" text-sm text-slate-500">
                    {category} · Trending
                  </span>
                  <button className="flex items-center justify-center rounded-full w-8 h-8 p-1 hover:bg-blue-100 hover:text-blue-700">
                    <MdMoreHoriz className="w-5 h-5" />
                  </button>
                </div>
                <span className="text-base font-bold">{name}</span>
                <span className="text-sm text-slate-500">
                  {postCount} posts
                </span>
              </li>
            ))}
            <button className="text-start rounded-b-xl p-4 -mx-4 -mb-4 hover:bg-zinc-200 text-sky-500">
              Show more
            </button>
          </ul>
        </Card.Content>
      </Card>
    </aside>
  );
}
