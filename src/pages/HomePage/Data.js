import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import TopSectionBackgroundImg from "../../images/header2.png";

  const TopSectionContainer = styled.div`
    width: 100%;
    height: 1000px;
    background: url(${TopSectionBackgroundImg});
    background-size: cover;

    @media screen and (max-width: 768px) {
      max-width: 100%;
      flex-basis: 100%;
      display: flex;
      justify-content: center;
`;


const LogoContainer = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 10px;
    padding-top: 290px;

    @media screen and (max-width: 991px) {
      padding-right: 30px;
      padding-left: 30px;
`;

const SloganText = styled.h3`
    margin: 0 0 0 -70px;
    padding: 0 0 0 -20px;
    line-height: 1;
    color: #fff;
    font-weight: 400;
    font-size: 40px;
`;

export const HomeButton = styled.button`
  border-radius: 4px;
  background: #f1cb3b;
  white-space: nowrap;
  padding: 15px 64px;
  margin-top: 15px;
  color: #fff;
  font-size: 20px;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: #ffb30c
    ;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const HomeButtonLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration: none;
  // padding: 8px 16px;
  height: 100%;
  // width: 100%;
  // border: none;
  // outline: none;
`;

export const homeObjOne = {
  primary: false,
  lightBg: true,
  lightTopLine: false,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Step 1',
  headline: 'Snap a Picture',
  description:
    "Start by snapping a picture of each piece of clothing in your wardrobe. Then, you'll be asked to answer a few questions that will allow us categorize every single piece properly.",
  imgStart: '',
  img: require('../../images/first.svg').default,
  alt: 'Camera',
  start: ''
};

export const homeObjTwo = {
  primary: false,
  lightBg: false,
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Step 2',
  headline:
    'View your Wardrobe',
  description:
    "After all of your clothes have been uploaded, you'll then have access to your entire wardrobe all at the touch of your fingertips. As time passes, you can delete old clothing you want to part ways with.",
  imgStart: 'start',
  img: require('../../images/second.svg').default,
  alt: 'Info',
  start: 'true'
};

export const homeObjThree = {
  primary: false,
  lightBg: true,
  lightTopLine: false,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Step 3',
  headline: 'Pick an Outfit',
  description:
    "Once you're satisfied with your wardrobe, click one button and have an outfit generated instantly. You can even select filters that will allow outfits to follow a colorscheme or be based around a particular piece!",
  buttonLabel: 'Sign Up Now',
  imgStart: '',
  img: require('../../images/third.svg').default,
  alt: 'Vault',
  start: ''
};

export function TopSection(props) {

    return (
        <TopSectionContainer>
                <LogoContainer>
                    <LogoContainer>
                        <SloganText>Digitize your entire closet and have us generate your next oufit</SloganText>
                        <HomeButton >
                          <HomeButtonLink to='/customer-access/signup'>
                            Join Now
                          </HomeButtonLink>
                        </HomeButton>
                    </LogoContainer>
                </LogoContainer>
        </TopSectionContainer>
    );
}