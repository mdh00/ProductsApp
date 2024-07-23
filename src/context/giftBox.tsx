'use client'
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface GiftBoxContextType {
    selectedTheme: string | null;
    setSelectedTheme: (theme: string | null) => void;
    selectedGreetingCard: string | null;
    setSelectedGreetingCard: (card: string | null) => void;
    cardMessage: string;
    setCardMessage: (message: string) => void;
    selectedProducts: string[];
    setSelectedProducts: (products: string[]) => void;
}

const GiftBoxContext = createContext<GiftBoxContextType>({
    selectedTheme: null,
    setSelectedTheme: () => { },
    selectedGreetingCard: null,
    setSelectedGreetingCard: () => { },
    cardMessage: "",
    setCardMessage: () => { },
    selectedProducts: [],
    setSelectedProducts: () => { }
});

export const useGiftBoxContext = () => useContext(GiftBoxContext);

interface GiftBoxProviderProps {
    children: ReactNode;
}

export const GiftBoxProvider: React.FC<GiftBoxProviderProps> = ({ children }) => {
    const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
    const [selectedGreetingCard, setSelectedGreetingCard] = useState<string | null>(null);
    const [cardMessage, setCardMessage] = useState<string>("");
    const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

    return (
        <GiftBoxContext.Provider
            value={{
                selectedTheme,
                setSelectedTheme,
                selectedGreetingCard,
                setSelectedGreetingCard,
                cardMessage,
                setCardMessage,
                selectedProducts,
                setSelectedProducts
            }}
        >
            {children}
        </GiftBoxContext.Provider>
    );
};
