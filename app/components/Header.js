import Aside from "./Aside";
import { IconMenu2, IconPlus, IconSearch } from "@tabler/icons-react";


export default function Header() {
  return (
    <header className="w-full flex justify-around items-center px-5 py-2 bg-white">
      <h2 className="text-3xl font-semibold">Social</h2>
      <div className="search-bar bg-gray-200 px-5 py-2.5 rounded-full  hidden md:flex items-center gap-2.5">
        <IconSearch />
        <input
          className="bg-transparent"
          type="search"
          name="search"
          id="search"
          placeholder="Search for creators, inspirations, and projects"
        />
      </div>
      <div className="profile-section flex items-center gap-2">
        <button
          className="create bg-blue-500 text-white p-2 rounded-full"
          type="button"
        >
          <IconPlus className="md:hidden" />{" "}
          <span className="hidden md:inline">Create</span>
        </button>
        <img
          className="profile-picture w-10 rounded-full"
          src="profile.jpg"
          alt="Profile Picture"
        />
        <IconMenu2 className="md:hidden" />
      </div>
    </header>
  );
}
