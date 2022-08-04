import Carousel from "./components/Carousel";

const dummyData = [...Array(8)]

function App() {
  return (
    <div className="w-screen mx-auto App h-96">
      <Carousel >
        {dummyData.map((item, index) => (
           <div className="w-3/4 h-full bg-red-500" key={index} >
            {index}
           </div>
        ) )}
      </Carousel>
    </div>
  );
}


export default App;
