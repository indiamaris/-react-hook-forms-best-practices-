import {
  InputText,
  type InputProps,
} from '../../components/InputText/InputText';

export const CustomTextInput = ({ label, register, required }: InputProps) => {
  return <InputText label={label} register={register} required={required} />;
};
