import { useReducer } from "react";
import CompC from "./CompC";
// REDUCER -> reduces mulitple functions to one function; using switch condition;
const CompB = () => {
  // const initalState = { count: 0 };

  // const reducer = (state, action) => {
  //   switch (action) {
  //     case "INCREMENT":
  //       return {
  //         count: state.count + 1,
  //       };
  //     case "DECREMENT":
  //       return {
  //         count: state.count - 1,
  //       };
  //     case "RESET":
  //       return {
  //         count: 0,
  //       };
  //     case "INCREMENT_BY_5":
  //       return {
  //         count: count + 5,
  //       };
  //     default:
  //       return state;
  //   }
  // };
  const initalState = {
    name: "",
    email: "",
    mobileNumber: "",
  };
  const reducer = (state, action, data) => {
    console.log(action, data);
    switch (action) {
      case "NAME":
        return {
          ...state,
          data,
        };
      case "EMAIL":
        return {
          ...state,
          data,
        };
      case "MOBILENUMBER":
        return {
          ...state,
          data,
        };
    }
  };

  // const count = 0;

  // const reducer = (count, action) => {
  //   switch (action) {
  //     case "INCREMENT":
  //       return count + 1;
  //     case "DECREMENT":
  //       return count - 1;
  //     case "RESET":
  //       return 0;
  //   }
  // };

  const [state, dispatch] = useReducer(reducer, initalState);

  return (
    <div>
      <h1>Comp B</h1>
      <div>
        {/* <h1>COUNTER APP</h1> */}
        {/* <h3>Count: {state.count}</h3> */}
        <div>
          {/* <button onClick={() => dispatch("INCREMENT")}>INCREMENT</button>
          <button onClick={() => dispatch("INCREMENT_BY_5")}>INCREMENT</button>

          <button onClick={() => dispatch("DECREMENT")}>DECREMENT</button>
          <button onClick={() => dispatch("RESET")}>RESET</button> */}
          <h1>USER FORM</h1>

          <div>
            <label>NAME:</label>
            <input
              placeholder="Enter name"
              // value={state.name}
              name="name"
              onChange={(e) => dispatch("NAME", { name: e.target.value })}
            />
          </div>
          <div>
            <label>EMAIL:</label>
            <input
              type="email"
              placeholder="Enter email"
              // value={state.email}
              name="email"
              onChange={(e) => dispatch("EMAIL", { email: e.target.value })}
            />
          </div>
          <div>
            <label>MOBILE NUMBER:</label>
            <input
              type="text"
              placeholder="Enter mobile number"
              // value={state.mobileNumber}
              name="mobileNumber"
              onChange={(e) =>
                dispatch("MOBILENUMBER", { mobileNumber: e.target.value })
              }
            />
          </div>

          <div>
            <h2>NAME: {state.name}</h2>
            <h2>EMAIL: {state.email}</h2>
            <h2>MOBILE NUMBER: {state.mobileNumber}</h2>
          </div>
        </div>
      </div>
      <CompC />
    </div>
  );
};

export default CompB;
