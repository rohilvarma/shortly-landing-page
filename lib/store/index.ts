import { create } from "zustand";
import { IResponse, IShortLinkStore, IShortenStore } from "../interfaces";

export const shortenStore = create<IShortenStore>((set) => ({
  linkName: "",
  changeLinkName: (inputValue) => {
    set((state) => ({
      linkName: inputValue,
      emptyInput: inputValue === "" || inputValue === null,
    }));
  },
  emptyInput: true,
}));

export const shortLinkStore = create<IShortLinkStore>((set) => ({
  shortLink: null,
  updateShortLink: (responses: IResponse) => {
    set((state) => ({
      shortLink: responses,
    }));
  },
}));
