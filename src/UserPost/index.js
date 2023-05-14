import React, { useState, useEffect } from "react";
import { Button, Card, Input, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deletePost, getPost } from "../redux/features/postSlice";
import LoadingCard from "./LoadingCard";

const UserPost = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, post } = useSelector((state) => ({ ...state.app }));
  const [id, setId] = useState();
  const fetchUserPost = () => {
    if (!id) {
      window.alert("pass id");
    } else {
      dispatch(getPost({ id }));
      setId("");
    }
  };
  console.log(post);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Fetching Post</h1>
      <Input
        placeholder="Enter User Id"
        type="number"
        onChange={(e) => setId(e.target.value)}
        value={id}
        style={{ width: "300px" }}
      />
      <br />
      <br />
      <Space size="small" style={{ margin: 10 }}>
        <Button type="primary" onClick={fetchUserPost}>
          Fetch User Post
        </Button>
        <Button type="primary" onClick={() => navigate("/create-post")}>
          Create User Post
        </Button>
      </Space>
      <br />
      <br />
      {loading ? (
        <LoadingCard count={1} />
      ) : (
        <>
          {post.id && (
            <div className="site-card-border-less-wrapper">
              <Card type="inner" title={post.title}>
                <p>User id : {post.id}</p>
                <span>{post.body}</span>
              </Card>
              <Space
                size="middle"
                style={{ marginTop: 35, marginLeft1: 5, float: "right" }}
              >
                <Button
                  style={{ cursor: "pointer" }}
                  type="primary"
                  danger
                  onClick={() => dispatch(deletePost({ id: post.id }))}
                >
                  Delete
                </Button>
                <Button style={{ cursor: "pointer" }} type="primary">
                  Edit
                </Button>
              </Space>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default UserPost;
