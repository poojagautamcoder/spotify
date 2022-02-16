import React, { useState } from "react";

const Signup = () => {
  const [user, setUser] = useState({
    name: " ",
    password: " ",
    repassword: " ",
  });

  let name, value ;
const getSignup = (event) => {
 name = event.target.name;
 value = event.target.value;

 setUser({...user,[name]: value});
}
const postData = () => {

}

  return (
    <div className="signup">
      <form onSubmit={postData} method="POST">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            User Name
          </label>
          <input
            type="name"
            value={user.name}
            name="name"
            onChange={getSignup}
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            value={user.password}
            name="password"
            onChange={getSignup}
            class="form-control"
            id="exampleInputPassword1"
            required
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Confirm-Password
          </label>
          <input
            type="password"
            value={user.repassword}
            name="repassword"
            onChange={getSignup}
            class="form-control"
            id="exampleInputPassword1"
            required
          />
        </div>

        <button type="submit" class="btn btn-primary">
       Sign up
        </button>
      </form>
    </div>
  );
};
export default Signup;