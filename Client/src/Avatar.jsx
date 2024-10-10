/* eslint-disable react/prop-types */
export default function Avatar({ userId, username, online }) {
  const colors = [
    "bg-red-200",
    "bg-yellow-200",
    "bg-blue-200",
    "bg-purple-200",
    "bg-teal-200",
    "bg-green-200",
  ];
  const userBase10 = parseInt(userId, 16);
  const colorIndex = userBase10 % colors.length;
  const color = colors[colorIndex];
  return (
    <div className={"w-8 h-8 relative rounded-full flex items-center " + color}>
      <div className="text-center w-full opacity-70">{username[0]}</div>
      {online && (
        <div className="absolute w-2 h-2 bg-green-400 -right-0 -bottom-0 border-white rounded-full"></div>
      )}
      {!online && (
        <div className="absolute w-2 h-2 bg-gray-400 -right-0 -bottom-0 border-white rounded-full"></div>
      )}
    </div>
  );
}
