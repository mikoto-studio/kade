import React from 'react';
import styled from 'styled-components';
import { view } from '@risingstack/react-easy-state';
import getRotationState from '../../../GlobalState/getRotationState';
import { useTranslation } from 'react-i18next';

const ParticipantPopUp = () => {
  const { t } = useTranslation();

  let respondent;
  let factor1Value;
  let factor2Value;
  // getState
  const participantDataObject = getRotationState('participantDataObject');
  if (participantDataObject !== false) {
    respondent = participantDataObject.respondent;
    factor1Value = participantDataObject.factor1;
    factor2Value = participantDataObject.factor2;
  }
  return (
    <div>
      {participantDataObject ? (
        <PopupDiv>
          <div>{respondent}</div>
          <div>{factor1Value},</div>
          <div>{factor2Value}</div>
        </PopupDiv>
      ) : (
        <PopupDiv>{t('Hover to view participant data')}</PopupDiv>
      )}
    </div>
  );
};

export default view(ParticipantPopUp);

const PopupDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: max-content;
  min-width: 250px;
  color: whitesmoke;
  background: black;
  border-radius: 4px;
  padding: 10px;
`;
