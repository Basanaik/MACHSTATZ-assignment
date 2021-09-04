import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Box = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://3.6.93.159:7883/machstatz/get_all_users")
      .then((posts) => {
        setPosts(posts.data);
      })
      .catch((err) => console.log(err));
  }, []);

  let PostsData = posts.map((post) => {
    return (
      <Fragment key={post.id}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{post.id}</h5>
            <div className="btn-group">
              <Link to={`/create-post`} className="btn btn-outline-primary">
                <i class="fa fa-user-plus" aria-hidden="true"></i>
              </Link>

              <Link to={`/delete-post/`} className="btn btn-outline-danger">
                <i class="fa fa-trash-o" aria-hidden="true"></i>
              </Link>
            </div>
            <h5 className="card-title">{post.email}</h5>
            <h5 className="card-title">{post.fist_name}</h5>
            <h5 className="card-title">{post.last_name}</h5>
            <h5 className="card-title">{post.pwd}</h5>
            <h5 className="card-title">{post.username}</h5>
          </div>
        </div>
      </Fragment>
    );
  });
  return (
    <Fragment>
      {/* <div className="row"> */}
      <div className="col-sm-3">
        <div className="card">
          <div>{PostsData}</div>
        </div>
      </div>
      {/* </div> */}
    </Fragment>
  );
};

export default Box;
