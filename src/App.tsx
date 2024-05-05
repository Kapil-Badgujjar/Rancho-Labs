import { useRecoilState } from "recoil";
import MainPage from "./pages/MainPage";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { DragAtom, SourceAtom, LoadAtom, PathAtom } from "./atom/atom";
function App() {
  const [dragAtom, setDragAtom] = useRecoilState(DragAtom);
  const [sourceAtom, setSourceAtom] = useRecoilState(SourceAtom);
  const [loadAtom, setLoadAtom] = useRecoilState(LoadAtom);
  const [pathAtom, setPathAtom] = useRecoilState(PathAtom);

  function onDragEnd(result: DropResult) {
    const { source, destination } = result;
    console.log(result);
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) return;

    let addsource, addpath, addload;
    let active = [...dragAtom];
    let sourcecomplete = [...sourceAtom];
    let pathcomplete = [...pathAtom];
    let loadcomplete = [...loadAtom];

    if (
      source.droppableId === "DragElement" &&
      destination.droppableId === "Source"
    ) {
      if (sourceAtom.length > 2) return;
      addsource = active[source.index];
      active.splice(source.index, 1);
      sourcecomplete.push(addsource);
      setDragAtom(active);
      setSourceAtom(sourcecomplete);
    }
    if (
      source.droppableId === "DragElement" &&
      destination.droppableId === "Path"
    ) {
      if (pathAtom.length > 2) return;
      addpath = active[source.index];
      active.splice(source.index, 1);
      pathcomplete.push(addpath);
      setDragAtom(active);
      setPathAtom(pathcomplete);
    }
    if (
      source.droppableId === "DragElement" &&
      destination.droppableId === "Load"
    ) {
      if (loadAtom.length > 2) return;
      addload = active[source.index];
      active.splice(source.index, 1);
      loadcomplete.push(addload);
      setDragAtom(active);
      setLoadAtom(loadcomplete);
    }
  }
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <MainPage />
      </DragDropContext>
    </>
  );
}

export default App;
