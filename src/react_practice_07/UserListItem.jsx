import PropTypes from "prop-types";
import useUserStatus from "./useUserStatus";

function UserListItem(props) {
  const isOnline = useUserStatus(props.user.id);

  return (
    <li style={{ color: isOnline ? "green" : "black" }}>{props.user.name}</li>
  );
}
UserListItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserListItem;
