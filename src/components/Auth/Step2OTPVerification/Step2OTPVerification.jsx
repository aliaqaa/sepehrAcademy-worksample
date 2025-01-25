import { useRef } from "react";
import AuthSubmitButton from "../../common/modules/AuthSubmitButton/AuthSubmitButton";

const Step2OTPVerification = ({ onSubmit, register, errors, loading, apiError }) => {
  const otpRefs = useRef([]);

  const handleOtpChange = (index, event) => {
    const value = event.target.value;

    // If a digit is entered, move focus to the next input
    if (value && index < 3) {
      otpRefs.current[index + 1].focus();
    }

    // Automatically submit the form after the 4th digit
    if (index === 3 && value) {
      const otp = otpRefs.current.map((ref) => ref.value).join('');
      onSubmit({ verificationCode: otp });
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-center text-2xl font-bold mb-6">کد تایید را وارد کنید</h2>
      <div className="flex justify-center gap-4 flex-row-reverse">
        {[...Array(4)].map((_, index) => (
          <input
            key={index}
            {...register(`otp${index}`, { required: true })}
            type="text"
            maxLength="1"
            ref={(el) => (otpRefs.current[index] = el)}
            onChange={(e) => handleOtpChange(index, e)}
            className="w-12 h-12 text-center text-2xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        ))}
      </div>
      {errors.otp && (
        <p className="text-red-500 text-sm mt-2">کد تایید الزامی است</p>
      )}
      {apiError && <p className="text-red-500 text-sm mt-2">{apiError}</p>}
      <AuthSubmitButton title="تایید" loading={loading} />
    </form>
  );
};
export default Step2OTPVerification