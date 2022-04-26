import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { useEffect, useState } from "react";

function App() {
  const [toDoText, setToDoText] = useState("");
  const handelText = () => {
    fetch("http://localhost:5000/todo", {
      method: "POST", // or 'PUT'
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ toDoText }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  const [dbtexts, setdbtext] = useState([]);
  useEffect(() => {}, [dbtexts]);

  return (
    <div className="container">
      <div>
        <h2 className="text-danger text-center text-uppercase mt-5">
          To do list
        </h2>
        <div className="text-center w-50 m-auto">
          <InputGroup className="mt-2">
            <FormControl
              value={toDoText}
              onChange={(e) => setToDoText(e.target.value)}
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

      <table className="mt-2 table table-bordered border-primary">
        <thead>
          <tr>
            <th scope="col" className="text-uppercase text-center">
              #
            </th>
            <th scope="col" className="text-uppercase text-center">
              description
            </th>
            <th colspan="2" className="text-uppercase text-center">
              Handle
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
