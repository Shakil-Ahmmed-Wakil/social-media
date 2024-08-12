import {
  FaBell,
  FaBookmark,
  FaHouse,
  FaMagnifyingGlass,
  FaRightFromBracket,
  FaUsers,
} from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <header className="flex justify-between items-center px-5 py-2 bg-white">
        <h2 className="text-3xl font-semibold">Social</h2>
        <div className="search-bar bg-gray-300 px-5 py-2.5 rounded-full flex items-center gap-2.5">
          <FaMagnifyingGlass />
          <input
            className="bg-transparent"
            type="search"
            name="search"
            id="search"
            placeholder="Search for creators, inspirations, and projects"
          />
        </div>
        <div className="profile-section flex gap-5">
          <button
            className="create bg-blue-500 px-8 text-white rounded-full"
            type="button"
          >
            Create
          </button>
          <img
            className="profile-picture w-12 rounded-full"
            src="profile.jpg"
            alt="Profile Picture"
          />
        </div>
      </header>

      <section className="px-8">
        <aside className="bg-white rounded-md shadow-md w-fit">
          <ul>
            <li>
              <button className="aside-nav-item">
                <FaHouse />
                <span>Home</span>
              </button>
            </li>
            <li>
              <button className="aside-nav-item">
                <FaUsers />
                <span>Friends</span>
              </button>
            </li>
            <li>
              <button className="aside-nav-item">
                <FaBookmark />
                <span>Saved Posts</span>
              </button>
            </li>
            <li>
              <button className="aside-nav-item">
                <FaBell />
                <span>Notifications</span>
              </button>
            </li>
            <li>
              <button className="aside-nav-item">
                <FaRightFromBracket />
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </aside>
      </section>
    </>
  );
}
