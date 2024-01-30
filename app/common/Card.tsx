import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Card = (props: Props) => (
  <div className="rounded-xl bg-gray-100 p-4 space-y-3">{props.children}</div>
);

Card.Heading = (props: Props) => (
  <h2 className="text-xl font-black">{props.children}</h2>
);

Card.Content = (props: Props) => <div className="">{props.children}</div>;

export { Card };
