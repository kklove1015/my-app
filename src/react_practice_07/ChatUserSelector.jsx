import { useState } from "react";
import useUserStatus from "./useUserStatus";

const userList = [
  { id: 1, name: "damin" },
  { id: 2, name: "chany" },
];

function ChatUserSelector(props) {
  const [userId, setUserId] = useState(1);
  const isUserOnline = useUserStatus(userId);

  return (
    <div>
      <circle color={isUserOnline ? "green" : "black"} />
      <select
        value={userId}
        onChange={(event) => setUserId(Number(event.target.value))}
      >
        {userList.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ChatUserSelector;
