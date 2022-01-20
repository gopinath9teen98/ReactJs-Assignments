import "./styles.css";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>name </th>
            <th>username</th>
            <th>email</th>
            <th>street</th>
            <th>suite</th>
            <th>city</th>
            <th>zipcode</th>
            <th>lat</th>
            <th>lng</th>


          </tr>
        </thead>
        {data &&
          data.map((item, index) => {
            return (
              <tbody>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>

                  <td>{item.address.street}</td>
                  <td>{item.address.suite}</td>
                  <td>{item.address.city}</td>
                  <td>{item.address.zipcode}</td>
                  <td>{item.address.geo.lat}</td>
                  <td>{item.address.geo.lng}</td>
             </tr>
              </tbody>
            );
          })}
      </Table>
    </div>
  );
}
