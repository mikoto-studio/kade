function setInitialState() {
  const initialState = {
    statements: [],
    sortsDisplayText: [],
    isForcedQsortPattern: true,
    dataOrigin: "",
    version: "1.0.0",
    mainDataObject: {},
    gridColDefs: [],
    gridRowData: [],
    numQsorts: 0,
    numCentroidFactors: 7,
    gridColDefsFactorTable: [],
    gridRowDataFactorTable: [],
    eigenvalues: [],
    screePlotData: [],
    gridColDefsFacTableEigen: [],
    gridRowDataFacTableEigen: [],
    shouldDisplayFacKept: false,
    gridColDefsLoadingsTable: [],
    gridRowDataLoadingsTable: [],
    fSigCriterionResults: [],
    unforcedRadioButtonState: "forced",
    numFactorsKeptForRot: undefined,
    isLoadingFactorsKept: false,
    isLoadingAutoflag: false,
    isDataAlreadyLoaded: false,
    isLoadingBeginAnalysis: false,
    isCentroidLoading: false,
    userSelectedSigLevel: 1.96,
    userSelectedDistStateSigLevel2: 1.96,
    userSelectedDistStateSigLevel1: 2.575,
    distStateLowerValueText: "P < 0.05",
    distStateUpperValueText: "P < 0.01",
    unforcedConfirmButtonColor: "orange",
    hasUnforcedBeenConfirmed: false,
    requireMajorityCommonVariance: true,
    rowClassRulesLoadingsTable: {},
    highlighting: "grays",
    varimaxButtonActive: false,
    userSelectedFactors: [],
    userSelectedRotFactors: [],
    factorCorrelationsTableData: [],
    userSelectedDegreeButtons: [],
    factorCharacteristicsArray: [],
    numbersHaveBeenAppended: false,
    rotationDegrees: 0,
    rotateByDegrees: 10,
    bipolarIndexArray: [],
    highlightDegreeButton1: false,
    highlightDegreeButton2: false,
    highlightDegreeButton3: false,
    highlightDegreeButton4: true,
    highlightDegreeButton5: false,
    shouldShowJudgeRotDiv: false,
    showScatterPlotTableDiv: false,
    showCorrelationMatrix: false,
    showOutputFactorSelection: false,
    showDownloadOutputButtons: false,
    showFactorExtractionButtons: false,
    sendDataToOutputButtonColor: "#d6dbe0",
    showUnrotatedFactorTable: false,
    showEigenvaluesTable: false,
    showScreePlot: false,
    showLoadingsTable: false,
    showKeepFacForRotButton: false,
    showForcedInput: false,
    showJsonFileLoadedMessage: false,
    showExcelErrorModal: false,
    showFactorCorrelationsTable: false,
    showStandardErrorsDifferences: false,
    showFactorCharacteristicsTable: false,
    showErrorMessageBar: false,
    showTableDataNotSentWarning: true,
    showInvertFactorModal: false,
    autoFlagHistory: "",
    showFileSaveSuccessDialog: false,
    notifyDataUploadSuccess: false,
    notifyDataSentToOutputSuccess: false,
    notifyForSavedRotation: false,
    isLoadCsvTextButtonGreen: false,
    isLoadCsvQsortsButtonGreen: false,
    isLoadExcelT1ButtonGreen: false,
    isLoadExcelT2ButtonGreen: false,
    isLoadExcelT3ButtonGreen: false,
    isLoadJsonTextButtonGreen: false,
    isLoadJsonQsortsButtonGreen: false,
    isLoadPqmethodTextButtonButtonGreen: false,
    isLoadPqmethodQsortsButtonGreen: false,
    hasExcelT1Error: false,
    areStatementsLoaded: false,
    areQsortsLoaded: false,
    isInputButtonGreen: false,
    isDataButtonGreen: false,
    isCorrelationsButtonGreen: false,
    isFactorsButtonGreen: false,
    isRotationButtonGreen: false,
    isLoadingsButtonGreen: false,
    isOutputButtonGreen: false,
    isLoadLipsetButtonGreen: false,
    isLoadBuzzwordsButtonGreen: false,
    isLoadMotivationalButtonGreen: false,
    isLoadIpadSurveyButtonGreen: false,
    isLoadingsTableInitialRender: false,
    bipolarSplitCount: 0,
    excelType1NonsymmetricArrayText: "",
    activeStartAnalysisButton: false,
    activeCentroidFactorsButton: false,
    activePcaButton: false,
    calculatingPca: false,
    isFacSelectDisabled: false,
    jsonParticipantId: [],
    outputButtonsArray: ["1", "2", "3", "4", "5", "6", "7", "8"],
    pcaButtonText: "Principal Components",
    varimaxButtonText: "Varimax Rotation",
    isCalculatingVarimax: false,
    disabledPcaButton: false,
    disabledCentroidFactorButton: false,
    shouldIncludeTimestamp: true,
    errorStackTrace: "no stack trace available",
    titleHeight: 30,
    archiveCounter: 0,
    varimaxButtonDisabled: false,
    abFactors: [],
    projectHistoryArray: ["no project loaded"],
    newRotationVectors: [],
    rotColDefsFactorTable: [],
    rotRowDataFactorTable: [],
    customFileNameLocation: "append",
    displayFactorVisualizations: false,
    shouldDisplayFactorVizOptions: false,
    projectName: "unnamed project",
    participantDataObject: false,
    updateFactorVisualizationsButtonColor: "#d6dbe0",
    factorVizOptions: {
      willAddCustomNames: false,
      willAddCustomNameToDownload: false,
      willAdjustCardFontSize: false,
      willAdjustCardFontSizeBy: 13,
      willAdjustCardHeight: false,
      willAdjustCardHeightBy: 110,
      willAdjustCardWidth: false,
      willAdjustCardWidthBy: 110,
      willAdjustDistIndicatorSize: false,
      willAdjustDistIndicatorSizeBy: 12,
      willAdjustIndicatorSize: false,
      willAdjustIndicatorSizeBy: 12,
      willAdjustFontSize: false,
      willAdjustFontSizeBy: 14,
      willAdjustLineSpacing: false,
      willAdjustLineSpacingBy: 1.4,
      willAdjustStatementWidth: false,
      willAdjustStatementWidthBy: 15,
      willAdjustWidthAsian: false,
      willAdjustWidthAsianBy: 12,
      willAdjustTopMargin: false,
      willAdjustTopMarginBy: 5,
      willDisplayConsensusStates: false,
      willDisplayDistingCompareSymbols: true,
      willDisplayOnlyStateNums: false,
      willIncludeLegend: true,
      willIndicateDistinguishing: true,
      willPrependStateNums: false,
      willTrimStatement: true,
      willTrimStatementBy: 5,
      willUseDistingUnicode: true,
      showDistinguishingAs: "symbol",
      consensusIndicator: "#d9effe",
      distinguishingIndicator05: "#ededed",
      distinguishingIndicator01: "#bdbdbd",
      customFactorNames: [],
      customFileNameLocation: "append"
    },
    qSortPattern: [],
    activeValueM6: "",
    activeValueM5: "",
    activeValueM4: "",
    activeValueM3: "",
    activeValueM2: "",
    activeValueM1: "",
    activeValue0: "",
    activeValue1: "",
    activeValue2: "",
    activeValue3: "",
    activeValue4: "",
    activeValue5: "",
    activeValue6: "",
    activeValue7: "",
    activeValue8: "",
    activeValue9: "",
    activeValue10: "",
    activeValue11: "",
    activeValue12: "",
    activeValue13: "",
    qSortPatternObject: {},
    factorVizOptionsHolder: {}
  };
  return initialState;
}

export default setInitialState;
