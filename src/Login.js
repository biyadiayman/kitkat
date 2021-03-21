import React from "react";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  return (
    <>
      <section className="bg-gray-100 h-screen flex flex-col items-center justify-center">
        <div className="loginContainer shadow-lg bg-indigo-100 font-bold rounded-3xl p-10 space-y-5 space-x-2 flex flex-col justify-center">
          <label>Username</label>
          <input
            type="text"
            autoFocus
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="errorMsg text-red-600">{emailError}</p>
          <label>Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="errorMsg text-red-600">{passwordError}</p>
          <div className="btnContainer">
            {hasAccount ? (
              <>
                <button
                  className=" text-xl font-bold bg-indigo-400 py-3 rounded-xl px-10"
                  onClick={handleLogin}
                >
                  Sign in
                </button>
                <p>
                  Don't have an account ?
                  <span
                    className="underline"
                    onClick={() => setHasAccount(!hasAccount)}
                  >
                    Sign up
                  </span>
                </p>
              </>
            ) : (
              <>
                <button
                  className=" text-xl font-bold bg-indigo-400 py-3 rounded-xl px-10"
                  onClick={handleSignup}
                >
                  Sign up
                </button>
                <p>
                  Have an account ?
                  <span
                    className="underline"
                    onClick={() => setHasAccount(!hasAccount)}
                  >
                    Sign in
                  </span>
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
