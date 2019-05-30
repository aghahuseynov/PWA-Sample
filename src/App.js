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
  state = {
    todo: ["What is PWA ?", "PWA convert mobile"]
  };
  text = null;
  addText = () => {
    if (this.text) this.state.todo.push(this.text);
    this.setState({
      todo: this.state.todo
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
                onChange={value => (this.text = value.target.value)}
                placeholder="Bilmiyorum ne acaba ?"
              />
            </FormGroup>
            <Button onClick={this.addText}>Ekle</Button>
          </Form>
        </Row>
        <Row style={{ marginTop: "25px" }}>
          <ListGroup>
            {this.state.todo.map(text => {
              return (
                <ListGroupItem style={{ paddingRight: "120px", color: "red" }}>
                  {text}
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
