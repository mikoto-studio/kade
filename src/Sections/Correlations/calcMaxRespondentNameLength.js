import state from '../../store';

const calcMaxRespondentNameLength = (respondentNames = []) => {
 // get max participant name length for col width
  let colMaxWidth = 100;
  let firstColMaxWidth = 150;

  const calColMaxWidth2 = Math.max(...respondentNames.map( (el) => el.length));
  const calColMaxWidth = (calColMaxWidth2 * 9  );
  if (+calColMaxWidth > colMaxWidth) {
    colMaxWidth = calColMaxWidth; 
  }
  if (+calColMaxWidth > firstColMaxWidth) {
    firstColMaxWidth = calColMaxWidth;
  }
  state.setState({firstColMaxWidth, colMaxWidth});
}

export default calcMaxRespondentNameLength;