import Carousel from "./components/Carousel";
import Item from "./components/Item";

function App() {
  return (
    <div className="App mx-auto h-96 w-screen">
      <Carousel>
        <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
      </Carousel>
    </div>
  );
}

export default App;
