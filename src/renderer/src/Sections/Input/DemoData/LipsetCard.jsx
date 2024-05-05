import styled from 'styled-components';
import LoadLipsetData from './LoadLipsetData';
import { useTranslation } from 'react-i18next';

const LipsetCard = () => {
  const { t } = useTranslation();
  return (
    <Card>
      <CardMeta>Lipset</CardMeta>
      <CardLabel>33 {t('Statements')}</CardLabel>
      <CardSubLabel>9 {t('Participants')}</CardSubLabel>
      <LoadLipsetData />
    </Card>
  );
};
export default LipsetCard;

const Card = styled.div`
  display: grid;
  grid-auto-flow: row;
  justify-items: center;
  align-items: center;
  background-color: white;
  border: 2px solid black;
  height: 250px;
  width: 280px;
  border: 2px solid darkgray;
  border-radius: 5px;
`;

const CardMeta = styled.div`
  background-color: white;
  font-family: Helvetica, sans-serif;
  font-size: 28px;
  font-weight: bold;
`;

const CardLabel = styled.div`
  font-family: Helvetica, sans-serif;
  font-size: 18px;
`;

const CardSubLabel = styled.div`
  font-family: Helvetica, sans-serif;
  font-size: 18px;
`;
