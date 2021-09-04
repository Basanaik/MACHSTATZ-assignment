import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { withRouter } from "react-router-dom";

const CreatePost = ({ history }) => {
  let [post, setPost] = useState({
    email: "",
    fist_name: "",
    last_name: "",
    pwd: "",
    username: "",
    loading: false,
  });

  let handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let postData = {
        email: post.email,
        fist_name: post.fist_name,
        last_name: post.last_name,
        pwd: post.pwd,
        username: post.username,
      };
      setPost({ loading: true });
      let BASE_URL = "http://3.6.93.159:7883/machstatz/add_new_user";
      await axios.post(`${BASE_URL}/box`, postData);
      history.push("/box");
      toast.success("successfully post created");
    } catch (err) {
      console.log(err);
    }

    setPost({ loading: false });
  };

  let { email, fist_name, last_name, pwd, username, loading } = post;
  return (
    <section id="PostsBlock" className="col-md-4 card my-4 mx-auto">
      <article className="card-body">
        <h2 className="display-5 font-weight-bold text-dark text-center text-uppercase">
          Create User
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              id="email"
              value={email}
              onChange={handleChange}
              placeholder="enter  email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="fist_name">fist_name</label>
            <input
              type="text"
              className="form-control"
              name="fist_name"
              id="fist_name"
              value={fist_name}
              onChange={handleChange}
              placeholder="enter  fist_name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="last_name">last_name</label>
            <input
              type="text"
              className="form-control"
              name="last_name"
              id="last_name"
              value={last_name}
              onChange={handleChange}
              placeholder="enter  last_name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="last_name">pwd</label>
            <input
              type="text"
              className="form-control"
              name="pwd"
              id="pwd"
              value={pwd}
              onChange={handleChange}
              placeholder="enter  pwd"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              id="username"
              value={username}
              onChange={handleChange}
              placeholder="enter  username"
              required
            />
          </div>

          <div className="form-group">
            <button className="btn btn-success btn-block my-2">
              {loading ? "loading..." : "Create User"}
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default withRouter(CreatePost);
