import { useState } from "react";

import { Header } from "../../components/header/Header";
import { Login } from "../../pages/LoginPage/Login";

export function HeaderContainer(props) {
  const { headerTitle } = props;
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <Header headerTitle={headerTitle} handleOpen={handleOpen} />
      <Login open={open} handleClose={handleClose} />
    </>
  );
}
