import { UilUser, UilMapMarker, UilSmile } from "@iconscout/react-unicons";

import Header from "./components/Header";

import Aside from "./components/Aside";

export default function Home() {
  return (
    <>
      <Header />
      <main className="px-8 flex gap-5 items-start">
        <Aside />
        <section className="flex flex-column gap-5 grow">
          <section className="create-post bg-white p-5 rounded-md w-full">
            <div className="flex gap-2.5">
              <img
                className="profile-picture w-12 h-12 rounded-full"
                src="profile.jpg"
                alt="Profile Picture"
              />
              <textarea
                className="bg-transparent"
                placeholder="What's on your mind?"
              ></textarea>
            </div>
            <div className="flex justify-between">
              <div className="btn-group flex items-center gap-2.5">
                <button className="icon-text-btn">
                  <UilUser />
                  <span>People</span>
                </button>
                <button className="icon-text-btn">
                  <UilMapMarker />
                  <span>Check In</span>
                </button>
                <button className="icon-text-btn">
                  <UilSmile />
                  <span>Mood</span>
                </button>
              </div>
              <button className="rounded-md bg-blue-500 text-white px-5 py-2">
                Share
              </button>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
