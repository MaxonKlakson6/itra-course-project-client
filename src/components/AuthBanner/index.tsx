import {
  Button,
  Title,
  TogglePageLink,
  Wrapper,
} from 'src/components/AuthBanner/styles';

interface AuthBannerProps {
  title: string;
  buttonText: string;
  anotherPageUrl: string;
}

const AuthBanner = ({
  title,
  buttonText,
  anotherPageUrl,
}: AuthBannerProps): JSX.Element => (
  <Wrapper>
    <Title>{title}</Title>
    <TogglePageLink to={anotherPageUrl}>
      <Button>{buttonText}</Button>
    </TogglePageLink>
  </Wrapper>
);

export default AuthBanner;
