import styled from 'styled-components';
// import LoadPQMethodData from './LoadPQMethodData';
import { useTranslation } from 'react-i18next';

const PQMethodQsortsCard = () => {
  const { t } = useTranslation();

  return (
    <Card>
      <CardMeta>
        <CardLabel>2. {t('Load Q Sorts (DAT File)')}</CardLabel>
      </CardMeta>
      <Image>
        <img
          style={{ width: '250px', height: '165px' }}
          alt="Q sorts sample"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATEAAACvCAMAAACioBndAAADAFBMVEX///8AAADl5eXy//////H7//8AAFCFzfCLLgDL9/9eAAAvAACTLgDu7/LL8v8AAEL///vG8v/3///0041QAADt/////9/11JVCAELu9/8AAHv//+0AAIr38vLUoGKVzPT78ur/98sAAJPy8vL52JyaLgAAZa0AP5oAAF57AADX8v+NzvH/8saFzPUekM8AgcpyAACU0vTy8vjPiiHR+P90tt//+/j/++3S0ubz5czPkkn78vLy8t/0zo0AXGeZcE2hLgD/99AAAGjk///u8vj4+PgATaeo2PT006P///f/9/L//+T85bvq6u/W5e3/+99oAABCAADQ8v/y7+7/99bf/P/y+/u74fjf8/ff7/JgsOL/99v79+VJkMutcQD/9+V1sNk4kMoAeL8AP6Gyq5AATosALHouLi7BzeFWpNr46tHz6tG9uML92JwAP5PsvmuaTwDr6urz5cfOvb1kgab0zpUAToQAQISZeW/UkjlxXCvv06P52KLsyZUALIRwgmXPkjnL+//78u7l99//+9X48tH53ajz3Zz9042ggzwvAC/r3bWPvbHEkkqv3O///9D//MsAZLldAEIAK5OazOvzzIX39/LJnWoAAC+GAADd29//78Cv2vTiv4eCvuNko9SiTQC+7v/H1uf77tvl4OD51o3/5rUAKpsAAHLQoFcAYaffy6b93aJLUFmUwuOPrdofiMuIn6wALV3ZmTivYQCIQwCu4/3G7fqNzfWnzuNsqt46gr/85KwzY6LXnEi/ijqiXQiVQQCAx+7y8dv97NVImNOesc743K/qyJ24pZfgrV1xXD9CAC6TAADb+v/m9P3R6PnA5fjMxtLp2c/Qq3TluG+uhl5sv+ze4+k3l9RWnNLOwLPu166/kYEALkJdUjFCLgDz//Lp5dU4kM8Ab7tsLi3FfwAuNACwwtODrtEAiMrh0sEleK0AP4sAQHGKgmVBLkGneiZ1vd0igb+fkbKrn6vh2Jy3vZbYsZaYq4grQHuJiXhxQHEtLVB7QUAALi4BTwbIAAAP5UlEQVR42uyXZXATURDHd4kALU2ahCClSHApNpQiM3ygSCke3B2Ku7u7t4VSKFrc3d3d3d11BhgY7F1uJ0tzw10JA5/4fXlz/+yt9b3XW5BA+M/v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"
        />
      </Image>
      {/* <LoadPQMethodData /> */}
    </Card>
  );
};

export default PQMethodQsortsCard;

const Card = styled.div`
  display: grid;
  grid-auto-flow: row;
  justify-items: center;
  align-items: center;
  background-color: white;
  border: 2px solid black;
  height: 340px;
  width: 320px;
  border: 2px solid darkgray;
  border-radius: 5px;
`;

const Image = styled.div`
  background-color: white;
  width: 275px;
  height: 175px;
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
