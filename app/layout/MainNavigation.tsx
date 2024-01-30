import { Nav } from "./Nav";
import {
  BsBell,
  BsBookmark,
  BsHash,
  BsHouse,
  BsInbox,
  BsList,
  BsPencil,
  BsPerson,
  BsThreeDots,
  BsTwitter,
} from "react-icons/bs";

function MainNavigation() {
  return (
    <aside className="pt-1 sticky top-0 bottom-0 self-start flex flex-col justify-self-end gap-y-8 px-3 md:pl-5 md:pr-8">
      <Nav>
        <Nav.Item to="/">
          <Nav.Item.Icon>
            <BsTwitter className="text-sky-500 w-7 h-7" />
          </Nav.Item.Icon>
          <Nav.Item.Content />
        </Nav.Item>
        <Nav.Item to="/">
          <Nav.Item.Icon>
            <BsHouse className="w-6 h-6" />
          </Nav.Item.Icon>
          <Nav.Item.Content>Home</Nav.Item.Content>
        </Nav.Item>
        <Nav.Item to="/explore">
          <Nav.Item.Icon>
            <BsHash className="w-6 h-6" />
          </Nav.Item.Icon>
          <Nav.Item.Content>Explore</Nav.Item.Content>
        </Nav.Item>
        <Nav.Item to="/notifications">
          <Nav.Item.Icon>
            <BsBell className="w-6 h-6" />
          </Nav.Item.Icon>
          <Nav.Item.Content>Notifications</Nav.Item.Content>
        </Nav.Item>
        <Nav.Item to="/messages">
          <Nav.Item.Icon>
            <BsInbox className="w-6 h-6" />
          </Nav.Item.Icon>
          <Nav.Item.Content>Messages</Nav.Item.Content>
        </Nav.Item>
        <Nav.Item to="/bookmarks">
          <Nav.Item.Icon>
            <BsBookmark className="w-6 h-6" />
          </Nav.Item.Icon>
          <Nav.Item.Content>Bookmarks</Nav.Item.Content>
        </Nav.Item>
        <Nav.Item to="/lists">
          <Nav.Item.Icon>
            <BsList className="w-6 h-6" />
          </Nav.Item.Icon>
          <Nav.Item.Content>Lists</Nav.Item.Content>
        </Nav.Item>
        <Nav.Item to="/profile">
          <Nav.Item.Icon>
            <BsPerson className="w-6 h-6" />
          </Nav.Item.Icon>
          <Nav.Item.Content>Profile</Nav.Item.Content>
        </Nav.Item>
        <Nav.Item to="/more">
          <Nav.Item.Icon>
            <BsThreeDots className="w-6 h-6" />
          </Nav.Item.Icon>
          <Nav.Item.Content>More</Nav.Item.Content>
        </Nav.Item>
      </Nav>
      <button className="px-3 py-1.5 md:py-3 font-bold text-center text-lg grow bg-sky-500 drop-shadow-xl shadow-blue-50 text-white text-bold flex justify-center items-center rounded-full hover:bg-sky-600">
        <span className="hidden md:block">Tweet</span>
        <BsPencil className="w-6 h-10 md:hidden" />
      </button>
    </aside>
  );
}

export { MainNavigation };
