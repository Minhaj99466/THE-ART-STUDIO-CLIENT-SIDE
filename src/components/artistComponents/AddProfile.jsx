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
} from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
import { ToastContainer } from "react-toastify";
import { useFormik } from "formik";
import { GenerateError, GenerateSuccess } from "../../toast/toast";

export default function DialogWithForm() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const initialValues = {
    name: "",
    email: "",
    password: "",
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
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      const response = await ArtistSignup(values);
      console.log(response);
      if (response.data.created) {
        GenerateSuccess(response.data.message);
      } else {
        GenerateError(response.data.message);
      }
    },
  });

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
              <div className="flex justify-center">
                <img
                  className="w-28 h-28 rounded-full"
                  src="https://i.pinimg.com/564x/16/8a/20/168a209a4a487fd73e83c419f3ae3682.jpg"
                  alt="nghhjgjh"
                />
              </div>
              {/* <Input type="file" /> */}
              <Input
                label="Category"
                name="category"
                value="cATEGORY"
                onChange={handleChange}
                onBlur={handleBlur}
                size="lg"
              />
              {touched.category && errors.category && (
                <div className="text-red-500 text-xs ">{errors.category}</div>
              )}
              <Input
                label="Place"
                size="lg"
                name="place"
                value="place"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.place && errors.place && (
                <div className="text-red-500 text-xs ">{errors.place}</div>
              )}
              <Input
                label="Experience"
                name="experience"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                size="lg"
              />

              <div>
                <Textarea label="Description" />
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
