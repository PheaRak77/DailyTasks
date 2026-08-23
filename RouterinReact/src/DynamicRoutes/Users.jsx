import { useParams } from "react-router-dom";

function Users() {
  const { id } = useParams();
  return <div>Users usersing system id : {id}</div>;
}

export default Users;
