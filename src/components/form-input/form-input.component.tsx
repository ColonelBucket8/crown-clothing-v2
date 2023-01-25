import './form-input.style';
import { FormInputLabel, Group, Input } from './form-input.style';
import { FC, InputHTMLAttributes } from 'react';

type FormInputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  const doesShrink = Boolean(
    otherProps.value &&
      typeof otherProps.value === 'string' &&
      otherProps.value.length
  );

  return (
    <Group>
      <Input {...otherProps} />
      {label && <FormInputLabel shrink={doesShrink}>{label}</FormInputLabel>}
    </Group>
  );
};

export default FormInput;
