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
  Checkbox,
  select,
  Spinner
} from "@material-tailwind/react";
import { multipleImageSchema } from "../../yup/validation";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { postImages } from "../../api/artistApi";


export default function DialogWithForm() {
  const queryClient = useQueryClient();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {setOpen((cur) => !cur),setImg(null)};
  const { artistInfo } = useSelector((state) => state.artist);
  const id = artistInfo.email;
  const [img, setImg] = useState();
  const [spin,setSpin]=useState(false)

  const initialValues = {
    images: [],
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    handleChange,
    setFieldValue,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: multipleImageSchema,
    onSubmit: async (values) => {
        setSpin(true)
      const formData = new FormData();
      for (let i = 0; i < values.images.length; i++) {
        formData.append("images", values.images[i]);
      }
      const response = await postImages(formData, id);
    
      if (response) {
        setOpen(!open);
        setSpin(false)
        queryClient.invalidateQueries(["artist"]);
      }
    },
  });

  const handleImageChange = (e) => {
    const file = e.target.files;
    const selectedFilesArray = Array.from(file);
    const imagesArray = selectedFilesArray.map((data) => {
      return URL.createObjectURL(data);
    });
    setImg(imagesArray);
    setFieldValue("images", file);
  };

  return (
    <>
      <Button className="bg-[#429348]" onClick={handleOpen}>Add posts</Button>
      <Dialog
        size="xl"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <form action="" onSubmit={handleSubmit}>
            <CardBody className="flex flex-col gap-4">
              <Typography variant="h4" color="blue-gray">
                Add Post
              </Typography>
              <div className="grid grid-cols-3 gap-4">
                {img
                  ? img.map((n, index) => (
                      <img key={index} className="w-20 h-20" src={n} alt="" />
                    ))
                  : null}
              </div>
              <Input
                size="lg"
                type="file"
                variant="standard"
                name="images"
                label="images"
                multiple
                onChange={handleImageChange}
              />
              {touched.images && errors.images && (
                <div className="text-red-500 text-sm ">{errors.images}</div>
              )}
              <Typography className="text-xs">
                # Upload All of your Images About the works
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">


              <Button variant="gradient" type="submit" fullWidth>
                {spin?(<Spinner className="flex justify-center"/>):("Upload")}
                
              </Button>
            </CardFooter>
          </form>
        </Card>
      </Dialog>
    </>
  );
}
