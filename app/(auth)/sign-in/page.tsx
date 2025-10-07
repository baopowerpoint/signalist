"use client";
import { CountrySelectField } from "@/components/forms/CountrySelectField";
import FooterLink from "@/components/forms/FooterLink";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";
import { Button } from "@/components/ui/button";
import {
  INVESTMENT_GOALS,
  PREFERRED_INDUSTRIES,
  RISK_TOLERANCE_OPTIONS,
} from "@/lib/constants";
import React from "react";
import { useForm } from "react-hook-form";

const SigninPage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (data: SignInFormData) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1 className="form-title">Đăng nhập</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* INPUT */}
        <InputField
          name="email"
          label="Email"
          register={register}
          placeholder="Email"
          error={errors.email}
          validation={{
            required: "Vui lòng nhập email",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Email không hợp lệ",
            },
          }}
        />
        <InputField
          name="password"
          label="Mật khẩu"
          type="password"
          register={register}
          placeholder="Mật khẩu"
          error={errors.password}
          validation={{
            required: "Vui lòng nhập mật khẩu",
            minLength: {
              value: 8,
              message: "Mật khẩu phải có ít nhất 8 ký tự",
            },
          }}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="yellow-btn w-full mt-5"
        >
          Đăng nhập
        </Button>
        <FooterLink
          text="Bạn chưa có tài khoản?"
          linkText="Đăng ký"
          href="/sign-up"
        />
      </form>
    </>
  );
};

export default SigninPage;
