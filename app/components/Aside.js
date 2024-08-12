import { UilHome, UilUsersAlt, UilBookmark, UilBell, UilSignout } from "@iconscout/react-unicons";

export default function Aside() {
  return (
    <aside className="bg-white rounded-md shadow-md">
      <ul>
        <li>
          <button className="aside-nav-item">
            <UilHome />
            <span>Home</span>
          </button>
        </li>
        <li>
          <button className="aside-nav-item">
            <UilUsersAlt />
            <span>Friends</span>
          </button>
        </li>
        <li>
          <button className="aside-nav-item">
            <UilBookmark />
            <span>Saved Posts</span>
          </button>
        </li>
        <li>
          <button className="aside-nav-item">
            <UilBell />
            <span>Notifications</span>
          </button>
        </li>
        <li>
          <button className="aside-nav-item">
            <UilSignout />
            <span>Logout</span>
          </button>
        </li>
      </ul>
    </aside>
  );
}
