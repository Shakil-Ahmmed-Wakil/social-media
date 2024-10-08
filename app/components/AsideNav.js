import { IconBell, IconBookmark, IconLogout, IconUsers, IconUsersGroup } from "@tabler/icons-react";

export default function AsideNav() {
  return (
    <aside className="w-72 hidden md:block">
      <ul>
        <li>
          <button className="w-full flex items-center gap-2 px-4 pb-4 rounded-lg">
            <img className="size-8 rounded-full" src="/profile.jpg" />
            <span className="font-semibold">Shakil Ahmmed</span>
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
            <IconUsersGroup />
            <span>Groups</span>
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
