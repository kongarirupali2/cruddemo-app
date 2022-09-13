import React, { useState, useEffect, useContext } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

const EditUser = (props) => {
  const { editUser, users } = useContext(GlobalContext);
  const [selectedUser, setSelectedUser] = useState({
    //id: "",
    name: "",
    sid: "",
    age: "",
  });

  const history = useHistory();
  const currentUserId = props.match.params.id;

  useEffect(() => {
    const userId = currentUserId;
    const selectedUser = users.find((user) => user.id === userId);
    console.log(selectedUser);
    setSelectedUser(selectedUser);
  }, [currentUserId, users]);

  const onSubmit = (e) => {
    e.preventDefault();
    editUser(selectedUser);
    history.push("/");
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setSelectedUser({ ...selectedUser, [name]: value });
  };

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label>SID</Label>
          <Input
            type="text"
            name="sid"
            placeholder="Enter Id"
            value={selectedUser.sid}
            onChange={onChange}
          ></Input>
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={selectedUser.name}
            onChange={onChange}
          ></Input>
          <Label>Age</Label>
          <Input
            type="text"
            name="age"
            placeholder="Enter age"
            value={selectedUser.age}
            onChange={onChange}
          ></Input>
        </FormGroup>
        <Button type="submit">Edit</Button>
        <Link to="/" className="btn btn-danger ms-lg-2 ms-sm-2">
          Cancel
        </Link>
      </Form>
    </div>
  );
};

export default EditUser;
