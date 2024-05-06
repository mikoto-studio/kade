import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import ExtendedErrorModal from './ExtendedErrorModal';
import inputState from '../../GlobalState/inputState';
import { useTranslation } from 'react-i18next';

const ErrorNotification = () => {
  const { t } = useTranslation();
  const updateShowErrorMessageBar = inputState((state) => state.updateShowErrorMessageBar);
  const updateErrorStackTrace = inputState((state) => state.updateErrorStackTrace);
  const updateIsCsvDataErrorCheckButtonGreen = inputState(
    (state) => state.updateIsCsvDataErrorCheckButtonGreen
  );
  const updateShowDataImportSuccessMessage = inputState(
    (state) => state.updateShowDataImportSuccessMessage
  );

  const showErrorMessageBar = inputState((state) => state.showErrorMessageBar);
  const errorMessage = inputState((state) => state.errorMessage);
  const errorMessageString = `${t('Error')}:  ${errorMessage}`;

  const handleOnClick = () => {
    updateShowErrorMessageBar(false);
    updateErrorStackTrace(t('no stack trace available'));
    updateIsCsvDataErrorCheckButtonGreen(false);
    updateShowDataImportSuccessMessage(false);
  };

  if (showErrorMessageBar) {
    return (
      <ErrorBar>
        <div>{errorMessageString}</div>
        <ExtendedErrorModal />
        <StyledWrapper>
          <Button className="wrapper1" onClick={handleOnClick}>
            {t('Close')}
          </Button>
        </StyledWrapper>
      </ErrorBar>
    );
  }
  return null;
};

export default ErrorNotification;

const ErrorBar = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-items: center;
  left: 155px;
  bottom: 0;
  margin-bottom: 5px;
  z-index: 9999;
  width: calc(100vw - 188px);
  background-color: rgba(255, 102, 102, 0.8);
  height: 50px;
  padding-left: 10px;
  padding-right: 10px;
  font-family: Helvetica, sans-serif;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* 
   #ff6666
  grid-column-start: 1;
  grid-column-end: -1;
  grid-row-start: -1; */
  border-radius: 4px;
`;

const StyledWrapper = styled.div`
/*
  .wrapper1 {
    border: 1px solid black;
    box-shadow: 0 2px 2px 0 black;

    &:hover {
      border: 1px solid black;
      box-shadow: 0 2px 2px 0 black;
    }

    &:active {
      box-shadow: 0 0 1px 0 black inset;
      margin-left: 3px;
    }
    */
  }
`;
