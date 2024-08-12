import { UilSearch } from "@iconscout/react-unicons";


export default function Header() {
  return (
    <header className="flex justify-around items-center px-5 py-2 bg-white">
      <h2 className="text-3xl font-semibold">Social</h2>
      <div className="search-bar bg-gray-300 px-5 py-2.5 rounded-full flex items-center gap-2.5">
        <UilSearch />
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
  );
}
