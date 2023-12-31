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
  Option,
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
import { useSelector } from "react-redux";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function DialogWithForm() {
  const queryClient = useQueryClient();
  const { artistInfo } = useSelector((state) => state.artist);
  const id = artistInfo.email;
  const [open, setOpen] = React.useState(false);
  const [dp, setDp] = useState("");
  const handleOpen = () => setOpen((cur) => !cur);

  const category = [
    "Painters",
    "Tattooists",
    "Graphic designers",
    "Illustrators",
    "Textile artists",
    "Cinematographers",
    "Sculptors",
    "Craft artists",
    "Photographers",
  ];

  const initialValues = {
    category: "",
    experience: "",
    place: "",
    description: "",
    number: "",
    fees: "",
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
      console.log(values.image);
      const formData = new FormData();
      formData.append("category", values.category);
      formData.append("experience", values.experience);
      formData.append("place", values.place);
      formData.append("description", values.description);
      formData.append("number", values.number);
      formData.append("fees", values.fees);
      formData.append("dp", values.image); // Append the dp property

      const response = await addProfile(formData, id);
      if (response.data.created) {
        setOpen(!open);
        queryClient.invalidateQueries(["artist"]);
      } else {
        setOpen(!open);
        GenerateError(response.data.message);
      }
    },
  });

  const handleCategoryChange=(selectedCat)=>{
    console.log(selectedCat);
    setFieldValue("category",selectedCat);
  }

  const handleCityClick = (selectedCity) => {
    setFieldValue("place", selectedCity);
  };

  const handleImageClick = () => {
    document.getElementById("imageInput").click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setDp(url);
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
                        ? dp
                        : "https://i.pinimg.com/564x/b8/9f/51/b89f51fbde04ae076fc2d6350f60e891.jpg"
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

              <div className="w-72">
                <Select
                  onChange={handleCategoryChange}
                  value={values.category}
                  name="category"
                  label="Catogery"
                  onBlur={handleBlur}
                >
                  {category.map((item) => (
                    <Option value={item} key={item}>{item}</Option>
                  ))}
                </Select>
                {touched.category && errors.category && (
                <div className="text-red-500 text-xs ">{errors.category}</div>
              )}
              </div>
            
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
              <Input
                label="Fees/Day"
                name="fees"
                value={values.fees}
                onChange={handleChange}
                onBlur={handleBlur}
                size="lg"
              />
              {touched.fees && errors.fees && (
                <div className="text-red-500 text-xs ">{errors.fees}</div>
              )}
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
