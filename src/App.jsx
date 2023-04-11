import "./App.css";
import "./index.css";
import store from "./store/store";

function IncrementValue({ item }) {
  return (
    <button
      onClick={() => {
        const state = store.getState();
        store.setState({
          ...state,
          [item]: state[item] + 1,
        });
      }}
      className="px-10 py-3 mx-10 bg-slate-500 my-5"
    >
      Increment {item}
    </button>
  );
}

function DisplayValue({item}) {
  return <div className="px-10 py-3 mx-10 bg-slate-500 my-5">
    {item} :   {store.getState()[item]}
  </div>
}


function App() {
  return (
    <div className="grid grid-cols-2 mt-10">
      <IncrementValue item="value1" />
      <DisplayValue item="value1" />
      <IncrementValue item="value2" />
      <DisplayValue item="value2" />
    </div>
  );
}

export default App;
