import {
  UilCommentAlt,
  UilEllipsisH,
  UilShare,
  UilThumbsUp,
} from "@iconscout/react-unicons";

export default function PostCard() {
  return (
    <div className="post-card rounded-lg bg-white p-5 flex flex-col gap-5">
      <div className="post-header flex justify-between items-center">
        <div className="flex items-center gap-2">
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
        <UilEllipsisH color="#808080" />
      </div>
      <div className="post-content flex flex-col gap-5">
        <p>Lorem ipsum dolor sit amet</p>
        <img
          className="post-image rounded-lg"
          src="https://picsum.photos/1000"
          alt="Post Image"
        />
      </div>

      <div className="flex justify-between">
        <div className="flex gap-1">
          <UilThumbsUp />
          <span>Wakil Ahmed, and 5 others</span>
        </div>
        <div className="flex gap-2">
          <span>41 Comments</span>
          <span>3 shares</span>
        </div>
      </div>

      <div className="flex justify-around">
        <button className="icon-text-btn">
          <UilThumbsUp />
          <span>Like</span>
        </button>
        <button className="icon-text-btn">
          <UilCommentAlt />
          <span>Comment</span>
        </button>
        <button className="icon-text-btn">
          <UilShare />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
}
