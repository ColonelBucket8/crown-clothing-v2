import {
  BaseButton,
  ButtonSpinner,
  GoogleSignInButton,
  InvertedButton,
} from './button.style';
import { ButtonHTMLAttributes, FC } from 'react';

export enum BUTTON_TYPE_CLASSES {
  base = 'base',
  google = 'google-sign-in',
  inverted = 'inverted',
}

const getButton = (
  buttonType = BUTTON_TYPE_CLASSES.base
): typeof BaseButton => {
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

export type ButtonProps = {
  buttonType?: BUTTON_TYPE_CLASSES;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Three types of buttons: base, google, inverted
 * @param children
 * @param buttonType
 * @param isLoading
 * @param otherProps
 * @constructor
 */
const Button: FC<ButtonProps> = ({
  children,
  buttonType,
  isLoading,
  ...otherProps
}) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
};

export default Button;
