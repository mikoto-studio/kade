import styled from 'styled-components';
import vizState from '../../GlobalState/vizState';

const UserTextInput = (props) => {
  const handleChange = (e) => {
    const factorVizOptionsHolder = vizState((state) => state.factorVizOptionsHolder);
    const key = props.name;
    factorVizOptionsHolder[key] = e.target.value;
    vizState.factorVizOptionsHolder = factorVizOptionsHolder;
    vizState.updateFactorVisualizationsButtonColor = 'orange';
  };

  return (
    <UserText
      placeholder={props.placeholder}
      width={props.width}
      left={props.left}
      name={props.name}
      value={props.value}
      onChange={handleChange}
      className="optionsInput"
    />
  );
};

export default UserTextInput;

const UserText = styled.input((props) => ({
  // width: `${props.width}px`,
  width: `90%`,
  marginLeft: `${props.left}px`,
  paddingLeft: `10px`,
}));
