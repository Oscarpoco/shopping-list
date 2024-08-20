import './Login.css';

function UpdateProfile({onCloseUpdate}) {


  return (
    <div className="login">
      <div className="login-form">
        <h2>Update Profile</h2>

        {/* FORM */}
        <form>
          <div className="username">
            <label>Full Name</label>
            <input
              type="text"
              required
            />
          </div>
          <div className="password">
            <label>Password</label>
            <input
              type="password"
              required
            />
          </div>
          <div className="password">
            <label>Confirm Password</label>
            <input
              type="password"
              required
            />
          </div>
          <button type="submit">Update</button>
        </form>
        {/* ENDS */}
        <button onClick={onCloseUpdate} className="close">
          +
        </button>
      </div>
    </div>
  );
}

export default UpdateProfile;