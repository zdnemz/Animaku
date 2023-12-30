import * as React from "react";
import Input from "../components/elements/Input";
import DarkMode from "../components/elements/DarkMode.jsx";
import Form from "../components/elements/Form.jsx";
import Button from "../components/elements/Button";
import Main from "../components/layouts/Main.jsx";

const Login = () => {
  const [input, setInput] = React.useState({
    email: "",
    password: "",
  });

  const [error, setError] = React.useState("");

  const handleLogin = () => {
    try {
      alert("hello");
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <Main clearView full center>
      <DarkMode noview />
      <div>
        <Form
          title="Welcome Back!"
          more="Don't have an account?"
          clickedMore="Register"
          link={"/register"}
          errorMessage={error}
        >
          <Input
            label="Email"
            type="email"
            onChange={(e) => setInput({ ...input, email: e.target.value })}
          />
          <Input
            label="Password"
            type="password"
            onChange={(e) => setInput({ ...input, password: e.target.value })}
          />
          <Button onClick={handleLogin} className="w-full">
            Login
          </Button>
        </Form>
      </div>
    </Main>
  );
};

export default Login;
