import axios from "axios";
import { useCallback } from "react";

export const useFinder = () => {
  const find = useCallback(async ({ type, query, max_res, volume_id }) => {
    let res;
    try {
      switch (type) {
        case "SRC_BOOKS":
          return (res = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${max_res}`
          ));
        case "SRC_BOOK_ID":
          return (res = await axios.get(
            `https://www.googleapis.com/books/v1/volumes/${volume_id}`
          ));
        default:
          return res;
      }
    } catch (err) {
      return (res = err.response);
    }
  }, []);

  return { find };
};
