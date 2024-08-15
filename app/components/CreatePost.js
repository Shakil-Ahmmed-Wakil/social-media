import { IconMapPin, IconMoodSmile, IconPhoto } from "@tabler/icons-react";

export default function CreatePost() {
  return (
    <form className="create-post bg-white p-5 rounded-lg flex md:flex-col gap-5">
      <div className="flex gap-3">
        <img
          className="profile-picture size-10 rounded-full"
          src="profile.jpg"
          alt="Profile Picture"
        />
        <textarea
          className="resize-none w-full placeholder:text-sm pt-1"
          placeholder="What's on your mind?"
        ></textarea>
      </div>

      <div className="flex justify-between">
        <div className="btn-group flex items-center gap-2.5">
          <button className="icon-text-btn flex flex-col md:flex-row items-center gap-x-1">
            <IconPhoto className="text-green-600 md:text-current" />
            <span>Photo</span>
          </button>
          <button className="icon-text-btn hidden md:flex items-center gap-1">
            <IconMapPin />
            <span className="hidden md:inline">Check In</span>
          </button>
          <button className="icon-text-btn hidden md:flex items-center gap-1">
            <IconMoodSmile />
            <span className="hidden md:inline">Feeling/Activity</span>
          </button>
        </div>
        <button
          className="rounded-md bg-blue-500 text-white px-5 py-2 hidden"
          type="submit"
        >
          Post
        </button>
      </div>
    </form>
  );
}
