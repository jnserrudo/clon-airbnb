import { create } from 'zustand';

//TANTO EL USELOGINMODAL COMO EL USEREGISTERMODAL SIRVEN PARA PODER MANEJAR LA FUNCIONALIDAD DE LOS MODALES, DE REGISTRO Y LOGEO

interface LoginModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useLoginModal = create<LoginModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));


export default useLoginModal;