import { create } from "zustand";

interface PanelStore {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
}

const usePanelStore = create<PanelStore>((set) => ({
  isOpen: false,
  setOpen: (value: boolean) => set({ isOpen: value }),
}));

export default usePanelStore;
