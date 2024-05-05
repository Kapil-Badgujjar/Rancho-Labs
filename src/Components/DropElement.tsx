import { useRecoilValue } from "recoil";
import { SourceAtom, LoadAtom, PathAtom } from "../atom/atom";
import DropRow from "./DropRow";
export default function DropElement() {
  const sourceData = useRecoilValue(SourceAtom);
  const loadData = useRecoilValue(LoadAtom);
  const pathData = useRecoilValue(PathAtom);
  return (
    <div className="xl:w-5/12 sm:w-1/2 w-3/4 py- mt-16 grid grid-col-3 gap-2">
      <DropRow title="Source" atom={sourceData} value={[1, 3, 7]}></DropRow>
      <DropRow title="Load" atom={loadData} value={[2, 5, 6]}></DropRow>
      <DropRow title="Path" atom={pathData} value={[4, 8, 9]}></DropRow>
    </div>
  );
}
