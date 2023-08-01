import { axiosClient } from "@/api-client/axiosClient";
import { ContinentRes } from "@/model/player/continent";
import useSWR from "swr";

function useContinent() {
  const fetcher = async (url: string) => {
    return await axiosClient
      .get(url)
      .then((res) => res.data.data)
      .catch((error) => {
        if (error.response.status !== 200) throw error;
      });
  };
  const { data, isLoading, error } = useSWR<[ContinentRes]>(
    `/continent`,
    fetcher
  );
  return {
    dataContinent: data,
    isLoading,
    isError: error,
  };
}
export default useContinent;
