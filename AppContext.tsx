import {createContext, Dispatch, SetStateAction, useContext} from 'react';
import {images} from './utils/ProductData';

interface contextType {
    number: number,
    setNumber: Dispatch<SetStateAction<number>>,
    ClickAdd: () => void,
    ClickMinus: () => void,
    menuOpen: boolean,
    setMenuOpen: Dispatch<SetStateAction<boolean>>,
    cartOpen: boolean,
    setCartOpen: Dispatch<SetStateAction<boolean>>,
    imgCount:number,
    setImgCount:Dispatch<SetStateAction<number>>,
    image:string,
    setImage:Dispatch<SetStateAction<string>>,
    popUp: boolean,
    setPopUp: Dispatch<SetStateAction<boolean>>,
    ImagePopUp: () => void,
    addItem: boolean,
    setAddItem: Dispatch<SetStateAction<boolean>>,
    toggleCart: () => void,
}

const contextDefaultValues: contextType = {
    number: 0,
    setNumber: () => {},
    ClickAdd: () => {},
    ClickMinus: () => {},
    menuOpen: false,
    setMenuOpen: () => {},
    cartOpen: false,
    setCartOpen: () => {},
    imgCount:0,
    setImgCount:() => {},
    image:images[0].fullsize,
    setImage:() => {},
    popUp: false,
    setPopUp: ()=> {},
    ImagePopUp: () => {},
    addItem: false,
    setAddItem: () => {},
    toggleCart: () => {},
}

export const AppContext = createContext<contextType>(contextDefaultValues);

export function ContextProvider() {
    return useContext(AppContext);
}