import * as XLSX from 'xlsx';
import formatExcelType3ForDisplay from '../KandedLogic/formatExcelType3ForDisplay';
import inputState from '../../../GlobalState/inputState';

function parseExcelType3(workbook) {
  const allWorksheets = [];
  let worksheet;
  let hasStatementsWorksheet = false;
  let hasAnalysisOverviewWorksheet = false;
  let hasSortsWorksheetFromKenQ = false;

  // iterate through every sheet and pull values
  const sheetNameList = workbook.SheetNames;

  try {
    // data = e.target.result;

    sheetNameList.forEach((y) => {
      worksheet = workbook.Sheets[y];

      y = y.toLowerCase();

      // find Project information
      if (y === 'project overview' || y === 'analysis overview') {
        // turn off error report
        hasAnalysisOverviewWorksheet = true;

        const tester6 = XLSX.utils.sheet_to_csv(worksheet);
        const temp99 = tester6.split('\n');
        const temp99Array = [];
        for (const frag of temp99) {
          const tempArray2 = [];
          if (frag !== ',') {
            tempArray2.push(frag);
          }
          temp99Array.push(tempArray2);
        }
        allWorksheets.push(temp99Array);

        // find q sorts
      } else if (y === 'q-sorts' || y === 'q sorts') {
        // turn off error report
        hasSortsWorksheetFromKenQ = true;

        const tester = XLSX.utils.sheet_to_csv(worksheet);
        const tester2 = tester.split(/\n/);
        const tempArray3 = [];
        tester2.forEach((entry) => {
          const tester3 = entry.split(',');
          tempArray3.push(tester3);
        });
        allWorksheets.push(tempArray3);

        // find Statements
      } else if (y === 'statements') {
        // turn off error report
        hasStatementsWorksheet = true;
        const tester4 = XLSX.utils.sheet_to_csv(worksheet);
        const statementString = tester4.split('\n');

        allWorksheets.push(statementString);
      }
    }); // end iteration of for each

    if (
      hasSortsWorksheetFromKenQ === false ||
      hasStatementsWorksheet === false ||
      hasAnalysisOverviewWorksheet === false
    ) {
      console.log('error throw attempted');
      throw new Error('Excel input error');
    }
  } catch (error) {
    // set error message
    if (hasSortsWorksheetFromKenQ === false) {
      console.log('missing sorts worksheet');
      inputState.setState({ excelErrorMessage1: "Can't find the Q-sorts worksheet tab!" });
      inputState.setState({ showExcelErrorModal: true });
    }
    if (hasStatementsWorksheet === false) {
      console.log(JSON.stringify('missing statements worksheet'));
      inputState.setState({ excelErrorMessage1: "Can't find the Statements worksheet tab!" });
      inputState.setState({ showExcelErrorModal: true });
    }
    if (hasAnalysisOverviewWorksheet === false) {
      console.log(JSON.stringify('missing overview worksheet'));
      inputState.setState({
        excelErrorMessage1: "Can't find the Analysis Overview worksheet tab!",
      });
      inputState.setState({ showExcelErrorModal: true });
    }
  } // end error catching

  if (
    hasSortsWorksheetFromKenQ === true &&
    hasStatementsWorksheet === true &&
    hasAnalysisOverviewWorksheet === true
  ) {
    formatExcelType3ForDisplay(allWorksheets);
    inputState.setState({ dataOrigin: 'excel' });
    inputState.setState({ areQsortsLoaded: true });
  }
}

export default parseExcelType3;
