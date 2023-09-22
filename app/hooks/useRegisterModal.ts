// ES EL PRIMER HOOKS PERSONALIZADO QUE CREAMOS Y LUEGO INSTALAMOS ZUSTAND
import { create } from 'zustand';


//TANTO EL USELOGINMODAL COMO EL USEREGISTERMODAL SIRVEN PARA PODER MANEJAR LA FUNCIONALIDAD DE LOS MODALES, DE REGISTRO Y LOGEO

interface RegisterModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useRegisterModal = create<RegisterModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));


export default useRegisterModal;