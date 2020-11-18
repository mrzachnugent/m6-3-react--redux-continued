import React from "react";
import styled from "styled-components";

import { COLORS, SHADOWS } from "../../COLORS";

export const Tags = ({ tag1, tag2 }) => {
  return (
    <div style={{ textAlign: "center", marginTop: "33px" }}>
      <TagsTitle>tags</TagsTitle>
      <CardContainer>
        <Card>
          <HideCorner />
          <FolderCorner />
          <p>{tag1}</p>
        </Card>
        <Card>
          <HideCorner />
          <FolderCorner />
          <p>{tag2}</p>
        </Card>
      </CardContainer>
    </div>
  );
};

const Card = styled.div`
  background: ${COLORS.grayfade};
  height: 29px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 22px 8px;
  font-weight: 600;
  font-size: 11px;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const HideCorner = styled.div`
  width: 0;
  height: 0;
  border-top: 10px solid ${COLORS.charcoal};
  border-right: 10px solid transparent;
  position: absolute;
  top: 0;
  left: 0;
`;

const FolderCorner = styled.div`
  width: 0;
  height: 0;
  border-bottom: 10px solid ${COLORS.grayfade};
  border-left: 10px solid transparent;
  position: absolute;
  top: 0;
  left: 0;
`;

const TagsTitle = styled.h3`
  font-size: 21px;
  text-shadow: ${SHADOWS.triple};
  font-weight: 400;
`;
