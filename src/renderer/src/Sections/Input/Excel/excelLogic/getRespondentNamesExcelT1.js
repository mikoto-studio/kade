export default function getRespondentNamesExcelT1(namesData) {
    console.log(`6. getRespondentNamesExcelT1 called`);
    const respondentNames = [];
    for (let m = 0, mLen = namesData.length; m < mLen; m += 1) {
        const temp1 = namesData[m].statementNum;
        if (temp1 !== "") {
            respondentNames.push(temp1);
        }
    }
    return respondentNames;
}

