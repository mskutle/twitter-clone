import React, { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "h4";
};

function PageHeading(props: Props) {
  const { as = "h1", ...rest } = props;

  const heading = React.createElement(as, {
    className: "font-bold text-xl",
    ...rest,
  });

  return <div className="p-4">{heading}</div>;
}

export { PageHeading };
