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
          label="Cool First Name"
          placeholder="Enter your very cool first name"
          register={register}
          required={true}
        />
        <CustomTextInput
          label="Cool Last Name"
          placeholder="Enter your very cool last name"
          register={register}
          required={true}
        />
        <CustomTextInput
          label="Cool Email"
          placeholder="Enter your very cool email"
          register={register}
          required={true}
        />
        <CustomTextInput
          label="Cool Password"
          placeholder="Enter your very cool password (at least 8 characters)"
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
