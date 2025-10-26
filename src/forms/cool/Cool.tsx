import { CustomTextInput } from './CustomTextInput';
import { useForm } from 'react-hook-form';
import styles from './cool.module.css';
type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export const Cool = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <div className="cool-form">
      <h2 className={styles.coolFormTitle}>Cool Form</h2>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.coolForm}>
        <CustomTextInput
          label="firstName"
          register={register}
          required={true}
        />
        <CustomTextInput
          label="Cool Last Name"
          register={register}
          required={true}
        />
        <CustomTextInput
          label="Cool Email"
          register={register}
          required={true}
        />
        <CustomTextInput
          label="Cool Password"
          register={register}
          required={true}
        />
        <button type="submit" className={styles.coolFormSubmitButton}>
          Cool Submit
        </button>
      </form>
    </div>
  );
};
