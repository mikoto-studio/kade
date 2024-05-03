import getFactorState from "../../GlobalState/getFactorState";
import i18n from "i18next";

const pushUnrotatedFactorsTableToOutputArray = function(
  outputData,
  sheetNamesXlsx,
  colSizes
) {
  // getState
  const unrotFactorMatrix = getFactorState("unrotatedFactorMatrixOutput");
  const eigenvals = getFactorState("eigenvalues"); // "eigenValuesSorted");
  const expVar = getFactorState("eigensPercentExpVar");

  sheetNamesXlsx.push(i18n.t("Unrotated Factor Matrix"));

  // set excel column widths
  const columns = [
    {
      wch: 8
    },
    {
      wch: 20
    }
  ];
  const iiiLen = unrotFactorMatrix[0].length - 2;
  for (let iii = 0; iii < iiiLen; iii++) {
    columns.push({
      wch: 8
    });
  }
  colSizes.push(columns);

  eigenvals.unshift("");

  expVar.unshift("");

  unrotFactorMatrix.push(["", ""], eigenvals, expVar);
  unrotFactorMatrix.unshift(
    ["unrotated", ""],
    ["", ""],
    [i18n.t("Unrotated Factor Matrix")],
    ["", ""]
  );

  outputData.push(unrotFactorMatrix);

  console.log("dispatch - 5 - pushUnrotatedFactorsTable complete");
  return [outputData, sheetNamesXlsx, colSizes];
};

export default pushUnrotatedFactorsTableToOutputArray;
