import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

//   distStateListSortKey: "",

const outputState = create(
  immer((set) => ({
    displayFactorVisualizations: false,
    distStateLowerValueText: `p<0.05`,
    distStateUpperValueText: `p<0.01`,
    factorsWithoutLoading: [],

    notifyOutputDistStateError: false,

    outputActiveTabIndex: 0,
    outputButtonsArray: [],
    outputFactorSelectButtonsDisabled: false,
    outputForDataViz: [],
    outputForDataViz2: [],

    selectAllClicked: false,

    shouldDisplayFactorVizOptions: false,

    showDocxOptions: false,
    downloadDocxButtonActive: false,
    showDownloadOutputButtons: false,

    showFactorCharacteristicsTable: false,
    showFactorCorrelationsTable: false,
    showMultipleFactorsFlaggedWarningModal: false,
    showNoLoadingsFlaggedWarningModal: false,
    showTableDataNotSentWarning: true,
    showOutputFactorSelection: false,
    showStandardErrorsDifferences: false,

    sliceValueDistStateSigLevelDrop1: 1.96,
    sortsFlaggedOnTwoFactors: [],

    thresholdButtonActive: false,
    qSortValueButtonActive: false,
    statementNumButtonActive: true,
    zScoreButtonActive: false,
    distStateListSortKey: 'statementNum',

    threshold: 3,
    userSelectedFactors: [],

    // DOCX options
    willIncludeThreshold: false,
    correlationThreshold: 40,
    useClipped: true,
    useClippedButtonActive: true,
    useTables: false,
    useTablesButtonActive: false,
    useZebra: true,
    willIncludeToc: false,
    willUseHyperlinks: false,
    willIncludeDataFiles: false,

    // DOCX sections
    willIncludeOverview: true,
    willIncludeStatements: true,
    willIncludeQsorts: true,
    willIncludeCorrMatrix: true,
    willIncludeUnrotFacMatrix: true,
    willIncludeCumulComm: true,
    willIncludeFacLoadings: true,
    willIncludeFacLoadingsTable: true,
    willIncludeFreeDist: true,
    willIncludeFacScoreRanks: true,
    willIncludeFacScoreCorr: true,
    willIncludeFactors: true,
    willIncludeFacDiffs: true,
    willIncludeConDis: true,
    willIncludeFacChar: true,
    willIncludeDist: true,
    willIncludeConsensus: true,
    willIncludeRelRanks: true,

    partNumArray: [
      '1 - 15',
      '16 - 30',
      '31 - 45',
      '46 - 60',
      '61 - 75',
      '76 - 90',
      '91 - 105',
      '106 - 120',
      '121 - 135',
      '136 - 150',
      '151 - 165',
      '166 - 180',
      '181 - 195',
      '196 - 210',
      '211 - 225',
      '226 - 240',
      '241 - 255',
      '256 - 270',
      '271 - 285',
      '286 - 300',
      '301 - 315',
      '316 - 330',
      '331 - 345',
      '346 - 360',
      '361 - 375',
      '376 - 390',
      '391 - 405',
      '406 - 420',
      '421 - 435',
      '436 - 450',
      '451 - 465',
      '466 - 480',
      '481 - 495',
      '496 - 510',
    ],

    updateDisplayFactorVisualizations: (inputValue) =>
      set({ displayFactorVisualizations: inputValue }),
    updateDistStateLowerValueText: (inputValue) => set({ distStateLowerValueText: inputValue }),
    updateDistStateUpperValueText: (inputValue) => set({ distStateUpperValueText: inputValue }),
    updateFactorsWithoutLoading: (inputValue) => set({ factorsWithoutLoading: inputValue }),
    updateNotifyOutputDistStateError: (inputValue) =>
      set({ notifyOutputDistStateError: inputValue }),
    updateOutputActiveTabIndex: (inputValue) => set({ outputActiveTabIndex: inputValue }),
    updateOutputButtonsArray: (inputValue) => set({ outputButtonsArray: inputValue }),
    updateOutputFactorSelectButtonsDisabled: (inputValue) =>
      set({ outputFactorSelectButtonsDisabled: inputValue }),
    updateOutputForDataViz: (inputValue) => set({ outputForDataViz: inputValue }),
    updateOutputForDataViz2: (inputValue) => set({ outputForDataViz2: inputValue }),
    updateSelectAllClicked: (inputValue) => set({ selectAllClicked: inputValue }),
    updateShouldDisplayFactorVizOptions: (inputValue) =>
      set({ shouldDisplayFactorVizOptions: inputValue }),
    updateShowDocxOptions: (inputValue) => set({ showDocxOptions: inputValue }),
    updateDownloadDocxButtonActive: (inputValue) => set({ downloadDocxButtonActive: inputValue }),
    updateShowDownloadOutputButtons: (inputValue) => set({ showDownloadOutputButtons: inputValue }),
    updateShowFactorCharacteristicsTable: (inputValue) =>
      set({ showFactorCharacteristicsTable: inputValue }),
    updateShowFactorCorrelationsTable: (inputValue) =>
      set({ showFactorCorrelationsTable: inputValue }),
    updateShowMultipleFactorsFlaggedWarningModal: (inputValue) =>
      set({ showMultipleFactorsFlaggedWarningModal: inputValue }),
    updateShowNoLoadingsFlaggedWarningModal: (inputValue) =>
      set({ showNoLoadingsFlaggedWarningModal: inputValue }),
    updateShowTableDataNotSentWarning: (inputValue) =>
      set({ showTableDataNotSentWarning: inputValue }),
    updateShowOutputFactorSelection: (inputValue) => set({ showOutputFactorSelection: inputValue }),
    updateShowStandardErrorsDifferences: (inputValue) =>
      set({ showStandardErrorsDifferences: inputValue }),
    updateSliceValueDistStateSigLevelDrop1: (inputValue) =>
      set({ sliceValueDistStateSigLevelDrop1: inputValue }),
    updateSortsFlaggedOnTwoFactors: (inputValue) => set({ sortsFlaggedOnTwoFactors: inputValue }),
    updateThresholdButtonActive: (inputValue) => set({ thresholdButtonActive: inputValue }),
    updateQSortValueButtonActive: (inputValue) => set({ qSortValueButtonActive: inputValue }),
    updateStatementNumButtonActive: (inputValue) => set({ statementNumButtonActive: inputValue }),
    updateZScoreButtonActive: (inputValue) => set({ zScoreButtonActive: inputValue }),
    updateDistStateListSortKey: (inputValue) => set({ distStateListSortKey: inputValue }),
    updateThreshold: (inputValue) => set({ threshold: inputValue }),
    updateUserSelectedFactors: (inputValue) => set({ userSelectedFactors: inputValue }),
    updateWillIncludeThreshold: (inputValue) => set({ willIncludeThreshold: inputValue }),
    updateCorrelationThreshold: (inputValue) => set({ correlationThreshold: inputValue }),
    updateUseClipped: (inputValue) => set({ useClipped: inputValue }),
    updateUseClippedButtonActive: (inputValue) => set({ useClippedButtonActive: inputValue }),
    updateUseTables: (inputValue) => set({ useTables: inputValue }),
    updateUseTablesButtonActive: (inputValue) => set({ useTablesButtonActive: inputValue }),
    updateUseZebra: (inputValue) => set({ useZebra: inputValue }),
    updateWillIncludeToc: (inputValue) => set({ willIncludeToc: inputValue }),
    updateWillUseHyperlinks: (inputValue) => set({ willUseHyperlinks: inputValue }),
    updateWillIncludeDataFiles: (inputValue) => set({ willIncludeDataFiles: inputValue }),
    updateWillIncludeOverview: (inputValue) => set({ willIncludeOverview: inputValue }),
    updateWillIncludeStatements: (inputValue) => set({ willIncludeStatements: inputValue }),
    updateWillIncludeQsorts: (inputValue) => set({ willIncludeQsorts: inputValue }),
    updateWillIncludeCorrMatrix: (inputValue) => set({ willIncludeCorrMatrix: inputValue }),
    updateWillIncludeUnrotFacMatrix: (inputValue) => set({ willIncludeUnrotFacMatrix: inputValue }),
    updateWillIncludeCumulComm: (inputValue) => set({ willIncludeCumulComm: inputValue }),
    updateWillIncludeFacLoadings: (inputValue) => set({ willIncludeFacLoadings: inputValue }),
    updateWillIncludeFacLoadingsTable: (inputValue) =>
      set({ willIncludeFacLoadingsTable: inputValue }),
    updateWillIncludeFreeDist: (inputValue) => set({ willIncludeFreeDist: inputValue }),
    updateWillIncludeFacScoreRanks: (inputValue) => set({ willIncludeFacScoreRanks: inputValue }),
    updateWillIncludeFacScoreCorr: (inputValue) => set({ willIncludeFacScoreCorr: inputValue }),
    updateWillIncludeFactors: (inputValue) => set({ willIncludeFactors: inputValue }),
    updateWillIncludeFacDiffs: (inputValue) => set({ willIncludeFacDiffs: inputValue }),
    updateWillIncludeConDis: (inputValue) => set({ willIncludeConDis: inputValue }),
    updateWillIncludeFacChar: (inputValue) => set({ willIncludeFacChar: inputValue }),
    updateWillIncludeDist: (inputValue) => set({ willIncludeDist: inputValue }),
    updateWillIncludeConsensus: (inputValue) => set({ willIncludeConsensus: inputValue }),
    updateWillIncludeRelRanks: (inputValue) => set({ willIncludeRelRanks: inputValue }),
    updatePartNumArray: (inputValue) => set({ partNumArray: inputValue }),
  }))
);

export default outputState;
