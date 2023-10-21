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
 
export default function DialogWithForm() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);


  const img=[  "https://i.pinimg.com/236x/5a/78/d6/5a78d6faf742d41de4699dc7f7cac972.jpg",
  "https://i.pinimg.com/236x/5a/78/d6/5a78d6faf742d41de4699dc7f7cac972.jpg",
  "https://i.pinimg.com/236x/5a/78/d6/5a78d6faf742d41de4699dc7f7cac972.jpg",
  "https://i.pinimg.com/236x/5a/78/d6/5a78d6faf742d41de4699dc7f7cac972.jpg"
]

  
 
 
  return (
    <>
      <Button onClick={handleOpen}>Sign In</Button>
      <Dialog
        size="xl"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
            Add Post
            </Typography>
            <div className="grid grid-cols-3 gap-4"> 

            {img?(
                img.map((n,index)=>(
                <img key={index} className="w-20 h-20" src={n} alt="" />
            ))):(null)}
            </div>
            <Input label="images" type="file"  name="image" size="lg" />
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleOpen} fullWidth>
              Sign In
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}