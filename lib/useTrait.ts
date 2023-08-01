import { axiosClient } from "@/api-client/axiosClient";
import { TraitResponse } from "@/model/player/trait";
import useSWR from "swr";

function useTrait() {
  const fetcher = async (url: string, contientName: string) => {
    return await axiosClient
      .get(url)
      .then((res) => res.data.data)
      .catch((error) => {
        if (error.response.status !== 200) throw error;
      });
  };

  const { data, isLoading, error } = useSWR<[TraitResponse]>(`/trait`, fetcher);
  return {
    dataTrait: data,
    isLoading,
    isError: error,
  };
}
export default useTrait;
