import { axiosClient } from "@/api-client/axiosClient";
import { TeamRes } from "@/model/player/team";
import useSWR from "swr";

interface TeamProps {
  tourID?: string;
}
function useTeam(props: TeamProps) {
  const { tourID } = props;
  const fetcher = async (url: string) => {
    return await axiosClient
      .get(url)
      .then((res) => res.data.data)
      .catch((error) => {
        if (error.response.status !== 200) throw error;
      });
  };
  const { data, isLoading, error } = useSWR<[TeamRes]>(
    tourID ? `/team?tour-id=${tourID}` : "/team",
    fetcher
  );
  return {
    dataTeam: data,
    isLoadingTeam: isLoading,
    isError: error,
  };
}
export default useTeam;
