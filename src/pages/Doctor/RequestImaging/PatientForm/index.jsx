import React, { useEffect } from "react";
import { StyledInput } from "../../../../components/Form/Input";
import { ButtonOutlined } from "../../../../components/Button";
import Select from "../../../../components/Form/Select";
import { StyledLabel } from "../../../../components/Form/StyledElements";
import FormErrorMessage from "../../../../components/Form/FormErrorMessage";

const PatientForm = ({
  onCancel,
  setPatient,
  patient,
  register,
  setValue,
  unregister,
  errors = {},
}) => {
  const handleChange = (e) => {
    setPatient((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    return () => {
      unregister("sex");
    };
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <div className="flex flex-row">
        <div style={{}} className="mr-6 mb-8">
          <StyledInput
            name="firstName"
            variant="outlined"
            placeholder="First name"
            {...register("firstName", { required: "This is required field" })}
            onChange={handleChange}
            error={Boolean(errors.firstName)}
          />
          <FormErrorMessage errors={errors} name="firstName" />
        </div>{" "}
        <div style={{}} className="mr-6 mb-8">
          <StyledInput
            name="lastName"
            variant="outlined"
            placeholder="Last name"
            {...register("lastName", { required: "This is a required field" })}
            onChange={handleChange}
            error={Boolean(errors.lastName)}
          />
          <FormErrorMessage errors={errors} name="lastName" />
        </div>
      </div>
      <div className="flex flex-row">
        <div style={{}} className="mb-8 mr-6">
          <StyledInput
            name="age"
            type="number"
            variant="outlined"
            placeholder="Age"
            {...register("age", { required: "This is a required field" })}
            onChange={handleChange}
            error={Boolean(errors.age)}
          />
          <FormErrorMessage errors={errors} name="age" />
        </div>{" "}
        <div style={{}} className="mb-8">
          <StyledInput
            type="number"
            variant="outlined"
            placeholder="Phone number"
            name="phoneNumber"
            {...register("phoneNumber", {
              required: "This is a required field",
            })}
            onChange={handleChange}
            error={Boolean(errors.phoneNumber)}
          />
          <FormErrorMessage errors={errors} name="phoneNumber" />
        </div>
      </div>
      <div className="mb-8">
        <StyledLabel>Sex</StyledLabel>

        <Select
          options={[
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
          ]}
          error={Boolean(errors.sex)}
          {...register("sex", {
            required: "This is a required field",
            minLength: 1,
          })}
          name="sex"
          onChange={(item) => {
            setPatient((prev) => ({ ...prev, sex: item.value }));
            setValue("sex", item.value);
          }}
        />
        <FormErrorMessage errors={errors} name="sex" />
      </div>
      <ButtonOutlined onClick={onCancel}>Cancel</ButtonOutlined>
    </div>
  );
};

export default PatientForm;
