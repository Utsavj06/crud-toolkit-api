import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input, Button, Card, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { createPost } from "../redux/features/postSlice";

const CreatePost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [value, setValue] = useState({ title: "", body: "" });
  const { title, body } = value;
  const [show, setShow] = useState(false);

  const handleSubmit =(e) => {
    e.preventDefault();
    dispatch(createPost({value}))
    setValue({title: '', value: ''})
    setShow(true)
  }
  return (
    <div>
      <form onSumit={handleSubmit}>
        <h1>Create Post</h1>
        <Input
          placeholder="Enter Title"
          type="text"
          onChange={(e) => setValue({ ...value, title: e.target.value })}
          value={title}
          style={{width: '400px'}}
        />
        <br />
        <br />
        <Input.TextArea
          placeholder="Enter Body"
          type="text"
          onChange={(e) => setValue({ ...value, body: e.target.value })}
          value={body}
          style={{width: '400px'}}
          size='large'
        />
        <br />
        <br />
        <Space style={{margin:10}}>
          <Button onClick={()=> navigate('/')}>Go Back</Button>
          <Button type='primary' htmlType="submit">Submit</Button>
        </Space>
      </form>
    </div>
  );
};

export default CreatePost;
