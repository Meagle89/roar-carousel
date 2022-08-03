import Carousel from "./components/Carousel";
import Item from "./components/Item";

function App() {
  return (
    <div className="w-screen mx-auto App h-96">
      <Carousel>
        <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
        <Item>4</Item>
        <Item>5</Item>
        <Item>6</Item>
      </Carousel>
    </div>
  );
}

export default App;
