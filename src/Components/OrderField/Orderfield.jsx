import React from "react";
import "./OrderField.css";
import { useForm } from "react-hook-form";
import CustomButton from "../../Utils/Constant/CustomButton/CustomButton";

const Orderfield = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <>
      <div className="fullScreen">
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="ContactWrapper "
        >
          <div className="ContactForm">
            <h1 className="text-center">Checkout Form</h1>

            <h5>
              Please fill out the form below to complete your purchase. Ensure
              all details are accurate to avoid delays.{" "}
            </h5>

            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="Full name"
                {...register("Full name", { required: true, maxLength: 80 })}
              />

              <input
                type="text"
                placeholder="Email"
                {...register("Email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              <input
                type="tel"
                placeholder="Mobile number"
                {...register("Mobile number", {
                  required: true,
                  minLength: 6,
                  maxLength: 12,
                })}
              />
              <input
                type="text"
                placeholder="Address"
                {...register("Address", { required: true, maxLength: 100 })}
              />

              <div className="contactBtn">
                <CustomButton title="Submit" />
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orderfield;
