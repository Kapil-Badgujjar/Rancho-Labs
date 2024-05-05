import { Draggable } from "react-beautiful-dnd";
import { useRecoilValue } from "recoil";
import { CheckAtom } from "../atom/atom";

export default function CardItem({
  name,
  imageUrl,
  index,
  Id,
  value,
  dragZone,
}: {
  name: string;
  imageUrl: string;
  index: number;
  Id: string;
  dragZone?: any;
  value?: number[];
}) {
  const checkAtom = useRecoilValue(CheckAtom);

  return (
    <Draggable draggableId={Id} index={index} key={Id}>
      {(provided) => (
        <div
          className={`py-2 flex flex-col justify-between items-center h-40 border-2  shadow-xl rounded-lg ${dragZone? `${checkAtom? value?.includes(parseInt(Id))? `border-green-500`: `border-red-500`: `border-gray-200`}`: "border-gray-200"}`}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <div className="w-fit m-auto">
            <img src={imageUrl} alt={name} className="w-7/12 m-auto" />
          </div>
          <h1 className="text-blue-700 lg:text-sm text-xs text-center">
            {name}
          </h1>
        </div>
      )}
    </Draggable>
  );
}
