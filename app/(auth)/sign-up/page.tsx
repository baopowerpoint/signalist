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

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      country: "VN",
      investmentGoals: "Growth",
      riskTolerance: "Low",
      preferredIndustry: "Technology",
    },
    mode: "onBlur",
  });

  const onSubmit = async (data: SignUpFormData) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1 className="form-title">Đăng ký và cá nhân hóa</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* INPUT */}
        <InputField
          name="fullName"
          label="Tên đầy đủ"
          register={register}
          placeholder="Tên đầy đủ"
          error={errors.fullName}
          validation={{
            required: "Vui lòng nhập tên đầy đủ",
            minLength: { value: 2, message: "Tên phải có ít nhất 2 ký tự" },
          }}
        />{" "}
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
        />{" "}
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
        {/* COUNTRY */}
        <CountrySelectField
          name="country"
          label="Quốc gia"
          control={control}
          error={errors.country}
          required
        />
        {/* INVESTMENT GOALS */}
        <SelectField
          name="investmentGoals"
          label="Mục tiêu đầu tư"
          placeholder="Mục tiêu đầu tư"
          options={INVESTMENT_GOALS}
          control={control}
          error={errors.investmentGoals}
          required
        />
        <SelectField
          name="riskTolerance"
          label="Mức độ chấp nhận rủi ro"
          placeholder="Mức độ chấp nhận rủi ro"
          options={RISK_TOLERANCE_OPTIONS}
          control={control}
          error={errors.riskTolerance}
          required
        />
        <SelectField
          name="preferredIndustry"
          label="Lĩnh vực đầu tư"
          placeholder="Lĩnh vực đầu tư"
          options={PREFERRED_INDUSTRIES}
          control={control}
          error={errors.preferredIndustry}
          required
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="yellow-btn w-full mt-5"
        >
          Đăng ký
        </Button>
        <FooterLink
          text="Đã có tài khoản?"
          linkText="Đăng nhập"
          href="/sign-in"
        />
      </form>
    </>
  );
};

export default SignupPage;
