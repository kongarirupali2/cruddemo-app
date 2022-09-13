import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { Link } from "react-router-dom";

const UserList = () => {
  const { users, removeUser } = useContext(GlobalContext);
  console.log(users);
  return (
    <ListGroup>
      {users.map((user) => (
        <ListGroupItem className="d-flex" key={user.id}>
          {/* <strong>{user.sid}</strong> */}
          <span> </span>
          <strong>{user.sid}</strong>
          <span> </span>
          <strong>{user.name}</strong>
          <span> </span>
          <strong>{user.age}</strong>
          <span> </span>
          <div className="ml-auto">
            <Link
              to={`/edit/${user.id}`}
              color="warning"
              className="btn btn-warning mr-1"
            >
              Edit
            </Link>
            <Button onClick={() => removeUser(user.id)} color="danger">
              Delete
            </Button>
          </div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default UserList;
