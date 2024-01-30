import type { ReactNode } from "react";
import { NavLink } from "@remix-run/react";
import clsx from "clsx";

type Props = {
  children: ReactNode;
};

function Nav(props: Props) {
  return (
    <nav className="text-xl md:pr-8">
      <ul className="flex flex-col items-center md:items-start gap-y-4">
        {props.children}
      </ul>
    </nav>
  );
}

const NavItem = (props: { children: ReactNode; to: string }) => (
  <NavLink to={props.to}>
    {({ isActive }) => (
      <li
        className={clsx(
          isActive && "font-bold",
          "flex items-center justify-center w-max space-x-4 px-3 py-3 rounded-full hover:bg-stone-100"
        )}
      >
        {props.children}
      </li>
    )}
  </NavLink>
);
const NavItemIcon = (props: Props) => (
  <span className="rounded-full">{props.children}</span>
);
const NavItemContent = (props: { children?: ReactNode }) =>
  props.children ? (
    <span className="hidden md:block md:pr-6">{props.children}</span>
  ) : null;

NavItem.Icon = NavItemIcon;
NavItem.Content = NavItemContent;
Nav.Item = NavItem;

export { Nav };
