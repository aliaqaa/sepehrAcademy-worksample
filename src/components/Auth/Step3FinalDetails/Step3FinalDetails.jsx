import AuthInput from "../../common/modules/AuthInput/AuthInput";
import AuthSubmitButton from "../../common/modules/AuthSubmitButton/AuthSubmitButton";

const Step3FinalDetails = ({ onSubmit, register, errors, loading, apiError }) => {
  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-center text-2xl font-bold mb-6">اطلاعات خود را وارد کنید</h2>
      <AuthInput
        register={register}
        name="password"
        placeholder="کلمه عبور"
        rules={{ required: 'کلمه عبور الزامی است' }}
        error={errors.password}
      />
      <AuthInput
        register={register}
        name="email"
        placeholder="ایمیل"
        rules={{ required: 'ایمیل الزامی است' }}
        type="email"
        error={errors.email}
      />
      {apiError && <p className="text-red-500 text-sm mt-2">{apiError}</p>}
      <AuthSubmitButton title="ثبت نام" loading={loading} />
    </form>
  );
};
export default Step3FinalDetails
