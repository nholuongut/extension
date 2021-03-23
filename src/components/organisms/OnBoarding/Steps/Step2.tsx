import styled from 'styled-components';
import { Bulleito, Reload } from 'components/atoms/icons';
import { BackgroundButton, Title } from 'components/atoms';
import React, { useState } from 'react';
import { StepTypes } from './index';
import Text from '../components/Text';
import Video from '../components/Video';
import { Title1 } from '../../../atoms/Title1';

const Content = styled.div`
  width: 100%;
  max-width: 768px;
`;

const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  &:first-child {
    svg {
      width: 205px;
      height: auto;
    }
  }

  &:last-child {
    margin-top: 60px;

    & > div {
      &:last-child {
        margin-left: 100px;
      }
    }
  }
`;

const OnboardingTitle = styled(Title)`
  max-width: 330px;
  margin-left: 62px;
  font-size: 28px;
  color: ${props => props.theme.primaryColor};
`;

type Color = string | undefined;
const BackgroundColor = (color: Color) => {
  switch (color) {
    case 'inactive':
      return '#8A8B8E';
    default:
      return '#0CB46D';
  }
};

const OnboardingButton = styled(BackgroundButton)`
  display: flex;
  align-items: center;
  padding: 15px 34px;
  font-size: 28px;
  line-height: 1.2;
  font-weight: 600;
  border-radius: 33px;
  background-color: ${({ color }) => BackgroundColor(color)};
  border: ${({ color }) => BackgroundColor(color)};

  &:hover {
    background-color: ${({ color }) => BackgroundColor(color)};
    border: ${({ color }) => BackgroundColor(color)};
  }

  svg {
    margin-right: 16px;
    width: 32px;
    height: auto;
  }
`;

const MarginTitle = styled(Title1)`
  margin-left: 200px;
`;

export default ({ next }: StepTypes) => {
  const [displayVid, setDisplayVid] = useState(true);
  const onEnded = () => setDisplayVid(false);
  return (
    <>
      <MarginTitle>Épinglez DisMoi</MarginTitle>
      <Content>
        {displayVid && (
          <Video
            src={'/video/dismoi-onboarding.mp4'}
            autoPlay
            onEnded={onEnded}
          >
            Votre navigateur ne gère pas l&apos;élément <code>video</code>.
          </Video>
        )}
        {!displayVid && (
          <>
            <Line>
              <Bulleito />
              <OnboardingTitle align={'left'}>
                Tu es arrivé à épingler l&apos;extension DisMoi ?
              </OnboardingTitle>
            </Line>
            <Line>
              <div>
                <Text>Non, je n&apos;ai pas compris</Text>
                <OnboardingButton
                  color="inactive"
                  onClick={() => setDisplayVid(true)}
                >
                  <Reload /> Revoir le tuto
                </OnboardingButton>
              </div>
              <div>
                <Text>Oui, j&apos; épinglé DisMoi</Text>
                <OnboardingButton onClick={next}>
                  Dernière étape
                </OnboardingButton>
              </div>
            </Line>
          </>
        )}
      </Content>
    </>
  );
};
