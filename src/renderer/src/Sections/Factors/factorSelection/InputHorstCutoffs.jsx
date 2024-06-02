import React from 'react';
import styled from 'styled-components';
import GeneralButton from '../../../Utils/GeneralButton';
import horstDispatcher from '../centroidLogic/horst55Logic/horstDispatcher';
import HorstNumberInput from './HorstNumberInput';
import { useTranslation } from 'react-i18next';
import appState from '../../GlobalState/appState';
import factorState from '../../GlobalState/factorState';

const UseHorstAutoStop = () => {
  const { t } = useTranslation();

  // getState
  const showUseHorstIterationSetup = factorState('showUseHorstIterationSetup');
  const horstExtractActive = factorState('horstExtractActive');
  const horstExtractDisabled = factorState('horstExtractDisabled');
  const horstIterations = factorState('horstIterations');
  const horstThresholdLevel = factorState('horstThresholdLevel');
  const updateShowCentroidSpinner = factorState('updateShowCentroidSpinner');
  const updateShowUnrotatedFactorTable = factorState('updateShowUnrotatedFactorTable');
  const updateShowEigenvaluesTable = factorState('updateShowEigenvaluesTable');
  const updateShowScreePlot = factorState('updateShowScreePlot');
  const updateHrstExtractActive = factorState('updateHrstExtractActive');
  const updateHorstExtractDisabled = factorState('updateHorstExtractDisabled');
  const updateIsFactorsButtonGreen = appState((state) => state.updateIsFactorsButtonGreen);
  const updateShowKeepFacForRotButton = factorState((state) => state.updateShowKeepFacForRotButton);

  const handleClick = () => {
    const shouldUseHorstLimit = true;
    updateShowCentroidSpinner(true);
    // call function
    horstDispatcher(shouldUseHorstLimit);
    updateShowCentroidSpinner(false);
    updateShowUnrotatedFactorTable(true);
    updateShowEigenvaluesTable(true);
    updateShowScreePlot(true);
    updateShowKeepFacForRotButton(true);
    updateIsFactorsButtonGreen(true);
    updateHrstExtractActive(true);
    updateHorstExtractDisabled(true);
  };

  if (showUseHorstIterationSetup) {
    return (
      <React.Fragment>
        <TextSpanLabel>{`${t('Horst Limit Iteration Parameters')}`}</TextSpanLabel>
        <HorozontalRule />
        <HorstIterationContainerDiv1>
          <TextSpanIterations>{`${t('Number of Iterations')}:  `}</TextSpanIterations>
          <HorstNumberInput
            style={{ width: 100 }}
            name={'horstIterations'}
            value={horstIterations}
            lowerLimit={1}
            upperLimit={10000}
          />
        </HorstIterationContainerDiv1>

        <HorstIterationContainerDiv2>
          <TextSpanThreshold>{`${t('Cutoff Threshold')}:  `}</TextSpanThreshold>
          <HorstNumberInput
            style={{ width: 100 }}
            name={'horstThresholdLevel'}
            value={horstThresholdLevel}
            lowerLimit={0.0001}
            upperLimit={0.01}
            step={0.001}
          />
        </HorstIterationContainerDiv2>
        <ExtractionButton
          id={'extractHorst'}
          onClick={handleClick}
          isActive={horstExtractActive}
          disabled={horstExtractDisabled}
        >
          {t('Extract Centroids')}
        </ExtractionButton>
      </React.Fragment>
    );
  } else {
    return null;
  }
};

export default UseHorstAutoStop;

const HorstIterationContainerDiv1 = styled.div`
  display: flex;
  margin-top: 25px;
  margin-left: 70px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const HorstIterationContainerDiv2 = styled.div`
  display: flex;
  margin-top: 25px;
  margin-left: 70px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const TextSpanLabel = styled.div`
  margin-top: 25px;
  margin-left: 70px;
  margin-right: 10px;
  width: 350px;
  display: block;
`;

const TextSpanIterations = styled.span`
  margin-right: 10px;
  width: 220px;
`;

const TextSpanThreshold = styled.span`
  margin-right: 10px;
  width: 220px;
`;

const HorozontalRule = styled.div`
  display: block;
  margin-left: 70px;
  height: 1px;
  width: 400px;
  border: 0;
  border-top: 1px solid black;
  padding: 0;
`;

const ExtractionButton = styled(GeneralButton)`
  margin-top: 25px;
  margin-left: 70px;
  width: 200px;
`;
