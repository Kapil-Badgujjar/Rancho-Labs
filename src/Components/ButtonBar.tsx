import { useSetRecoilState } from "recoil";
import { CheckAtom, DragAtom, LoadAtom, PathAtom, SourceAtom } from "../atom/atom";
import { models } from "../model/models";
import { FaCheck } from "react-icons/fa6";
import { GrPowerReset } from "react-icons/gr";

export default function ButtonBar() {
  const setCheckAtom = useSetRecoilState(CheckAtom);
  const setPathAtom = useSetRecoilState(PathAtom);
  const setLoadAtom = useSetRecoilState(LoadAtom);
  const setSourceAtom = useSetRecoilState(SourceAtom);
  const setDragAtom = useSetRecoilState(DragAtom);

  function reset() {
    setSourceAtom([]);
    setLoadAtom([]);
    setPathAtom([]);
    setDragAtom(models);
  }

  function check() {
    setCheckAtom(true);
    setTimeout(() => {
      setCheckAtom(false);
    }, 1000);
  }

  return (
    <div className="flex text-center justify-center items-center">
      <button
        onClick={check}
        className="w-20 h-10 m-6 p-2 flex item-center text-center gap-1 rounded-lg bg-green-500 "
      >
        <FaCheck className="pt-1 text-lg" /><span>Check </span>
      </button>

      <button
        onClick={reset}
        className="w-20 h-10 m-6 p-2 flex item-center text-center gap-1 rounded-lg bg-yellow-400 "
      >
        <GrPowerReset className="pt-1 text-lg"/>   <span>Reset</span>
      </button>
    </div>
  );
}
