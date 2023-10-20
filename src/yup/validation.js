import * as Yup from 'yup';
const imageFormats = ["image/jpeg","image/png"];

export const LoginSchema = Yup.object({
    email : Yup.string().email().required("Please Enter Your email id"),
    password: Yup.string().min(4).required("Please enter password")
})

export const SignupSchema = Yup.object({
    name: Yup.string().min(2).max(20).required("Please Enter Your Name"),
    email: Yup.string().email().required("Please Enter Your email"),
    // mobile: Yup.string().required("Please Enter Your Mobile Number").
    // matches(/^\d{10}$/,"Mobile number must have 10 digits"),
    password: Yup.string().min(4).required("Please enter password")
})

// export const DepartmentSchema = Yup.object({
//     departmentName:Yup.string().min(2).max(30).required("Please enter department Name"),
//     description:Yup.string().min(2).max(30).required("Please enter description")
// })

export const ProfileUpdateSchema =Yup.object({
    category:Yup.string().min(3).max(30).required("please Enter your field Of Art"),
    place:Yup.string().min(4).required("enter your place"),
    experience:Yup.number().required("enter years of experience"),
    number:Yup.string().min(10).required("enter valid number"),
    description:Yup.string().min(10).max(500).required("please provide a description"),
      image: Yup.mixed()
        .test("is-image", "Only image files are allowed", (value) => {
          if (value) {
            return imageFormats.includes(value.type);
          }
          return true;
        })
        .required("Choose a Photo"),
    });



  
  