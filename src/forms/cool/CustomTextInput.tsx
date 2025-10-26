import { type UseFormRegister } from "react-hook-form"

export const CustomTextInput = ({ label, register, required }: InputProps) => {
  return (
    <>
      <label>{label}</label>
      <input {...register(label, { required })} />
    </>
  )
}

export type InputProps = {
  label: string
  register: UseFormRegister<any>
  required: boolean
}