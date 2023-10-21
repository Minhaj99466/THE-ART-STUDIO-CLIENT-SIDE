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
import { useState,useEffect } from "react";
import { Textarea } from "@material-tailwind/react";
import { ToastContainer } from "react-toastify";
import { useFormik } from "formik";
import { GenerateError, GenerateSuccess } from "../../toast/toast";
import { artistEditProfileSchema } from "../../yup/validation";
import { editArtistProfile } from "../../api/artistApi";
import { Badge, IconButton, Avatar } from "@material-tailwind/react";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import { useSelector } from "react-redux";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { PencilSquareIcon } from "@heroicons/react/20/solid";

export default function EditDialog({ artist }) {

  const queryClient = useQueryClient();
  const { artistInfo } = useSelector((state) => state.artist);
  const id = artistInfo.email;
  const [open, setOpen] = React.useState(false);
  const [dp, setDp] = useState("");
  const handleOpen = () => setOpen((cur) => !cur);

  const initialValues = {
    name: artist ? artist.name : "",
    category: artist ? artist.category : "",
    experience: artist ? artist.experience : "",
    number: artist ? artist.mobile : "",
    description: artist ? artist.description : "",
    image: artist ? artist.displaypicture : "",
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
    validationSchema: artistEditProfileSchema,
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("category", values.category);
      formData.append("name", values.name);
      formData.append("experience", values.experience);
      formData.append("description", values.description);
      formData.append("number", values.number);   

      formData.append("dp", values.image); 

      const response = await editArtistProfile(formData, id);
      if (response.data.created) {
        setOpen(!open);
        queryClient.invalidateQueries(["artist"]);
      } else {
        setOpen(!open);
        GenerateError(response.data.message);
      }
    },
  });

 

  const handleImageClick = () => {
    document.getElementById("imageInput").click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setDp(url);
    setFieldValue("image", file);
  };

  useEffect(()=>{
    setDp(artist.displaypicture)
  },[])

  return (
    <>
      <PencilSquareIcon
        className="w-10 h-10 absolute top-0 right-0"
        onClick={handleOpen}
      />

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
                label="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                size="lg"
              />
              {touched.name && errors.name && (
                <div className="text-red-500 text-xs ">{errors.name}</div>
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
                value={values.experience}
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
