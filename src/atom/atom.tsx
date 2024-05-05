import { atom } from "recoil";
import { models, ImageModel } from "../model/models";

export const DragAtom = atom<ImageModel[]>({
  key: "DragAtom",
  default: models,
});

export const SourceAtom = atom<ImageModel[]>({
  key: "SourceAtom",
  default: [],
});

export const LoadAtom = atom<ImageModel[]>({
  key: "LoadAtom",
  default: [],
});
export const PathAtom = atom<ImageModel[]>({
  key: "PathAtom",
  default: [],
});

export const CheckAtom = atom({
  key: "CheckAtom",
  default: false,
});
