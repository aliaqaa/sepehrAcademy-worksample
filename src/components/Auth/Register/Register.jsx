import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useApi from '../../../hooks/useAuth'; // Adjust the path as needed
import Step1PhoneNumber from '../Step1PhoneNumber/Step1PhoneNumber';
import Step2OTPVerification from '../Step2OTPVerification/Step2OTPVerification';
import Step3FinalDetails from '../Step3FinalDetails/Step3FinalDetails';

const Register = () => {
  const [step, setStep] = useState(1);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { loading, error: apiError, sendCode, verifyCode, registerNewUser } = useApi();

  const onSubmitPhone = async (data) => {
    try {
      await sendCode(data );
      setStep(2); 
    } catch (err) {
      console.error('Error sending code:', err);
    }
  };

  const onSubmitVerification = async (data) => {
    try {
      await verifyCode({ phoneNumber: data.phoneNumber, verificationCode: data.verificationCode });
      setStep(3); // Move to the next step if the API call is successful
      console.log(data);

    } catch (err) {
      console.error('Error verifying code:', err);
    }
  };

  const onSubmitFinal = async (data) => {
    try {
      await registerNewUser(data);
      console.log('User registered successfully!');
      // Redirect or show a success message
    } catch (err) {
      console.error('Error registering user:', err);
    }
  };

  return (
    <div className=" flex items-center justify-center ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md my-20">
        {step === 1 && (
          <Step1PhoneNumber
            onSubmit={handleSubmit(onSubmitPhone)}
            register={register}
            errors={errors}
            loading={loading}
            apiError={apiError}
          />
        )}

        {step === 2 && (
          <Step2OTPVerification
            onSubmit={handleSubmit(onSubmitVerification)}
            register={register}
            errors={errors}
            loading={loading}
            apiError={apiError}
          />
        )}

        {step === 3 && (
          <Step3FinalDetails
            onSubmit={handleSubmit(onSubmitFinal)}
            register={register}
            errors={errors}
            loading={loading}
            apiError={apiError}
          />
        )}
      </div>
    </div>
  );
};

export default Register;