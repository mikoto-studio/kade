import React from "react";
import styled from "styled-components";
import { view } from "react-easy-state";
import LoadExcelT1 from "./LoadExcelT1";

const CsvQsortsCard = () => (
  <Card>
    <CardMeta>
      <CardLabel>Type 1 File (Q sorts in columns)</CardLabel>
    </CardMeta>
    <Image>
      <img
        style={{ width: "250px", height: "165px" }}
        alt="Excel Type 1 sample"
        src="data:image/png;base64,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"
      />
    </Image>
    <LoadExcelT1 />
  </Card>
);

export default view(CsvQsortsCard);

const Card = styled.div`
  display: grid;
  grid-auto-flow: row;
  justify-items: center;
  align-items: center;
  background-color: white;
  border: 2px solid black;
  height: 300px;
  width: 280px;
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
