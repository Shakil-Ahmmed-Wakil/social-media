import { IconBellFilled, IconGridDots, IconSearch } from "@tabler/icons-react";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center px-5 py-2 bg-white">
      <h2 className="text-3xl font-semibold">Social</h2>
      <div className="search-bar bg-gray-200 px-5 py-2.5 rounded-full w-96 hidden md:flex items-center gap-2.5">
        <IconSearch />
        <input
          className="bg-transparent w-full"
          type="search"
          name="search"
          id="search"
          placeholder="Search for creators, inspirations, and projects"
        />
      </div>
      <div className="profile-section flex items-center gap-2">
        <button className="create p-2 bg-gray-300 rounded-full" type="button">
          <IconGridDots />
        </button>
        <button className="create p-2 bg-gray-300 rounded-full" type="button">
          {/* Need to Change this Icon */}
          <svg viewBox="0 0 12 13" width="20" height="20" fill="currentColor">
            <g fill-rule="evenodd" transform="translate(-450 -1073)">
              <path d="m459.603 1077.948-1.762 2.851a.89.89 0 0 1-1.302.245l-1.402-1.072a.354.354 0 0 0-.433.001l-1.893 1.465c-.253.196-.583-.112-.414-.386l1.763-2.851a.89.89 0 0 1 1.301-.245l1.402 1.072a.354.354 0 0 0 .434-.001l1.893-1.465c.253-.196.582.112.413.386M456 1073.5c-3.38 0-6 2.476-6 5.82 0 1.75.717 3.26 1.884 4.305.099.087.158.21.162.342l.032 1.067a.48.48 0 0 0 .674.425l1.191-.526a.473.473 0 0 1 .32-.024c.548.151 1.13.231 1.737.231 3.38 0 6-2.476 6-5.82 0-3.344-2.62-5.82-6-5.82"></path>
            </g>
          </svg>
        </button>
        <button className="create p-2 bg-gray-300 rounded-full" type="button">
          <IconBellFilled />
        </button>
        <img
          className="profile-picture w-10 rounded-full"
          src="profile.jpg"
          alt="Profile Picture"
        />
      </div>
    </header>
  );
}
