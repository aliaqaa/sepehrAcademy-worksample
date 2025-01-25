import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import AuthInput from '../../common/modules/AuthInput/AuthInput';
import AuthSubmitButton from '../../common/modules/AuthSubmitButton/AuthSubmitButton';

const Register = () => {
  const [step, setStep] = useState(1);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const otpRefs = useRef([]); // Array of refs for OTP inputs

  const onSubmitPhone = (data) => {
    console.log('Phone Number:', data);
    setStep(2);
  };

  const onSubmitVerification = (data) => {
    console.log('Verification Code:', data);
    setStep(3);
  };

  const onSubmitFinal = (data) => {
    console.log('Final Form Data:', data);
    // Handle the final form submission here
  };

  // Handle OTP input change
  const handleOtpChange = (index, event) => {
    const value = event.target.value;

    // If a digit is entered, move focus to the next input
    if (value && index < 3) {
      otpRefs.current[index + 1].focus();
    }

    // Automatically submit the form after the 4th digit
    if (index === 3 && value) {
      const otp = otpRefs.current.map((ref) => ref.value).join('');
      onSubmitVerification({ verificationCode: otp });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className='rounded-full bg-lime-100 absolute top-0 left-0 px-3 py-2 border-gray-200'>{step}</div>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {step === 1 && (
          <form onSubmit={handleSubmit(onSubmitPhone)}>
            <h2 className='font-extrabold text-center text-3xl text-green-900 mb-10 mt-5'>ایجاد حساب کاربری</h2>
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
            <AuthSubmitButton title="دریافت کد تایید" />
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit(onSubmitVerification)}>
            <h2 className="text-center text-2xl font-bold mb-6">کد تایید را وارد کنید</h2>
            <div className="flex flex-row-reverse justify-center space-x-4">
              {[...Array(4)].map((_, index) => (
                <input
                  key={index}
                  {...register(`otp${index}`, { required: true })}
                  type="text"
                  maxLength="1"
                  ref={(el) => (otpRefs.current[index] = el)} // Assign ref to each input
                  onChange={(e) => handleOtpChange(index, e)} // Handle input change
                  className="w-12 h-12 text-center text-2xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              ))}
            </div>
            {errors.otp && (
              <p className="text-red-500 text-sm mt-2">کد تایید الزامی است</p>
            )}
            <AuthSubmitButton title="تایید" />
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handleSubmit(onSubmitFinal)}>
            <h2 className="text-center text-2xl font-bold mb-6">اطلاعات خود را وارد کنید</h2>
            <AuthInput
              register={register}
              name="name"
              placeholder="نام"
              rules={{ required: 'نام الزامی است' }}
              error={errors.name}
            />
            <AuthInput
              register={register}
              name="email"
              placeholder="ایمیل"
              rules={{ required: 'ایمیل الزامی است' }}
              type="email"
              error={errors.email}
            />
            <AuthSubmitButton title="ثبت نام" />
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;