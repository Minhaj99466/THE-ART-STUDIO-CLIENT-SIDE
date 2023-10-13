// import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useState } from "react";

const CustomDialog = ({ buttonText, headerText, bodyText, onCancel, onConfirm }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const handleCancel = () => {
    handleOpen();
    onCancel && onCancel();
  };

  const handleConfirm = () => {
    handleOpen();
    onConfirm && onConfirm();
  };

  return (
    <>
      <Button onClick={handleOpen} variant="gradient">
        {buttonText || "Open Dialog"}
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader className="font-medium">{headerText || "Default Header"}</DialogHeader>
        <DialogBody divider>{bodyText || "Default Body"}</DialogBody>
        <DialogFooter>
          <Button variant="text" color="red" onClick={handleCancel} className="mr-1">
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleConfirm}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default CustomDialog;
