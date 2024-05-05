import { Droppable } from "react-beautiful-dnd";
import { ImageModel } from "../model/models";
import Card from "./Card";
export default function DropRow({atom, value, title,}: {atom: ImageModel[]; value: number[]; title: string;})
 {
  return (
    <>
      <div className="p-3 my-2 min-h-44 rounded-x flex items-center gap-3 shadow-slate-400 shadow-md border-2 border-slate-200">
        <div className="xl:w-1/5 lg:text-md text-center bg-blue-600 text-white xl:px-4 xl:py-2 md:text-md sm:text-sm text-xs px-2 py-1 rounded-lg">
          {title}
        </div>

        <Droppable droppableId={title}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="w-full grid sm:grid-cols-3 grid-cols-2 gap-4"
            >
              {atom.map((card: any, index: number) => (
                <Card
                  key={index}
                  index={index}
                  Id={card.id}
                  name={card.name}
                  imageUrl={card.imageUrl}
                  value={value}
                  dragZone
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </>
  );
}
