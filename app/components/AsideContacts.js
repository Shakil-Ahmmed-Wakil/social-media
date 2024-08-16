export default function AsideContacts() {
    return (
      <aside className="w-60 hidden md:flex flex-col">
        <h2 className="font-bold text-xl">Friends</h2>
        <Profile name="Wakil Ahmed" imgName="profile.jpg" />
        <Profile name="Wakil Ahmed" imgName="profile.jpg" />
        <Profile name="Wakil Ahmed" imgName="profile.jpg" />
        <Profile name="Wakil Ahmed" imgName="profile.jpg" />
        <Profile name="Wakil Ahmed" imgName="profile.jpg" />
        <Profile name="Wakil Ahmed" imgName="profile.jpg" />
        <Profile name="Wakil Ahmed" imgName="profile.jpg" />
        <Profile name="Wakil Ahmed" imgName="profile.jpg" />
        <Profile name="Wakil Ahmed" imgName="profile.jpg" />
        <Profile name="Wakil Ahmed" imgName="profile.jpg" />
        <Profile name="Wakil Ahmed" imgName="profile.jpg" />
      </aside>
    );
}

function Profile(props) {
    return (
      <div className="flex items-center p-2.5 gap-2.5 hover:bg-gray-200 rounded-md">
        <img
          className="profile-picture w-9 rounded-full"
          src={props.imgName}
          alt={props.name}
        />
        <p className="text-sm font-medium">{props.name}</p>
      </div>
    );
}