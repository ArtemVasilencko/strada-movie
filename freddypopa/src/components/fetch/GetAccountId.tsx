import { fetchData } from "./fetch";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export function GetAccountId() {
  const token = useSelector(
    (state: RootState) => state.user?.token || localStorage.getItem("token")
  );

  useEffect(() => {
    const url = "https://api.themoviedb.org/3/account/account_id";

    async function getId() {
      try {
        if (token) {
          const data = await fetchData(url, token, "GET");
          localStorage.setItem("accountId", data.id.toString());
        }
      } catch (error) {
        console.error("Ошибка при загрузке фильмов:", error);
      }
    }

    getId();
  }, [token]);
}
