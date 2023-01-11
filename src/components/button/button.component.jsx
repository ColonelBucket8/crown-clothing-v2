import { BaseButton, GoogleSignInButton, InvertedButton } from './button.style';

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => {
  switch (buttonType) {
    case BUTTON_TYPE_CLASSES.base:
      return BaseButton;
    case BUTTON_TYPE_CLASSES.google:
      return GoogleSignInButton;
    case BUTTON_TYPE_CLASSES.inverted:
      return InvertedButton;
    default:
      return BaseButton;
  }
};

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
