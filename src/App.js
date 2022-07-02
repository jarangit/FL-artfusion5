import BoxAccording from "./components/box/boxAccording";
import BoxLabel from "./components/box/boxLabel";
import Footer from "./components/box/footer";

function App() {
  return (
    <div>
      <div id="_lg_form_"></div>
      <div>
        <div className="my_container py-20">
          <BoxLabel />
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="my_container py-20">
          <BoxAccording />
        </div>
      </div>
      <div className="">
        <div className="my_container py-20">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
