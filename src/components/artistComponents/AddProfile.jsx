import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Select,
  Checkbox,
} from "@material-tailwind/react";
import { useState } from "react";
import { Textarea } from "@material-tailwind/react";
import { ToastContainer } from "react-toastify";
import { useFormik } from "formik";
import { GenerateError, GenerateSuccess } from "../../toast/toast";
import { ProfileUpdateSchema } from "../../yup/validation";
import { addProfile } from "../../api/artistApi";
import CountriesSelect from "./Select Country";
import { Badge, IconButton, Avatar } from "@material-tailwind/react";
import { PlusCircleIcon } from "@heroicons/react/20/solid";

export default function DialogWithForm() {
  const [open, setOpen] = React.useState(false);
  const [dp, setDp] = useState('');
  const handleOpen = () => setOpen((cur) => !cur);

  const initialValues = {
    category: "",
    experience: "",
    place: "",
    description: "",
    number: "",
    image: "",
  };
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    handleChange,
    setFieldValue,
    setValues,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: ProfileUpdateSchema,
    onSubmit: async (values) => {
      
      const response = await addProfile(values,dp);
      if (response.data.created) {
        GenerateSuccess(response.data.message);
      } else {
        GenerateError(response.data.message);
      }
    },
  });

  const handleCityClick = (selectedCity) => {
    setFieldValue("place", selectedCity);
  };

  const handleImageClick = () => {
    document.getElementById("imageInput").click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
      setDp(url)
    setFieldValue("image", file);
  };

  return (
    <>
      <Button className="bg-[#4f614e]" onClick={handleOpen}>
        Complete Now
      </Button>

      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <form onSubmit={handleSubmit}>
          <Card className="mx-auto w-full max-w-[24rem]">
            <CardBody className="flex flex-col gap-4">
              <div className="flex justify-center" onClick={handleImageClick}>
                <Badge
                  className="bg-[#4eaa5b]"
                  content={<PlusCircleIcon />}
                  overlap="circular"
                  placement="bottom-end"
                >
                  <img
                    className="w-28 h-28 rounded-full"
                    src={
                      dp
                        ? values.image
                        : "https://i.pinimg.com/564x/16/8a/20/168a209a4a487fd73e83c419f3ae3682.jpg"
                    }
                    alt="nghhjgjh"
                  />
                </Badge>
              </div>
              <input
                id="imageInput"
                name="image"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
                {touched.image && errors.image && (
                <div className="text-red-500 text-xs ">{errors.image}</div>
              )}

              <Input
                label="Category"
                name="category"
                value={values.category}
                onChange={handleChange}
                onBlur={handleBlur}
                size="lg"
              />
              {touched.category && errors.category && (
                <div className="text-red-500 text-xs ">{errors.category}</div>
              )}
              <div className=" flex items-center gap-4">
                <CountriesSelect onCityClick={handleCityClick} />
                {touched.place && errors.place && (
                  <div className="text-red-500 text-xs ">{errors.place}</div>
                )}
              </div>
              <Input
                label="Mobile"
                size="lg"
                name="number"
                type="number"
                value={values.number}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.number && errors.number && (
                <div className="text-red-500 text-xs ">{errors.number}</div>
              )}
              <Input
                label="Experience"
                name="experience"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                size="lg"
              />
              {touched.experience && errors.experience && (
                <div className="text-red-500 text-xs ">{errors.experience}</div>
              )}
              <div>
                <Input
                  label="description"
                  name="description"
                  style={{ Height: "40px" }}
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.description && errors.description && (
                  <div className="text-red-500 text-xs ">
                    {errors.description}
                  </div>
                )}
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" type="submit" fullWidth>
                Update
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Dialog>
    </>
  );
}
