import AuthInput from '../../common/modules/AuthInput/AuthInput'
import AuthSubmitButton from '../../common/modules/AuthSubmitButton/AuthSubmitButton'
const Step1PhoneNumber = ({ onSubmit, register, errors, loading, apiError }) => {
  return (
    <form onSubmit={onSubmit}>
      <h2 className="font-extrabold text-center text-3xl text-green-900 mb-10 mt-5">
        ایجاد حساب کاربری
      </h2>
      <AuthInput
        register={register}
        name="phoneNumber"
        placeholder="شماره همراه"
        rules={{
          required: 'شماره همراه را درست وارد کنید',
          pattern: {
            value: /^(09[0-9]{9}|0[1-9]{2}-[0-9]{4}-[0-9]{4})$/,
            message: 'Invalid phone number format',
          },
        }}
        error={errors.phoneNumber}
      />
      {apiError && <p className="text-red-500 text-sm mt-2">{apiError}</p>}
      <AuthSubmitButton title="دریافت کد تایید" loading={loading} />
    </form>
  );
};
export default Step1PhoneNumber