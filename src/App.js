import Container from "./components/Container";
import Header from "./components/Header";
import Input from "./components/Input";
import ItemList from "./components/ItemList";
import Actions from "./components/Actions";

import "./sassStyles/_globals.scss";
import "./sassStyles/_light-theme.scss";

const App = () => {
  return (
    <div className="light__theme main__container mobile">
      <Container className="list__container">
        <Header />
        <Input />
        <ItemList />
        <Actions />
        <div className="hint">Drag and drop to reorder list</div>
      </Container>
    </div>
  );
};

export default App;
