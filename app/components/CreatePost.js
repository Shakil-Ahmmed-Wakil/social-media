import { UilImage, UilMapMarker, UilSmile } from "@iconscout/react-unicons";

export default function CreatePost() {
  return (
    <form className="create-post bg-white p-5 rounded-lg w-full flex flex-col gap-5">
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
            <UilImage />
            <span>Photo/Video</span>
          </button>
          <button className="icon-text-btn">
            <UilMapMarker />
            <span>Check In</span>
          </button>
          <button className="icon-text-btn">
            <UilSmile />
            <span>Feeling/Activity</span>
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
