import * as Yup from "yup";
const imageFormats = ["image/jpeg","image/jpg", "image/png"];

export const LoginSchema = Yup.object({
  email: Yup.string().email().required("Please Enter Your email id"),
  password: Yup.string().min(4).required("Please enter password"),
});

export const SignupSchema = Yup.object({
  name: Yup.string().min(2).max(20).required("Please Enter Your Name"),
  email: Yup.string().email().required("Please Enter Your email"),
  // mobile: Yup.string().required("Please Enter Your Mobile Number").
  // matches(/^\d{10}$/,"Mobile number must have 10 digits"),
  password: Yup.string().min(4).required("Please enter password"),
});

// export const DepartmentSchema = Yup.object({
//     departmentName:Yup.string().min(2).max(30).required("Please enter department Name"),
//     description:Yup.string().min(2).max(30).required("Please enter description")
// })

export const ProfileUpdateSchema = Yup.object({
  category: Yup.string()
    .min(3)
    .max(30)
    .required("please Enter your field Of Art"),
  place: Yup.string().min(4).required("enter your place"),
  experience: Yup.number().required("enter years of experience"),
  fees: Yup.number().min(750,"minimum fees is 750").max(10000,"enter a amount less than 10000").required("enter your Fees/Day"),
  number: Yup.string().min(10).required("enter valid number"),
  description: Yup.string()
    .min(10)
    .max(500)
    .required("please provide a description"),
  image: Yup.mixed()
    .test("is-image", "Only image files are allowed", (value) => {
      if (value) {
        return imageFormats.includes(value.type);
      }
      return true;
    })
    .required("Choose a Photo"),
});

export const artistEditProfileSchema = Yup.object({
  name: Yup.string().min(3).required("please Enter Your name"),
  category: Yup.string()
    .max(30)
    .required("Please enter your field Of Art"),
  experience: Yup.string().required("enter years of experience"),
  number: Yup.string().min(10).required("enter your mobile number"),
  description: Yup.string()
    .min(10)
    .max(100)
    .required("please provide a description"),
    image: Yup.mixed()
    .test("is-image", "Only image files are allowed", (value) => {
      console.log(value);
      if (value) {
        return imageFormats.includes(value.type);
      }
      return true;
    })
});



export const multipleImageSchema = Yup.object({
  images: Yup.mixed()
    .test("is-image", "Only image files are allowed", (value) => {
      if (value) {
        for (let i = 0; i < value.length; i++) {
          if (!imageFormats.includes(value[i].type)) {
            return false;
          }
        }
      }
      return true;
    })
    .test("max-images", "Maximum of 3 images allowed", (value) => {
      return !value || value.length <= 3;
    })
    .required("Upload certificates"),
});