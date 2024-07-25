import { create } from "zustand";
import wordsetDatabase from "./database";

const useWordsetStore = create(set => ({
    isWordsetChosen: false,
    currentWordset: wordsetDatabase[0],
    changeWordset: wordset => set({ isWordsetChosen: true, currentWordset: wordset })
}));

export default useWordsetStore;