import { type UseFormRegister } from 'react-hook-form';

export const CustomTextInput = ({ label, register, required }: InputProps) => {
  return (
    <>
      <label>{label}</label>
      <input {...register(label, { required })} />
    </>
  );
};

type FormData = Record<string, unknown>;

export type InputProps = {
  label: string;
  register: UseFormRegister<FormData>;
  required: boolean;
};
