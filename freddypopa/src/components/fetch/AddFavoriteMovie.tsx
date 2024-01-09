import { fetchData } from "./fetch";

interface HandleStarClickParams {
  preventDefault: () => void;
  stopPropagation: () => void;
}

export async function handleStarClick(
  e: HandleStarClickParams,
  setFavorite: React.Dispatch<React.SetStateAction<boolean>>,
  favorite: boolean,
  token: string | null,
  id: number
): Promise<void> {
  e.preventDefault();
  e.stopPropagation();

  if (!navigator.onLine) {
    alert("Отсутствует подключение к интернету");
    return;
  }

  const accountId = localStorage.getItem("accountId");

  if (!accountId) {
    console.error("Account ID not found in localStorage");
    return;
  }

  const url = `https://api.themoviedb.org/3/account/${accountId}/favorite`;

  setFavorite(!favorite);

  try {
    await fetchData(url, token, "POST", {
      media_type: "movie",
      media_id: id,
      favorite: !favorite,
    });
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
