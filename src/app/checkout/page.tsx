"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useCart } from "@/src/context/CartContext";

const CheckoutPage = () => {
  const router = useRouter();
  const { items, total } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    paymentMethod: "e-money",
    eMoneyNumber: "",
    eMoneyPin: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const shipping = 50;
  const vat = Math.round(total * 0.2);
  const grandTotal = total + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handlePaymentMethodChange = (method: string) => {
    setFormData((prev) => ({ ...prev, paymentMethod: method }));
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Wrong format";
    }
    if (!formData.phoneNumber.trim())
      newErrors.phoneNumber = "Phone number is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.zipCode.trim()) newErrors.zipCode = "ZIP code is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";

    if (formData.paymentMethod === "e-money") {
      if (!formData.eMoneyNumber.trim())
        newErrors.eMoneyNumber = "e-Money number is required";
      if (!formData.eMoneyPin.trim())
        newErrors.eMoneyPin = "e-Money PIN is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Process checkout
      console.log("Checkout data:", formData);
      // Navigate to success page or show confirmation
    }
  };

  return (
    <div className="bg-[#F2F2F2] min-h-screen py-8 md:py-20">
      <div className="max-w-[1110px] mx-auto px-6">
        <button
          onClick={() => router.back()}
          className="text-black/50 font-normal text-[15px] hover:text-[#D87D4A] mb-6 md:mb-9 leading-[25px] cursor-pointer"
        >
          Go Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
          {/* Checkout Form */}
          <div className="bg-white rounded-lg p-6 md:p-12">
            <h1 className="text-[28px] md:text-[32px] font-bold uppercase leading-9 tracking-[1.14px] mb-8 md:mb-10">
              Checkout
            </h1>

            <form onSubmit={handleSubmit}>
              {/* Billing Details */}
              <div className="mb-8">
                <h2 className="text-[#D87D4A] text-[13px] font-bold uppercase leading-[25px] tracking-[0.93px] mb-4">
                  Billing Details
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <label
                        className={`block text-[12px] font-bold tracking-[-0.21px] ${
                          errors.name ? "text-[#CD2C2C]" : "text-black"
                        }`}
                      >
                        Name
                      </label>
                      {errors.name && (
                        <p className="font-normal text-[#CD2C2C] text-[12px] tracking-[-0.21px]">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Alexei Ward"
                      className={`w-full px-6 py-4 border-2 ${
                        errors.name ? "border-[#CD2C2C]" : "border-[#CFCFCF]"
                      } rounded-lg text-[14px] font-bold tracking-[-0.25px] focus:border-[#D87D4A] outline-none`}
                    />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <label
                        className={`block text-[12px] font-bold tracking-[-0.21px] ${
                          errors.name ? "text-[#CD2C2C]" : "text-black"
                        }`}
                      >
                        Email Address
                      </label>
                      {errors.email && (
                        <span className="text-[#CD2C2C] text-[12px]">
                          {errors.email}
                        </span>
                      )}
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="alexei@mail.com"
                      className={`w-full px-6 py-4 border-2 ${
                        errors.name ? "border-[#CD2C2C]" : "border-[#CFCFCF]"
                      } rounded-lg text-[14px] font-bold tracking-[-0.25px] focus:border-[#D87D4A] outline-none`}
                    />
                  </div>

                  <div className="md:col-span-1">
                    <div className="flex justify-between mb-2">
                      <label
                        className={`block text-[12px] font-bold tracking-[-0.21px] ${
                          errors.name ? "text-[#CD2C2C]" : "text-black"
                        }`}
                      >
                        Phone Number
                      </label>
                      {errors.phoneNumber && (
                        <p className="text-[#CD2C2C] text-[12px]">
                          {errors.phoneNumber}
                        </p>
                      )}
                    </div>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="+1 202-555-0136"
                      className={`w-full px-6 py-4 border-2 ${
                        errors.name ? "border-[#CD2C2C]" : "border-[#CFCFCF]"
                      } rounded-lg text-[14px] font-bold tracking-[-0.25px] focus:border-[#D87D4A] outline-none`}
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Info */}
              <div className="mb-8">
                <h2 className="text-[#D87D4A] text-[13px] font-bold uppercase leading-[25px] tracking-[0.93px] mb-4">
                  Shipping Info
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <div className="flex justify-between mb-2">
                      <label
                        className={`block text-[12px] font-bold tracking-[-0.21px] ${
                          errors.name ? "text-[#CD2C2C]" : "text-black"
                        }`}
                      >
                        Address
                      </label>
                      {errors.address && (
                        <p className="text-[#CD2C2C] text-[12px]">
                          {errors.address}
                        </p>
                      )}
                    </div>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="1137 Williams Avenue"
                      className={`w-full px-6 py-4 border-2 ${
                        errors.name ? "border-[#CD2C2C]" : "border-[#CFCFCF]"
                      } rounded-lg text-[14px] font-bold tracking-[-0.25px] focus:border-[#D87D4A] outline-none`}
                    />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <label
                        className={`block text-[12px] font-bold tracking-[-0.21px] ${
                          errors.name ? "text-[#CD2C2C]" : "text-black"
                        }`}
                      >
                        ZIP Code
                      </label>
                      {errors.zipCode && (
                        <p className="text-[#CD2C2C] text-[12px]">
                          {errors.zipCode}
                        </p>
                      )}
                    </div>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      placeholder="10001"
                      className={`w-full px-6 py-4 border-2 ${
                        errors.name ? "border-[#CD2C2C]" : "border-[#CFCFCF]"
                      } rounded-lg text-[14px] font-bold tracking-[-0.25px] focus:border-[#D87D4A] outline-none`}
                    />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <label
                        className={`block text-[12px] font-bold tracking-[-0.21px] ${
                          errors.name ? "text-[#CD2C2C]" : "text-black"
                        }`}
                      >
                        City
                      </label>
                      {errors.city && (
                        <p className="text-[#CD2C2C] text-[12px]">
                          {errors.city}
                        </p>
                      )}
                    </div>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="New York"
                      className={`w-full px-6 py-4 border-2 ${
                        errors.name ? "border-[#CD2C2C]" : "border-[#CFCFCF]"
                      } rounded-lg text-[14px] font-bold tracking-[-0.25px] focus:border-[#D87D4A] outline-none`}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <div className="flex justify-between mb-2">
                      <label
                        className={`block text-[12px] font-bold tracking-[-0.21px] ${
                          errors.name ? "text-[#CD2C2C]" : "text-black"
                        }`}
                      >
                        Country
                      </label>
                      {errors.country && (
                        <p className="text-[#CD2C2C] text-[12px]">
                          {errors.country}
                        </p>
                      )}
                    </div>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      placeholder="United States"
                      className={`w-full px-6 py-4 border-2 ${
                        errors.name ? "border-[#CD2C2C]" : "border-[#CFCFCF]"
                      } rounded-lg text-[14px] font-bold tracking-[-0.25px] focus:border-[#D87D4A] outline-none`}
                    />
                  </div>
                </div>
              </div>

              {/* Payment Details */}
              <div>
                <h2 className="text-[#D87D4A] text-[13px] font-bold uppercase leading-[25px] tracking-[0.93px] mb-4">
                  Payment Details
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2 md:flex">
                    <label className="block text-[12px] font-bold mb-4 md:w-1/2">
                      Payment Method
                    </label>
                    <div className="space-y-4 flex-1">
                      <button
                        type="button"
                        onClick={() => handlePaymentMethodChange("e-money")}
                        className={`w-full px-6 py-4 border cursor-pointer ${
                          formData.paymentMethod === "e-money"
                            ? "border-[#D87D4A]"
                            : "border-[#CFCFCF]"
                        } rounded-lg text-[14px] font-bold text-left flex items-center gap-4 hover:border-[#D87D4A]`}
                      >
                        <div
                          className={`w-5 h-5 rounded-full border-2 ${
                            formData.paymentMethod === "e-money"
                              ? "border-[#D87D4A]"
                              : "border-[#CFCFCF]"
                          } flex items-center justify-center`}
                        >
                          {formData.paymentMethod === "e-money" && (
                            <div className="w-2.5 h-2.5 rounded-full bg-[#D87D4A]" />
                          )}
                        </div>
                        e-Money
                      </button>

                      <button
                        type="button"
                        onClick={() => handlePaymentMethodChange("cash")}
                        className={`w-full px-6 py-4 border cursor-pointer ${
                          formData.paymentMethod === "cash"
                            ? "border-[#D87D4A]"
                            : "border-[#CFCFCF]"
                        } rounded-lg text-[14px] font-bold text-left flex items-center gap-4 hover:border-[#D87D4A]`}
                      >
                        <div
                          className={`w-5 h-5 rounded-full border-2 ${
                            formData.paymentMethod === "cash"
                              ? "border-[#D87D4A]"
                              : "border-[#CFCFCF]"
                          } flex items-center justify-center`}
                        >
                          {formData.paymentMethod === "cash" && (
                            <div className="w-2.5 h-2.5 rounded-full bg-[#D87D4A]" />
                          )}
                        </div>
                        Cash on Delivery
                      </button>
                    </div>
                  </div>

                  {formData.paymentMethod === "e-money" && (
                    <>
                      <div>
                        <div className="flex justify-between mb-2">
                          <label
                            className={`block text-[12px] font-bold tracking-[-0.21px] ${
                              errors.name ? "text-[#CD2C2C]" : "text-black"
                            }`}
                          >
                            e-Money Number
                          </label>
                          {errors.eMoneyNumber && (
                            <p className="text-[#CD2C2C] text-[12px]">
                              {errors.eMoneyNumber}
                            </p>
                          )}
                        </div>
                        <input
                          type="text"
                          name="eMoneyNumber"
                          value={formData.eMoneyNumber}
                          onChange={handleInputChange}
                          placeholder="238521993"
                          className={`w-full px-6 py-4 border-2 ${
                            errors.name
                              ? "border-[#CD2C2C]"
                              : "border-[#CFCFCF]"
                          } rounded-lg text-[14px] font-bold tracking-[-0.25px] focus:border-[#D87D4A] outline-none`}
                        />
                      </div>

                      <div>
                        <div className="flex justify-between mb-2">
                          <label
                            className={`block text-[12px] font-bold tracking-[-0.21px] ${
                              errors.name ? "text-[#CD2C2C]" : "text-black"
                            }`}
                          >
                            e-Money PIN
                          </label>
                          {errors.eMoneyPin && (
                            <p className="text-[#CD2C2C] text-[12px]">
                              {errors.eMoneyPin}
                            </p>
                          )}
                        </div>

                        <input
                          type="text"
                          name="eMoneyPin"
                          value={formData.eMoneyPin}
                          onChange={handleInputChange}
                          placeholder="6891"
                          className={`w-full px-6 py-4 border-2 ${
                            errors.name
                              ? "border-[#CD2C2C]"
                              : "border-[#CFCFCF]"
                          } rounded-lg text-[14px] font-bold tracking-[-0.25px] focus:border-[#D87D4A] outline-none`}
                        />
                      </div>
                    </>
                  )}

                  {formData.paymentMethod === "cash" && (
                    <div className="md:col-span-2 flex gap-8 items-start">
                      <div className="w-12 h-12 shrink-0">
                        <svg
                          width="48"
                          height="48"
                          viewBox="0 0 48 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M42.2812 8.4375H46.5938C47.3704 8.4375 48 9.06713 48 9.84375C48 10.6204 47.3704 11.25 46.5938 11.25H45.0938V23.9062C45.0938 24.6829 44.4641 25.3125 43.6875 25.3125H33.8438V40.9688C33.8438 41.7454 33.2141 42.375 32.4375 42.375H25.0773C24.4239 45.5805 21.5831 48 18.1875 48H1.40625C0.629625 48 0 47.3704 0 46.5938C0 45.8171 0.629625 45.1875 1.40625 45.1875H18.1875C20.021 45.1875 21.585 44.012 22.1653 42.375H8.4375C7.66087 42.375 7.03125 41.7454 7.03125 40.9688C7.03125 40.1921 7.66087 39.5625 8.4375 39.5625H12.5625C13.3379 39.5625 13.9688 38.9317 13.9688 38.1562C13.9688 37.3808 13.3379 36.75 12.5625 36.75H9.43444C6.87619 36.75 4.37297 37.6373 2.38575 39.2485C1.78247 39.7376 0.896906 39.6454 0.407719 39.0419C-0.0814688 38.4385 0.0110625 37.553 0.614344 37.0639C2.84203 35.2578 5.58806 34.1792 8.4375 33.9741V18.375C8.4375 17.5984 9.06713 16.9688 9.84375 16.9688H18.375V7.03125C18.375 6.25462 19.0046 5.625 19.7812 5.625H28.1223C31.9334 2.02078 36.9875 0 42.2641 0H46.5938C47.3704 0 48 0.629625 48 1.40625C48 2.18287 47.3704 2.8125 46.5938 2.8125H42.2642C38.805 2.8125 35.4975 3.79453 32.658 5.625H38.0625C38.8326 5.625 39.4688 6.25228 39.4688 7.03125C39.4688 7.52423 39.3372 7.69561 38.4891 8.80021C38.0648 9.3528 37.4613 10.1389 36.6052 11.3157C36.2039 11.8513 36.3433 12.6075 36.8974 12.9688C37.4088 13.3025 38.0923 13.1781 38.4534 12.6856L41.1473 9.01219C41.4121 8.65088 41.8333 8.4375 42.2812 8.4375ZM32.4375 16.9688C32.9273 16.9688 33.3582 17.2195 33.6099 17.5993C35.4415 15.9118 34.2652 12.7969 31.7344 12.7969C29.5943 12.7969 28.2687 15.1348 29.3533 16.9688H32.4375ZM21.1875 8.4375H35.2472C35.0152 8.75898 34.8251 9.00687 34.6644 9.21646C34.3106 9.67792 34.0992 9.95371 33.896 10.4204C29.6796 8.64131 25.1696 12.4771 26.337 16.9688H21.1875V8.4375ZM22.5938 25.4062V19.7812H19.7812V25.4062H22.5938ZM31.0312 39.5625H16.5403C17.5098 36.8283 15.4711 33.9375 12.5625 33.9375H11.25V19.7812H16.9688V26.8125C16.9688 27.5891 17.5984 28.2188 18.375 28.2188H24C24.7766 28.2188 25.4062 27.5891 25.4062 26.8125V19.7812H31.0312V39.5625ZM33.8438 20.7288V22.5H42.2812V12.2217L40.7213 14.3488C39.9301 15.4278 38.6519 16.0371 37.2972 15.9602C37.1467 18.1043 35.7894 19.9393 33.8438 20.7288Z"
                            fill="#D87D4A"
                          />
                        </svg>
                      </div>
                      <p className="text-black/50 text-[15px] leading-[25px]">
                        The &apos;Cash on Delivery&apos; option enables you to
                        pay in cash when our delivery courier arrives at your
                        residence. Just make sure your address is correct so
                        that your order will not be cancelled.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>

          {/* Summary */}
          <div className="bg-white rounded-lg p-6 md:p-8 h-fit">
            <h2 className="text-[18px] font-bold uppercase tracking-[1.29px] mb-8">
              Summary
            </h2>

            <div className="space-y-6 mb-8">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-[#F1F1F1] rounded-lg flex items-center justify-center">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={40}
                        height={40}
                      />
                    </div>
                    <div>
                      <p className="text-[15px] font-bold leading-[25px] text-black">
                        {item.name}
                      </p>
                      <p className="text-black/50 text-[14px] font-bold leading-[25px]">
                        $ {item.price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <p className="text-black/50 text-[15px] font-bold">
                    x{item.quantity}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-2 mb-6">
              <div className="flex justify-between items-center">
                <p className="text-black/50 text-[15px] leading-[25px] uppercase">
                  Total
                </p>
                <p className="font-bold text-[18px]">
                  $ {total.toLocaleString()}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-black/50 text-[15px] leading-[25px] uppercase">
                  Shipping
                </p>
                <p className="font-bold text-[18px]">$ {shipping}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-black/50 text-[15px] leading-[25px] uppercase">
                  VAT (Included)
                </p>
                <p className="font-bold text-[18px]">
                  $ {vat.toLocaleString()}
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center mb-8">
              <p className="text-black/50 text-[15px] leading-[25px]  uppercase">
                Grand Total
              </p>
              <p className="font-bold text-[18px] text-[#D87D4A]">
                $ {grandTotal.toLocaleString()}
              </p>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-[#D87D4A] text-white py-4 hover:bg-[#FBAF85] font-bold text-[13px] tracking-[1px] uppercase transition-all duration-500 ease-in-out hover:-translate-y-0.5 hover:shadow-lg cursor-pointer"
            >
              Continue & Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
