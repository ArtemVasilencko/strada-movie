import {
  Dialog,
  DialogContent,
  DialogActions,
  TextField,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";
import { Empty } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAccountId } from "../../components/fetch/GetAccountId";
import { setToken } from "../../redux/actions";

export function Login(props) {
  const { open, handleClose } = props;
  const [tokenWindowOpen, setTokenWindowOpen] = useState(false);
  const activeToken = useSelector(
    (state) => state.token?.token || localStorage.getItem("token")
  );

  function handleTokenWindow() {
    setTokenWindowOpen(!tokenWindowOpen);
  }

  return (
    <>
      {!activeToken && (
        <Empty
          style={{ padding: "100px" }}
          description={
            <span style={{ color: "#ffffff" }}>
              Требуется авторизация, чтобы воспользоваться приложением
            </span>
          }
        />
      )}
      {!tokenWindowOpen ? (
        <DialogWindow
          open={open}
          handleClose={handleClose}
          title="Запросить токен"
          textContent="Почта"
          handleTokenWindow={handleTokenWindow}
        />
      ) : (
        <DialogWindow
          open={open}
          handleClose={handleClose}
          title="Введите токен"
          textContent="Токен"
          handleTokenWindow={() => {
            handleClose();
            handleTokenWindow();
          }}
        />
      )}
    </>
  );
}

function DialogWindow({
  open,
  handleClose,
  title,
  textContent,
  handleTokenWindow,
}) {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const dispatch = useDispatch();

  const isTokenWindow = textContent === "Токен";
  const isValidToken = inputValue.length > 125;

  function handleClick() {
    const isEmail = inputValue.includes("@");

    if (isTokenWindow) {
      if (!isValidToken) {
        setError(true);
        return;
      }
      handleTokenWindow();
      setInputValue("");
      dispatch(setToken(inputValue));
      localStorage.setItem("token", inputValue);
      setError(false);
      setIsLogin(true);
    } else {
      if (!isEmail) {
        setError(true);
        return;
      }
      handleTokenWindow();
      setInputValue("");
      setError(false);
    }
  }

  return (
    <>
      {isLogin && <GetAccountId />}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent sx={{ width: "500px" }}>
          <DialogContentText>{textContent}</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={inputValue}
            error={error}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            label={error ? "Введите корректное значение" : ""}
            type="email"
            fullWidth
            variant="standard"
            helperText={isTokenWindow ? "Введите токен" : "Введите почту"}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleClose();
              setInputValue("");
              setError(false);
              textContent === "Токен" && handleTokenWindow();
            }}
          >
            Cancel
          </Button>
          <Button onClick={handleClick}>Get</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
