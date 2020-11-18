import React from "react";
import styled from "styled-components";
import { COLORS, SHADOWS } from "../../COLORS";

export const Header = ({ imgSrc, name, followers }) => {
  return (
    <HeaderContainer>
      <Avatar src={imgSrc} alt={`${name}'s avatar`} />
      <ArtistName>{name}</ArtistName>
      <FollowerCount>
        <span>{followers}</span> followers
      </FollowerCount>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 268px;
  height: 215px;
  position: relative;
  margin: 59px auto 0 auto;
`;

const Avatar = styled.img`
  position: absolute;
  border-radius: 50%;
  width: 175px;
  height: 175px;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`;

const ArtistName = styled.h1`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-shadow: ${SHADOWS.triple};
  font-size: 48px;
`;

const FollowerCount = styled.p`
  position: absolute;
  left: 50%;
  top: 85%;
  transform: translate(-50%, -50%);
  font-weight: 300;
  font-size: 14px;

  span {
    color: ${COLORS.primary};
    font-weight: 600;
  }
`;
