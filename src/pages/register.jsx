import * as React from "react";
import Input from "../components/elements/Input";
import DarkMode from "../components/elements/DarkMode.jsx";
import Form from "../components/elements/Form.jsx";
import Button from "../components/elements/Button";
import Main from "../components/layouts/Main.jsx";

const Register = () => {
  const [input, setInput] = React.useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
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
          title="Register"
          more="Already have an account?"
          clickedMore="Login"
          link={"/login"}
          errorMessage={error}
        >
          <Input
            label="Name"
            type="text"
            onChange={(e) => setInput({ ...input, username: e.target.value })}
          />
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
          <Input
            label="Password"
            type="password"
            onChange={(e) => setInput({ ...input, confirm: e.target.value })}
          />
          <Button onClick={handleLogin} className="w-full">
            Register
          </Button>
        </Form>
      </div>
    </Main>
  );
};

export default Register;
