import { UilEllipsisH, UilImage, UilMapMarker, UilSmile } from "@iconscout/react-unicons";

import Header from "./components/Header";

import Aside from "./components/Aside";

export default function Home() {
  return (
    <>
      <Header />
      <main className="px-5 flex gap-5 items-start">
        <Aside />
        <section className="flex flex-col gap-5 grow">
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
            <hr />
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
                Share
              </button>
            </div>
          </form>
          <section className="all-posts">
          <div className="post-card rounded-lg bg-white p-5 flex flex-col gap-5">
            <div className="post-header flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img
                  className="rounded-full size-10"
                  src="profile.jpg"
                  alt="Profile Picture"
                />
                <div className="flex flex-col">
                  <strong>Shakil Ahmmed</strong>
                  <span>2 mins ago</span>
                </div>
              </div>
              <UilEllipsisH color="#808080" />
            </div>
            <div className="post-content flex flex-col gap-5">
              <p>Lorem ipsum dolor sit amet</p>
              <img src="https://picsum.photos/1000" alt="Post photo" />
            </div>
          </div>
          </section>
        </section>
      </main>
    </>
  );
}
