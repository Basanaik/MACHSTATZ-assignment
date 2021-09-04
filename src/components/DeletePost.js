import React, { useState, useEffect, Fragment } from "react";
import { Link, useParams, withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
const DeletePost = ({ history }) => {
  let { id } = useParams();
  let [post, setPost] = useState();

  useEffect(() => {
    axios
      .get(`http://3.6.93.159:7883/machstatz/get_all_users`)
      .then((result) => {
        console.log(result.data);
        setPost(result.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  let RemovePost = (e) => {
    axios
      .delete(`http://3.6.93.159:7883/machstatz/get_all_users/`)
      .then((_) => {
        toast.info("successfully post deleted....");
        history.push("/box");
      })
      .catch((err) => console.log(err));
  };

  console.log(post);
  return (
    <div className="container my-4">
      {post === undefined ? (
        "no title"
      ) : (
        <Fragment>
          <h4 className="h4 font-weight-bold text-uppercase text-secondary my-2">
            {post.email}
          </h4>
          <Link to="/box" className="btn btn-secondary col-4">
            go back
          </Link>
          <span>
            <h1>Do you wish to delete</h1>
          </span>
          <button className="btn btn-danger col-4" onClick={RemovePost}>
            <i className="fa fa-trash"></i>
          </button>
        </Fragment>
      )}
    </div>
  );
};

export default withRouter(DeletePost);
