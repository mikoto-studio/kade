import { view, store } from '@risingstack/react-easy-state';
import styled from 'styled-components';
import React from 'react';
import InputDiv from './InputDiv';
import convertQsortObjectToArray from './convertQsortObjectToArray';
import coreState from '../../GlobalState/coreState';
import { useTranslation } from 'react-i18next';
import getCoreState from '../../GlobalState/getCoreState';
import inputState from '../../GlobalState/inputState';
import calcMultiplierArrayT2 from '../Excel/excelLogic/calcMultiplierArrayT2';

const localStore = store({
  qSortPatternObject: {},
  activeValueM6: '',
  activeValueM5: '',
  activeValueM4: '',
  activeValueM3: '',
  activeValueM2: '',
  activeValueM1: '',
  activeValue0: '',
  activeValue1: '',
  activeValue2: '',
  activeValue3: '',
  activeValue4: '',
  activeValue5: '',
  activeValue6: '',
  activeValue7: '',
  activeValue8: '',
  activeValue9: '',
  activeValue10: '',
  activeValue11: '',
  activeValue12: '',
  activeValue13: '',
  inputTitle: 'Enter the Number of Statements in Each Column',
  inputColor: 'white',
  qSortPattern: [],
});

const calcQsortDesign = (event) => {
  let columnName = event.target.name;
  // set local state for display
  localStore[`activeValue${event.target.name}`] = event.target.value;

  // to get local state of all current values
  const qSortPatternObject = localStore.qSortPatternObject;
  // if negative, substitute - for M
  if (columnName.charAt(0) === 'M') {
    columnName = +columnName.replace('M', '-');
  }

  // set new key - value
  qSortPatternObject[columnName] = event.target.value;
  // send all current values back to local state
  localStore.qSortPatternObject = qSortPatternObject;

  // process array for completeness and UI feedback
  const qSortPattern = convertQsortObjectToArray(qSortPatternObject);
  localStore.qSortPattern = qSortPattern;
  const fullColumnName = `activeValue${event.target.name}`;
  const targetValue = event.target.value;
  // const enteredStatements = qSortPattern.length;

  coreState[fullColumnName] = targetValue;
  const multiplierArray = calcMultiplierArrayT2([...qSortPattern]);
  coreState.multiplierArray = multiplierArray;
  coreState.qSortPattern = qSortPattern;
  coreState.qSortPatternObject = qSortPatternObject;
};

const QsortDesignInputElement = (props) => {
  const { t } = useTranslation();

  // get state of input statements
  const statementsFromState = getCoreState('statements');
  const statementsLength = statementsFromState.length;
  localStore.statementsLength = statementsLength;

  // process array for completeness and UI feedback
  const enteredStatements = localStore.qSortPattern.length;
  const difference = localStore.statementsLength - enteredStatements;

  if (difference === 0 && localStore.qSortPattern.length > 0) {
    localStore.inputTitle = t('All Statements Allocated');
    localStore.inputColor = 'var(--main-theme-color)';
    inputState.isQsortPatternLoaded = true;
  }
  if (difference > 0) {
    localStore.inputTitle = `${difference} ${t('Statements Left')}`;
    localStore.inputColor = 'orange';
    inputState.isQsortPatternLoaded = false;
  }
  if (difference < 0) {
    localStore.inputTitle = `${t('Over-Allocated Statements')}: ${-difference}`;
    localStore.inputColor = 'lightpink';
    inputState.isQsortPatternLoaded = false;
  }

  // new from version 1.3.0 => always require multiplierArray input
  const showForcedInput = true;

  const qSortPatternObject = getCoreState('qSortPatternObject');
  const activeValueM6 = getCoreState('activeValueM6');
  const activeValueM5 = getCoreState('activeValueM5');
  const activeValueM4 = getCoreState('activeValueM4');
  const activeValueM3 = getCoreState('activeValueM3');
  const activeValueM2 = getCoreState('activeValueM2');
  const activeValueM1 = getCoreState('activeValueM1');
  const activeValue0 = getCoreState('activeValue0');
  const activeValue1 = getCoreState('activeValue1');
  const activeValue2 = getCoreState('activeValue2');
  const activeValue3 = getCoreState('activeValue3');
  const activeValue4 = getCoreState('activeValue4');
  const activeValue5 = getCoreState('activeValue5');
  const activeValue6 = getCoreState('activeValue6');
  const activeValue7 = getCoreState('activeValue7');
  const activeValue8 = getCoreState('activeValue8');
  const activeValue9 = getCoreState('activeValue9');
  const activeValue10 = getCoreState('activeValue10');
  const activeValue11 = getCoreState('activeValue11');
  const activeValue12 = getCoreState('activeValue12');
  const activeValue13 = getCoreState('activeValue13');

  localStore.qSortPatternObject = qSortPatternObject;
  localStore.activeValueM6 = activeValueM6;
  localStore.activeValueM5 = activeValueM5;
  localStore.activeValueM4 = activeValueM4;
  localStore.activeValueM3 = activeValueM3;
  localStore.activeValueM2 = activeValueM2;
  localStore.activeValueM1 = activeValueM1;
  localStore.activeValue0 = activeValue0;
  localStore.activeValue1 = activeValue1;
  localStore.activeValue2 = activeValue2;
  localStore.activeValue3 = activeValue3;
  localStore.activeValue4 = activeValue4;
  localStore.activeValue5 = activeValue5;
  localStore.activeValue6 = activeValue6;
  localStore.activeValue7 = activeValue7;
  localStore.activeValue8 = activeValue8;
  localStore.activeValue9 = activeValue9;
  localStore.activeValue10 = activeValue10;
  localStore.activeValue11 = activeValue11;
  localStore.activeValue12 = activeValue12;
  localStore.activeValue13 = activeValue13;

  if (showForcedInput) {
    return (
      <DesignDiv>
        <TitleDiv>
          <TextDiv inputColor={localStore.inputColor}>
            <b>{props.number}</b> {t('Q Sort Pattern')}
          </TextDiv>
          {localStore.statementsLength ? (
            <TextDiv2>{localStore.inputTitle}</TextDiv2>
          ) : (
            <TextDiv2>{t('No Statements Loaded')}</TextDiv2>
          )}
        </TitleDiv>
        <InputRow>
          <InputDiv
            label={'-6'}
            name={'M6'}
            onChangeCallback={calcQsortDesign}
            value={localStore.activeValueM6}
          />
          <InputDiv
            label={'-5'}
            name={'M5'}
            onChangeCallback={calcQsortDesign}
            value={localStore.activeValueM5}
          />
          <InputDiv
            label={'-4'}
            name={'M4'}
            onChangeCallback={calcQsortDesign}
            value={localStore.activeValueM4}
          />
          <InputDiv
            label={'-3'}
            name={'M3'}
            onChangeCallback={calcQsortDesign}
            value={localStore.activeValueM3}
          />
          <InputDiv
            label={'-2'}
            name={'M2'}
            onChangeCallback={calcQsortDesign}
            value={localStore.activeValueM2}
          />
          <InputDiv
            label={'-1'}
            name={'M1'}
            onChangeCallback={calcQsortDesign}
            value={localStore.activeValueM1}
          />
          <InputDiv
            label={'0'}
            name={0}
            onChangeCallback={calcQsortDesign}
            value={localStore.activeValue0}
          />
          <InputDiv
            label={'1'}
            name={1}
            onChangeCallback={calcQsortDesign}
            value={localStore.activeValue1}
          />
          <InputDiv
            label={'2'}
            name={2}
            onChangeCallback={calcQsortDesign}
            value={localStore.activeValue2}
          />
          <InputDiv
            label={'3'}
            name={3}
            onChangeCallback={calcQsortDesign}
            value={localStore.activeValue3}
          />
          <InputDiv
            label={'4'}
            name={4}
            onChangeCallback={calcQsortDesign}
            value={localStore.activeValue4}
          />
          <InputDiv
            label={'5'}
            name={5}
            onChangeCallback={calcQsortDesign}
            value={localStore.activeValue5}
          />
          <InputDiv
            label={'6'}
            name={6}
            onChangeCallback={calcQsortDesign}
            value={localStore.activeValue6}
          />
          <InputDiv
            label={'7'}
            name={7}
            onChangeCallback={calcQsortDesign}
            value={localStore.activeValue7}
          />
          <InputDiv
            label={'8'}
            name={8}
            onChangeCallback={calcQsortDesign}
            value={localStore.activeValue8}
          />
          <InputDiv
            label={'9'}
            name={9}
            onChangeCallback={calcQsortDesign}
            value={localStore.activeValue9}
          />
          <InputDiv
            label={'10'}
            name={10}
            onChangeCallback={calcQsortDesign}
            value={localStore.activeValue10}
          />
          <InputDiv
            label={'11'}
            name={11}
            onChangeCallback={calcQsortDesign}
            value={localStore.activeValue11}
          />
          <InputDiv
            label={'12'}
            name={12}
            onChangeCallback={calcQsortDesign}
            value={localStore.activeValue12}
          />
          <InputDiv
            label={'13'}
            name={13}
            onChangeCallback={calcQsortDesign}
            value={localStore.activeValue13}
          />
        </InputRow>
      </DesignDiv>
    );
  }
  return <div />;
};

export default QsortDesignInputElement;

const InputRow = styled.div`
  display: flex;
`;

const DesignDiv = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  grid-column-start: 1;
`;

const TextDiv = styled.div`
  background-color: ${(props) => props.inputColor};
  font-size: 20px;
  margin-bottom: 5px;
  width: 400px;
  padding-top: 4px;
  padding-left: 5px;
  height: 25px;
  margin-top: 10px;
`;

const TextDiv2 = styled.div`
  font-size: 20px;
  margin-bottom: 5px;
  padding-top: 4px;
  padding-left: 4px;
  width: 700px;
  height: 25px;
  margin-left: 15px;
  margin-top: 10px;
`;

const TitleDiv = styled.div`
  display: flex;
  width: 850px;
`;
