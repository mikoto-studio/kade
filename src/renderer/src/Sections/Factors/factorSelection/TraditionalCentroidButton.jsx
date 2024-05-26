import styled from 'styled-components';

import React from 'react';
// import centroidDispatch from "../centroidLogic/centroidDispatch";
import factorState from '../../GlobalState/factorState';
// import appState from "../../GlobalState/appState";
import GeneralButton from './../../../Utils/GeneralButton';
import { useTranslation } from 'react-i18next';
import getFactorState from '../../GlobalState/getFactorState';

const handleOnclick = () => {
  factorState.showNumberOfCentroidFacToExtract = true;
  factorState.activeTraditionalCentroidFactorButton = true;
  factorState.isTraditionalCentroidDisabled = true;
  factorState.isHorst55Disabled = true;

  // // show spinner duirng calcs
  // factorState.showCentroidSpinner = true;
  // const numFactors = getFactorState("numCentroidFactors");
  // // Brown centroids calcs start
  // centroidDispatch(numFactors);
  // factorState.numFacsForTableWidth = numFactors;
  // // hide spinner since calcs are done
  // factorState.showCentroidSpinner = false;
  // factorState.showUnrotatedFactorTable = true;
  // factorState.showEigenvaluesTable = true;
  // factorState.showScreePlot = true;
  // factorState.activeTraditionalCentroidFactorButton = true;
  // factorState.isPcaButtonDisabled = true;
  // factorState.disabledCentroidFactorButton = true;
  // factorState.isHorst55Disabled = true;
  // factorState.isTuckerMacCallumCentroidDisabled = true;
  // factorState.isCentroidFacSelectDisabled = true;
  // rotationState.showKeepFacForRotButton = true;
  // appState.isFactorsButtonGreen = true;
  // factorState.isTraditionalCentroidDisabled = true;
  // factorState.showNumberOfCentroidFacToExtract = true;
  // // setTimeout(function() {
  // // }, 500);
};

const TraditionalCentroidButton = () => {
  const { t } = useTranslation();

  // getState
  const isActive = getFactorState('activeTraditionalCentroidFactorButton');
  const isDisabled = getFactorState('isTraditionalCentroidDisabled');
  // const isCentroidLoading = getFactorState("isCentroidLoading");

  return (
    <TradButton
      as={GeneralButton}
      id="traditionalCentroidButton"
      isActive={isActive}
      disabled={isDisabled}
      onClick={handleOnclick}
    >
      Brown <br /> {t('Centroid Factors')}
    </TradButton>
  );
};

export default TraditionalCentroidButton;

const TradButton = styled.div`
  margin-left: 70px;
  margin-right: 5px;
`;
