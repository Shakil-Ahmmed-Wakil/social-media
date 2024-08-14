import { IconBell, IconBookmark, IconHome, IconLogout, IconUsers } from "@tabler/icons-react";

export default function Aside() {
  return (
    <aside className="bg-white rounded-lg shadow-md hidden md:block">
      <ul>
        <li>
          <button className="aside-nav-item">
            <IconHome />
            <span>Home</span>
          </button>
        </li>
        <li>
          <button className="aside-nav-item">
            <IconUsers />
            <span>Friends</span>
          </button>
        </li>
        <li>
          <button className="aside-nav-item">
            <IconBookmark />
            <span>Saved Posts</span>
          </button>
        </li>
        <li>
          <button className="aside-nav-item">
            <IconBell />
            <span>Notifications</span>
          </button>
        </li>
        <li>
          <button className="aside-nav-item">
            <IconLogout />
            <span>Logout</span>
          </button>
        </li>
      </ul>
    </aside>
  );
}
