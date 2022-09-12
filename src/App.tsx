import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Form } from "./components/Form/Form";

import GlobalStyle, { Row, Section, Text } from "./globalStyles";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Row style={{ background: "#6495ED" }}>
        <Link to="/">
          <Text>Home</Text>
        </Link>
        <Link to="/signup">
          <Text>Signup</Text>
        </Link>
      </Row>
      <Switch>
        <Route path="/" exact component={() => <Section>Home</Section>} />
        <Route path="/signup" exact component={Form} />
      </Switch>
    </Router>
  );
}

export default App;
