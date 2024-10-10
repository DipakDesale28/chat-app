/* eslint-disable react/prop-types */
import Avatar from "./Avatar";

export default function Contact({
  id,
  username,
  selectContact,
  selected,
  online,
}) {
  return (
    <div
      key={id}
      onClick={selectContact}
      className={
        "border-b border-grey-100 flex items-center gap-2 cursor-pointer " +
        (selected ? "bg-blue-100" : "")
      }
    >
      {selected && <div className="w-1 h-12 bg-blue-500 rounded-r-md "></div>}
      <div className="flex gap-2 py-2 pl-4 items-center ">
        <Avatar username={username} userId={id} online={online} />
        <span className="text-gray-800">{username}</span>
      </div>
    </div>
  );
}
