import { FaBell, FaBookmark, FaHome, FaSearch, FaUsers } from "react-icons/fa";
import { FaRightFromBracket } from "react-icons/fa6";
export default function Home() {
  return (
    <>
      <header className="flex justify-between items-center px-5 py-2 bg-white">
        <h2 className="text-3xl font-semibold">Social</h2>
        <div className="search-bar bg-gray-300 px-5 py-2.5 rounded-full flex items-center gap-2.5">
          <FaSearch />
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

      <main className="px-8">
        
        <aside className="bg-white rounded-md shadow-md w-fit">
          <ul>
            <li>
              <a className="aside-nav-item" href="javascript:void(0)">
                <FaHome />
                <span>Home</span>
              </a>
            </li>
            <li>
              <a className="aside-nav-item" href="javascript:void(0)">
                <FaUsers />
                <span>Friends</span>
              </a>
            </li>
            <li>
              <a className="aside-nav-item" href="javascript:void(0)">
                <FaBookmark />
                <span>Saved Posts</span>
              </a>
            </li>
            <li>
              <a className="aside-nav-item" href="javascript:void(0)">
                <FaBell />
                <span>Notifications</span>
              </a>
            </li>
            <li>
              <a className="aside-nav-item" href="javascript:void(0)">
                <FaRightFromBracket />
                <span>Logout</span>
              </a>
            </li>
          </ul>
        </aside>
        
      </main>
    </>
  );
  }