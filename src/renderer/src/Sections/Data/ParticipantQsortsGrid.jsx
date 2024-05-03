import React, { useEffect, useRef } from 'react';
import { AgGridReact } from '@ag-grid-community/react';
import { AllCommunityModules } from '@ag-grid-community/all-modules';
import { view, store } from '@risingstack/react-easy-state';
import getCoreState from '../GlobalState/getCoreState';

const localStore = store({
  numQsorts: 0
});

function getWidth(numStatements) {
  let widthVal = 230 + 65 * numStatements;
  let x = window.innerWidth - 40 - 152;

  if (x < widthVal) {
    x += 'px';
    return x;
  }
  widthVal += 'px';
  return widthVal;
}

function getHeight(numQsorts) {
  let heightVal = 40 + 25 * numQsorts;
  let y = window.innerHeight - 120 - 100;
  if (y < heightVal) {
    y += 'px';
    return y;
  }
  heightVal += 'px';
  return heightVal;
}

function resetWidthAndHeight() {
  const numQsorts = localStore.numQsorts;
  const numStatements = localStore.numStatements;
  const table = document.querySelector('#participantQsortData');
  if (table !== null) {
    table.style.height = getHeight(numQsorts);
    table.style.width = getWidth(numStatements);
  }
}

function generateGridColDefs(props) {
  if (props.data.length === undefined) {
    return;
  }
  const gridColDefsQsorts = [
    {
      headerName: 'Num',
      field: 'resNum',
      pinned: true,
      editable: false,
      width: 80,
      cellStyle: {
        textAlign: 'center'
      }
    },
    {
      headerName: 'Participant',
      field: 'respondent',
      width: 150,
      pinned: true,
      editable: false,
      cellStyle: {
        textAlign: 'center'
      }
    }
  ];
  for (let i = 0; i < props.data[0].rawSort.length; i += 1) {
    const tempObj = {};
    tempObj.headerName = `S${i + 1}`;
    tempObj.field = `s${i + 1}`;
    tempObj.width = 65;
    tempObj.pinned = false;
    tempObj.editable = false;
    tempObj.sortable = true;
    tempObj.cellStyle = {
      textAlign: 'right'
    };
    gridColDefsQsorts.push(tempObj);
  }
  localStore.gridColDefsQsorts = gridColDefsQsorts;
}

function generateGridRowData(props) {
  if (props.data.length === undefined) {
    return;
  }
  const gridRowDataQsorts = [];
  for (let i = 0; i < props.data.length; i += 1) {
    const tempObj = {};
    tempObj.resNum = i + 1;
    tempObj.respondent = props.data[i].name;
    for (let j = 0; j < props.data[i].rawSort.length; j += 1) {
      tempObj[`s${j + 1}`] = props.data[i].rawSort[j];
    }
    gridRowDataQsorts.push(tempObj);
  }
  localStore.gridRowDataQsorts = gridRowDataQsorts;
}

const ParticipantQsortsGrid = (props) => {
  useEffect(() => {
    window.addEventListener('resize', () => {
      resetWidthAndHeight();
    });

    return () => {
      window.removeEventListener('resize', () => {
        resetWidthAndHeight();
      });
    };
  }, []);

  const gridApi = useRef();

  const onGridReady = (params) => {
    gridApi.current = params.api;
    // columnApi.current = params.columnApi;
  };

  let statements;
  let numQsorts;

  if (props) {
    generateGridColDefs(props);
    generateGridRowData(props);
    numQsorts = getCoreState('numQsorts');
    statements = getCoreState('statements');

    localStore.numQsorts = numQsorts;
    localStore.numStatements = statements.length;
  }

  // const { onGridReady } = this;
  const style1 = {
    width: getWidth(statements.length),
    height: getHeight(numQsorts)
  };

  return (
    <div id="participantQsortData" style={style1} className="ag-theme-fresh">
      <AgGridReact
        columnDefs={localStore.gridColDefsQsorts}
        ref={gridApi}
        rowData={localStore.gridRowDataQsorts}
        onGridReady={onGridReady}
        modules={AllCommunityModules}
      />
    </div>
  );
};

export default view(ParticipantQsortsGrid);
