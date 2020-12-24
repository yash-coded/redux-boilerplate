import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import {
  increaseCounter,
  decreaseCounter,
} from "./redux/Counter/counter.actions";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>{props.count}</div>
        <div>
          <button onClick={() => props.increaseCounter()}>
            Increase Count
          </button>

          <button onClick={() => props.decreaseCounter()}>
            Decrease Count
          </button>
        </div>
      </header>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch(decreaseCounter()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
