import { axiosClient } from "@/api-client/axiosClient";
import { NationRes } from "@/model/player/nation";
import useSWR from "swr";

interface NationSelectProps {
  continentID?: string;
}
function useNation(props: NationSelectProps) {
  const { continentID } = props;
  const fetcher = async (url: string) => {
    return await axiosClient
      .get(url)
      .then((res) => res.data.data)
      .catch((error) => {
        if (error.response.status !== 200) throw error;
      });
  };
  const { data, isLoading, error } = useSWR<[NationRes]>(
    continentID ? `/nation/list?continent-id=${continentID}` : "/nation/list",
    fetcher
  );
  return {
    dataNation: data,
    isLoading,
    isError: error,
  };
}
export default useNation;
