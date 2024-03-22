import PlayerLayout from "@/layouts/PlayerLayout";
import useSeason from "@/lib/useSeason";

export default function TopTier() {
  const { data = [] } = useSeason();
  console.log("seasons", data);
  return (
    <PlayerLayout>
      {" "}
      <div></div>
    </PlayerLayout>
  );
}
