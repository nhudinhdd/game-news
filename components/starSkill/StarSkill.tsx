import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type StarSkill = {
  numberSkill: number;
};

export default function StarSkill(props: StarSkill) {
  const { numberSkill } = props;
  const arrayLevel = Array.from({ length: 6 }, (_, i) => i + 1);
  const getColorStar = (number: number) => {
    if (number <= numberSkill) {
      return "#fc0";
    }
    return "#bbbbbb";
  };
  return (
    <div className="flex flex-row">
      {arrayLevel.map((index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStar}
          style={{ color: getColorStar(index) }}
          width={12}
        />
      ))}
    </div>
  );
}
