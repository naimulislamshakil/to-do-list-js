import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const handelText = () => {
    const textField = document.getElementById("des").value;
    setText(textField);
  };
  console.log(text);
  return (
    <div>
      <div>
        <h2 className="text-danger text-center text-uppercase mt-5">
          To do list
        </h2>
        <div className="container text-center w-50 m-auto">
          <InputGroup className="mt-2">
            <FormControl
              placeholder="Enter your item list..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              id="des"
            />
            <Button
              onClick={handelText}
              className="ms-1"
              variant="outline-danger"
              id="button-addon2"
            >
              Button
            </Button>
          </InputGroup>
        </div>
      </div>
    </div>
  );
}

export default App;
