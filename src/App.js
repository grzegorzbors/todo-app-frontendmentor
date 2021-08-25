import Container from "./components/Container";
import Header from "./components/Header";
import Input from "./components/Input";
import ItemList from "./components/ItemList";
import Actions from "./components/Actions";

import "./sassStyles/_globals.scss";

const App = () => {
  return (
    <div className="App">
      <Container>
        <Header />
        <Input />
        <ItemList />
        <Actions />
      </Container>
      <div className="hint">Drag and drop to reorder list</div>
    </div>
  );
};

export default App;
