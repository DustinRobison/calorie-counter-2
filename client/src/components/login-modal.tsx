import React from "react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;

    sendLoginRequest(username, password).then((res) => console.log(res));
  };

  const sendLoginRequest = async (username: string, password: string) => {
    const response = await fetch(`http://localhost:3000/api/login/password`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({ username, password }),
    });
    if (response.ok) {
      console.log("Cookie: " + response.headers.get("set-cookie"));
    } else {
      alert("There was a problem");
    }
    return response;
  };

  return (
    <div className={`modal ${isOpen ? "is-active" : ""} is-clipped`}>
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Login</p>
          <button
            className="delete"
            aria-label="close"
            onClick={onClose}
          ></button>
        </header>
        <form name="add-food" onSubmit={handleSubmit}>
          <section className="modal-card-body">
            {/* Name */}
            <div className="field">
              <label className="label">Username:</label>
              <div className="control">
                <input
                  name="username"
                  className="input"
                  type="text"
                  placeholder="jack-sparrow"
                  required={true}
                />
              </div>
            </div>
            {/* Name */}
            <div className="field">
              <label className="label">Food:</label>
              <div className="control">
                <input
                  name="password"
                  className="input"
                  type="password"
                  placeholder="letmein"
                  required={true}
                />
              </div>
            </div>
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success">Login</button>
            <button className="button" onClick={onClose}>
              Cancel
            </button>
          </footer>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
