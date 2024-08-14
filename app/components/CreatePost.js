import { IconMapPin, IconMoodSmile, IconPhoto } from "@tabler/icons-react";

export default function CreatePost() {
  return (
    <form className="create-post bg-white p-5 rounded-lg flex flex-col gap-5">
      <div className="flex gap-3">
        <img
          className="profile-picture size-10 rounded-full"
          src="profile.jpg"
          alt="Profile Picture"
        />
        <textarea
          className="grow"
          placeholder="What's on your mind?"
        ></textarea>
      </div>

      <div className="flex justify-between">
        <div className="btn-group flex items-center gap-2.5">
          <button className="icon-text-btn">
            <IconPhoto />
            <span className="hidden md:inline">Photo/Video</span>
          </button>
          <button className="icon-text-btn">
            <IconMapPin />
            <span className="hidden md:inline">Check In</span>
          </button>
          <button className="icon-text-btn">
            <IconMoodSmile />
            <span className="hidden md:inline">Feeling/Activity</span>
          </button>
        </div>
        <button
          className="rounded-md bg-blue-500 text-white px-5 py-2"
          type="submit"
        >
          Post
        </button>
      </div>
    </form>
  );
}
