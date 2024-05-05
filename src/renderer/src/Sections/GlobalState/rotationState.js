import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const rotationState = create(
  immer((set) => ({
    abFactors: [],
    archiveCounter: 0,
    calculateRotationsArray: [],
    colMaxWidth: 0,
    d3RotChartData: [],
    fSigCriterion: [],
    fSigCriterionResults: [],

    factor1Active: false,
    factor2Active: false,
    factor3Active: false,
    factor4Active: false,
    factor5Active: false,
    factor6Active: false,
    factor7Active: false,
    factor8Active: false,

    highlightRotfactor1: false,
    highlightRotfactor2: false,
    highlightRotfactor3: false,
    highlightRotfactor4: false,
    highlightRotfactor5: false,
    highlightRotfactor6: false,
    highlightRotfactor7: false,
    highlightRotfactor8: false,

    highlightDegreeButton1: false,
    highlightDegreeButton2: false,
    highlightDegreeButton3: false,
    highlightDegreeButton4: true,
    highlightDegreeButton5: false,
    highlightDegreeInputButton: false,

    isFacSelectDisabled: false,
    isCalculatingVarimax: false,

    judgeButtonActive: false,

    newRotationVectors: [],
    notifyForSavedRotation: false,
    numFactorsKeptForRot: undefined,

    participantDataObject: false,

    rotateByDegrees: 10,
    rowH2: [],
    rotColDefsFactorTable: [],
    rotRowDataFactorTable: [],
    rotationActiveTabIndex: 0,
    rotationDegrees: 0,

    shouldDisplayFacKept: false,
    showRotFactorSelectWarning: false,
    showKeepFacForRotButton: false,
    shouldShowJudgeRotDiv: false,
    showScatterPlotTableDiv: false,
    showVarimaxHeywoodWarning: false,

    tempRotFacStateArray: [],

    userSelectedRotFactors: [],

    varimaxButtonDisabled: false,
    varimaxButtonText: 'Varimax Rotation',
    varimaxButtonActive: true,

    variContinueButtonActive: false,
    variContinueButtonDisabled: false,
    variAdjustButtonActive: false,
    variAdjustButtonDisabled: false,
    variPqmAdjustButtonActive: false,
    variPqmAdjustButtonDisabled: false,

    updateAbFactors: (inputValue) => set({ abFactors: inputValue }),
    updateArchiveCounter: (inputValue) => set({ archiveCounter: inputValue }),
    updateCalculateRotationsArray: (inputValue) => set({ calculateRotationsArray: inputValue }),
    updateColMaxWidth: (inputValue) => set({ colMaxWidth: inputValue }),
    updateD3RotChartData: (inputValue) => set({ d3RotChartData: inputValue }),
    updateFSigCriterion: (inputValue) => set({ fSigCriterion: inputValue }),
    updateFSigCriterionResults: (inputValue) => set({ fSigCriterionResults: inputValue }),
    updateFactor1Active: (inputValue) => set({ factor1Active: inputValue }),
    updateFactor2Active: (inputValue) => set({ factor2Active: inputValue }),
    updateFactor3Active: (inputValue) => set({ factor3Active: inputValue }),
    updateFactor4Active: (inputValue) => set({ factor4Active: inputValue }),
    updateFactor5Active: (inputValue) => set({ factor5Active: inputValue }),
    updateFactor6Active: (inputValue) => set({ factor6Active: inputValue }),
    updateFactor7Active: (inputValue) => set({ factor7Active: inputValue }),
    updateFactor8Active: (inputValue) => set({ factor8Active: inputValue }),
    updateHighlightRotfactor1: (inputValue) => set({ highlightRotfactor1: inputValue }),
    updateHighlightRotfactor2: (inputValue) => set({ highlightRotfactor2: inputValue }),
    updateHighlightRotfactor3: (inputValue) => set({ highlightRotfactor3: inputValue }),
    updateHighlightRotfactor4: (inputValue) => set({ highlightRotfactor4: inputValue }),
    updateHighlightRotfactor5: (inputValue) => set({ highlightRotfactor5: inputValue }),
    updateHighlightRotfactor6: (inputValue) => set({ highlightRotfactor6: inputValue }),
    updateHighlightRotfactor7: (inputValue) => set({ highlightRotfactor7: inputValue }),
    updateHighlightRotfactor8: (inputValue) => set({ highlightRotfactor8: inputValue }),
    updateHighlightDegreeButton1: (inputValue) => set({ highlightDegreeButton1: inputValue }),
    updateHighlightDegreeButton2: (inputValue) => set({ highlightDegreeButton2: inputValue }),
    updateHighlightDegreeButton3: (inputValue) => set({ highlightDegreeButton3: inputValue }),
    updateHighlightDegreeButton4: (inputValue) => set({ highlightDegreeButton4: inputValue }),
    updateHighlightDegreeButton5: (inputValue) => set({ highlightDegreeButton5: inputValue }),
    updateHighlightDegreeInputButton: (inputValue) =>
      set({ highlightDegreeInputButton: inputValue }),
    updateIsFacSelectDisabled: (inputValue) => set({ isFacSelectDisabled: inputValue }),
    updateIsCalculatingVarimax: (inputValue) => set({ isCalculatingVarimax: inputValue }),
    updateJudgeButtonActive: (inputValue) => set({ judgeButtonActive: inputValue }),
    updateNewRotationVectors: (inputValue) => set({ newRotationVectors: inputValue }),
    updateNotifyForSavedRotation: (inputValue) => set({ notifyForSavedRotation: inputValue }),
    updateNumFactorsKeptForRot: (inputValue) => set({ numFactorsKeptForRot: inputValue }),
    updateParticipantDataObject: (inputValue) => set({ participantDataObject: inputValue }),
    updateRotateByDegrees: (inputValue) => set({ rotateByDegrees: inputValue }),
    updateRowH2: (inputValue) => set({ rowH2: inputValue }),
    updateRotColDefsFactorTable: (inputValue) => set({ rotColDefsFactorTable: inputValue }),
    updateRotRowDataFactorTable: (inputValue) => set({ rotRowDataFactorTable: inputValue }),
    updateRotationActiveTabIndex: (inputValue) => set({ rotationActiveTabIndex: inputValue }),
    updateRotationDegrees: (inputValue) => set({ rotationDegrees: inputValue }),
    updateShouldDisplayFacKept: (inputValue) => set({ shouldDisplayFacKept: inputValue }),
    updateShowRotFactorSelectWarning: (inputValue) =>
      set({ showRotFactorSelectWarning: inputValue }),
    updateShowKeepFacForRotButton: (inputValue) => set({ showKeepFacForRotButton: inputValue }),
    updateShouldShowJudgeRotDiv: (inputValue) => set({ shouldShowJudgeRotDiv: inputValue }),
    updateShowScatterPlotTableDiv: (inputValue) => set({ showScatterPlotTableDiv: inputValue }),
    updateShowVarimaxHeywoodWarning: (inputValue) => set({ showVarimaxHeywoodWarning: inputValue }),
    updateTempRotFacStateArray: (inputValue) => set({ tempRotFacStateArray: inputValue }),
    updateUserSelectedRotFactors: (inputValue) => set({ userSelectedRotFactors: inputValue }),
    updateVarimaxButtonDisabled: (inputValue) => set({ varimaxButtonDisabled: inputValue }),
    updateVarimaxButtonText: (inputValue) => set({ varimaxButtonText: inputValue }),
    updateVarimaxButtonActive: (inputValue) => set({ varimaxButtonActive: inputValue }),
    updateVariContinueButtonActive: (inputValue) => set({ variContinueButtonActive: inputValue }),
    updateVariContinueButtonDisabled: (inputValue) =>
      set({ variContinueButtonDisabled: inputValue }),
    updateVariAdjustButtonActive: (inputValue) => set({ variAdjustButtonActive: inputValue }),
    updateVariAdjustButtonDisabled: (inputValue) => set({ variAdjustButtonDisabled: inputValue }),
    updateVariPqmAdjustButtonActive: (inputValue) => set({ variPqmAdjustButtonActive: inputValue }),
    updateVariPqmAdjustButtonDisabled: (inputValue) =>
      set({ variPqmAdjustButtonDisabled: inputValue }),
  }))
);

export default rotationState;
