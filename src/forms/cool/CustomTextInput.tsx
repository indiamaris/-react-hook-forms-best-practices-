import { InputText } from '../../components/InputText/InputText';
import { type UseFormRegister } from 'react-hook-form';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export const CustomTextInput = ({ label, register, required }: CustomInputProps) => {
  return <InputText<FormData> label={label} register={register} required={required} />;
};

type CustomInputProps = {
  label: string;
  placeholder?: string;
  register: UseFormRegister<FormData>;
  required: boolean;
};
