export default function AsideContacts() {
    return (
      <aside className="w-60 p-2.5 hidden md:flex flex-col gap-5">
        <h2 className="font-bold text-xl">Friends</h2>
        <Profile name="Wakil Ahmed" imgName="wakil-pp.jpg" />
        <Profile name="Wakil Ahmed" imgName="wakil-pp.jpg" />
        <Profile name="Wakil Ahmed" imgName="wakil-pp.jpg" />
        <Profile name="Wakil Ahmed" imgName="wakil-pp.jpg" />
        <Profile name="Wakil Ahmed" imgName="wakil-pp.jpg" />
        <Profile name="Wakil Ahmed" imgName="wakil-pp.jpg" />
        <Profile name="Wakil Ahmed" imgName="wakil-pp.jpg" />
        <Profile name="Wakil Ahmed" imgName="wakil-pp.jpg" />
        <Profile name="Wakil Ahmed" imgName="wakil-pp.jpg" />
        <Profile name="Wakil Ahmed" imgName="wakil-pp.jpg" />
        <Profile name="Wakil Ahmed" imgName="wakil-pp.jpg" />
      </aside>
    );
}

function Profile(props) {
    return (
      <div className="flex items-center p-2.5 gap-2.5 hover:bg-gray-200">
        <img
          className="profile-picture w-8 rounded-full"
          src={props.imgName}
          alt={props.name}
        />
        <p>{props.name}</p>
      </div>
    );
}