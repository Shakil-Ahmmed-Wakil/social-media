import { IconDots, IconMessageCircle, IconShare3, IconThumbUp } from "@tabler/icons-react";

export default function PostCard() {
  return (
    <div className="post-card rounded-lg bg-white p-5 flex flex-col gap-5 max-w-full">
      <div className="post-header flex justify-between items-center gap-4">
        <div className="flex gap-2">
          <img
            className="rounded-full size-10"
            src="profile.jpg"
            alt="Profile Picture"
          />
          <div className="flex flex-col">
            <p>
              <strong>Shakil Ahmmed</strong>
              <span>
                {" "}
                shared an <span className="text-blue-500">album</span>
              </span>
            </p>
            <span>2 mins ago</span>
          </div>
        </div>
        <IconDots />
      </div>
      <div className="post-content flex flex-col gap-5">
        <p>Lorem ipsum dolor sit amet</p>
        <img
          className="post-image rounded-lg"
          src="https://picsum.photos/1280/720"
          alt="Post Image"
        />
      </div>

      <div className="flex justify-between text-xs">
        <div className="flex items-center gap-1">
          <IconThumbUp />
          <span>
            Wakil Ahmed
          </span>
        </div>
        <div className="flex gap-2">
          <span>41 Comments</span>
          <span>3 shares</span>
        </div>
      </div>

      <div className="flex justify-around">
        <button className="icon-text-btn">
          <IconThumbUp />
          <span>Like</span>
        </button>
        <button className="icon-text-btn">
          <IconMessageCircle />
          <span>Comment</span>
        </button>
        <button className="icon-text-btn">
          <IconShare3 />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
}
