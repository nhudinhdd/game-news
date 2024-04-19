import { axiosClient } from "@/api-client/axiosClient";
import { NationRes } from "@/model/player/nation";
import useSWR from "swr";

interface NationSelectProps {
  continentID?: string;
}
function useNation() {
  const fetcher = async (url: string) => {
    return await axiosClient
      .get(url)
      .then((res) => res.data.data)
      .catch((error) => {
        if (error.response.status !== 200) throw error;
      });
  };
  const { data, isLoading, error } = useSWR<[NationRes]>(
    "/nation/list",
    fetcher
  );
  return {
    data: data,
    isLoading,
    isError: error,
  };
}
export default useNation;
