import coreState from "./coreState";
const clone = require("rfdc")();

const getCoreState = key => {
  try {
    const stateValue = coreState[key];

    if (stateValue === null || stateValue === undefined) {
      throw new Error(`null or undefined value: ${key}`);
    }

    const returnValue = clone(stateValue);

    return returnValue;
  } catch (error) {
    const spacing = "5px";
    const styles = `padding: ${spacing}; background-color: darkblue; color: white; font-style: 
     italic; border: ${spacing} solid crimson; font-size: 1.2em;`;
    console.error("%cError", styles, error.message);
  }
};

export default getCoreState;
