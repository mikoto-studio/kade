import React from "react";
import styled from "styled-components";
import { view, store } from "react-easy-state";
import state from "../../../store";
import uploadMotivationalData from "./uploadMotivationalData";
import revertLoadButtonsColors from "./revertLoadButtonsColors";

const localStore = store({
  isLoadMotivationalButtonGreen: false
});

const handleClick = () => {
  const isDataAlreadyLoaded = state.getState("isDataAlreadyLoaded");
  if (isDataAlreadyLoaded) {
    state.setState({
      showErrorMessageBar: true,
      errorMessage: `Data are already loaded, click "Clear Project" to restart`,
      extendedErrorMessage: `Data have already been loaded and the analysis has started. To clear this analysis and restart the application, click the "Clear Project" button near the bottom of the navigation panel.`,
      errorStackTrace: "no stack trace available"
    });
  } else {
    uploadMotivationalData();
    revertLoadButtonsColors();
    state.setState({
      isLoadMotivationalButtonGreen: true,
      notifyDataUploadSuccess: true,
      isInputButtonGreen: true,
      isDataButtonGreen: true
    });
  }
};

class MotivationalButton1 extends React.Component {
  render() {
    const isLoadMotivationalButtonGreen = state.getState(
      "isLoadMotivationalButtonGreen"
    );
    localStore.isLoadMotivationalButtonGreen = isLoadMotivationalButtonGreen;
    return (
      <div>
        <LoadTxtButton
          id="motivationalButton"
          floated="right"
          onClick={handleClick}
          isActive={localStore.isLoadMotivationalButtonGreen}
        >
          Load Motivational
        </LoadTxtButton>
      </div>
    );
  }
}

export default view(MotivationalButton1);

const LoadTxtButton = styled.button`
  display: grid;
  align-items: center;
  justify-items: center;
  background-color: ${props =>
    props.isActive ? "rgba(144,	238, 144, .6)" : "#d6dbe0"};
  height: 60px;
  width: 240px;
  border: 1px solid black;
  text-align: center;
  font-size: 16px;
  font-family: Helvetica, sans-serif;
  font-weight: normal;
  border-radius: 4px;
  margin-right: 3px;
  margin-bottom: 3px;
  box-shadow: 0 2px 2px 0 black;
  user-select: none;
  outline: none;

  &:hover {
    background-color: ${props => (props.isActive ? "#009a00" : "#abafb3")};
  }

  &:active {
    box-shadow: 0 0 1px 0 black inset;
    background-color: rgba(144, 238, 144, 0.6);
  }
`;
