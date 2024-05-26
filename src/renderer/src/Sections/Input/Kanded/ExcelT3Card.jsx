import styled from 'styled-components';
// import LoadExcelT3 from './LoadExcelT3';
import { useTranslation } from 'react-i18next';

const ExcelT3Card = () => {
  const { t } = useTranslation();

  return (
    <Card>
      <CardMeta>
        <CardLabel>1. {t('KADE or Ken-Q Analysis File')}</CardLabel>
      </CardMeta>
      <Image>
        <img
          style={{ width: '250px', height: '165px' }}
          alt="Excel Type 2 sample"
          src="data:image/png;base64,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"
        />
      </Image>
      {/* <LoadExcelT3 /> */}
    </Card>
  );
};

export default ExcelT3Card;

const Card = styled.div`
  display: grid;
  grid-auto-flow: row;
  justify-items: center;
  align-items: center;
  background-color: white;
  height: 340px;
  width: 320px;
  border: 2px solid darkgray;
  border-radius: 5px;
`;

const Image = styled.div`
  background-color: white;
`;

const CardMeta = styled.div`
  background-color: white;
  font-family: Helvetica, sans-serif;
  font-size: 18px;
  font-weight: bold;
`;

const CardLabel = styled.div`
  font-family: Helvetica, sans-serif;
  font-size: 18px;
  font-weight: bold;
`;
