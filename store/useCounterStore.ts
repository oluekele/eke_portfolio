// store/useContactStore.ts
import { create } from 'zustand';

interface ContactState {
  contact: boolean;
  setContact: (value: boolean) => void;
   activeTab: 'blog' | 'projects';
  setActiveTab: (tab: 'blog' | 'projects') => void;
}

const useContactStore = create<ContactState>((set) => ({
  contact: false,
  setContact: (value: boolean) => set({ contact: value }),
  activeTab: 'blog',
  setActiveTab: (tab) => set({ activeTab: tab }),
}));

export default useContactStore;
