import vizState from '../../GlobalState/vizState';

const styles = {
  fill: 'white',
  stroke: 'black',
  strokeWidth: 1,
  zindex: 99,
};

const heightValue = () => 26;

const titleHeight = vizState((state) => state.titleHeight);

const widthValue = (props) => {
  const shouldAdjustWidth = props.factorVizOptions.willAdjustCardWidth;
  if (shouldAdjustWidth === true) {
    const cardWidth = props.factorVizOptions.willAdjustCardWidthBy;
    return cardWidth;
  }
  return 110;
};

const renderBaseRectangles = (props) => (coords, index) => {
  const rectangleProps = {
    x: index * widthValue(props),
    y: 0 + titleHeight,
    width: widthValue(props),
    height: heightValue(),
    key: props.positionData.numRectsArray[index],
  };
  return <rect {...styles} {...rectangleProps} />;
};

export default (props) => <g>{props.positionData.uniques.map(renderBaseRectangles(props))}</g>;
