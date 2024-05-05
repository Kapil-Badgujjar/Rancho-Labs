import ButtonBar from "../Components/ButtonBar";
import DragElement from "../Components/DragElement";
import DropElement from "../Components/DropElement";

export default function MainPage() {
  return (
    <>
      <div className="flex sm:flex-row flex-col mb-10 sm:justify-evenly items-center">
        <DropElement />
        <DragElement />
      </div>
      <ButtonBar />
    </>
  );
}
