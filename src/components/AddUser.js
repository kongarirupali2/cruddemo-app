import React, { useState, useContext } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
const initState = {
  sid: "",
  name: "",
  age: "",
};

const AddUser = () => {
  const [data, setData] = useState(initState);
  const { addUser } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit = (e) => {
    const newUser = {
      id: uuid(),
      sid: sid,
      name: name,
      age: age,
    };
    addUser(newUser);
    history.push("/");
    console.log(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const { sid, name, age } = data;

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>SID</Label>
        <Input
          type="text"
          name="sid"
          placeholder="Enter SID"
          onChange={handleChange}
        ></Input>
        <Label>Name</Label>
        <Input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
        ></Input>
        <Label>Age</Label>
        <Input
          type="text"
          name="age"
          placeholder="Enter Age"
          onChange={handleChange}
        ></Input>
      </FormGroup>
      <Button type="submit">Add</Button>
      <Link to="/" className="btn btn-danger ms-lg-2 ms-sm-2">
        Cancel
      </Link>
    </Form>
  );
};

export default AddUser;
