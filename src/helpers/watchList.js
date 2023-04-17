import { toast } from "react-toastify";

export const addToWatchList = (id) => {
  let items = localStorage.getItem("watchlist");
  if (items) {
    let arr = JSON.parse(items);
    if (!arr.includes(id)) {
      arr.push(id);
      localStorage.setItem("watchlist", JSON.stringify(arr));
    }
  } else {
    let arr = JSON.stringify([id]);
    localStorage.setItem("watchlist", arr);
  }

  toast.success(
    `${id.slice(0, 1).toUpperCase() + id.slice(1)} - Added To The Watchlist!`
  );
};

export const hasBeenAdded = (id) => {
  const watchlist = localStorage.getItem("watchlist");
  if (watchlist) {
    let arr = JSON.stringify(watchlist);
    if (arr.includes(id)) return true;
    else return false;
  }
  return false;
};

export const removeFromWatchlist = (id) => {
  if (window.confirm("Are you sure want remove this coin")) {
    let items = localStorage.getItem("watchlist");
    let arr = JSON.parse(items);
    localStorage.setItem(
      "watchlist",
      JSON.stringify(arr.filter((item) => item != id))
    );
    toast.success(
      `${
        id.slice(0, 1).toUpperCase() + id.slice(1)
      } removed from the watchlist!`
    );
  } else {
    toast.error(`couldn't remove the coin from the watchlist!`);
  }
};
