import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Container,
  Row,
  Col,
  Input,
  Button,
  FormGroup,
  Form,
  ListGroup,
  ListGroupItem
} from "reactstrap";

class App extends Component {
  componentDidUpdate() {}

  state = {
    todo: [
      {
        id: Math.random()
          .toString(36)
          .substr(2, 9),
        name: "test"
      }
    ],
    text: ""
  };
  addText = () => {
    if (this.state.text)
      this.state.todo.push({
        name: this.state.text,
        id: Math.random()
          .toString(36)
          .substr(2, 9)
      });

    this.setState({
      todo: this.state.todo,
      text: ""
    });
  };

  remove = selectionData => {
    this.setState({
      todo: this.state.todo.filter(a => a.id !== selectionData.id)
    });
  };

  render() {
    return (
      <Container>
        <Row>
          <h1 style={{ textAlign: "center" }}>PWA Todo List</h1>
        </Row>
        <Row>
          <Form inline>
            <FormGroup>
              <Input
                style={{ marginRight: 5 }}
                value={this.state.text}
                onChange={value =>
                  this.setState({
                    text: value.target.value
                  })
                }
                placeholder="Anlamlı Placeholder"
              />
            </FormGroup>
            <Button onClick={this.addText}>Ekle</Button>
          </Form>
        </Row>
        <Row style={{ marginTop: "25px" }}>
          <ListGroup>
            {this.state.todo.map(selectionData => {
              return (
                <ListGroupItem
                  onClick={() => this.remove(selectionData)}
                  style={{ paddingRight: "120px", color: "red" }}
                >
                  {selectionData.name}
                </ListGroupItem>
              );
            })}
          </ListGroup>
        </Row>
      </Container>
    );
  }
}

export default App;
