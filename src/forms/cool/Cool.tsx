import { CustomTextInput } from "./CustomTextInput"
import { useForm } from "react-hook-form"

export const Cool = () => {
  const { register } = useForm()
  return (
    <div className="cool-form">
      <div>Cool Form Placeholder</div>

      <CustomTextInput label="firstName" register={register} required={true} />
    </div>
  )
}