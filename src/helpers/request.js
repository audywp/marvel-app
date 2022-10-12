import { useCallback, useState } from "react";
import request from "./api";

export const useGetData = (endpoint, detail, target) => {
  const apiKey = process.env.REACT_APP_MARVEL_API_PUBLIC;
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [loadingLoadMore, setLoadingLoadMore] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [dataOpsi, setDataOpsi] = useState({});
  const [dataChar, setdataChar] = useState({});
  const [isFailed, setIsFaied] = useState(false);

  const getData = async (limit = 20) => {
    try {
      setLoading(true);
      const req = await request(`${endpoint}?apikey=${apiKey}&limit=${limit}`);

      if (req.code === 200) {
        setData(req);
        if (detail) {
          const opsi = await request(
            `${endpoint}/${target}?apikey=${apiKey}&limit=${limit}`
          );

          const story = await request(
            `${endpoint}/characters?apikey=${apiKey}&limit=${limit}`
          );

          if (opsi.code === 200) {
            setDataOpsi(opsi);
          }
          if (story.code === 200) {
            setdataChar(story);
          }
        }
      } else {
        setIsFaied(true);
      }
    } catch (error) {
      setIsFaied(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    try {
      if (data.data.limit + 5 >= data.data.total) {
        setIsEnded(true);
      }
      setLoadingLoadMore(true);
      const req = await request(
        `${endpoint}?apikey=${apiKey}&limit=${data.data.limit + 5}`
      );

      if (req.code === 200) {
        setData(req);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingLoadMore(false);
    }
  };

  return {
    data,
    dataOpsi,
    dataChar,
    loading,
    getData,
    loadMore,
    loadingLoadMore,
    isEnded,
    isFailed,
  };
};
