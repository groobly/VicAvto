// FIX: Import React to make the React namespace available for types.
import React, { useState, useEffect } from 'react';

function getValue<T,>(key: string, initialValue: T | (() => T)): T {
    const savedValue = localStorage.getItem(key);
    if (savedValue !== null) {
        try {
            return JSON.parse(savedValue);
        } catch {
            return initialValue instanceof Function ? initialValue() : initialValue;
        }
    }
    return initialValue instanceof Function ? initialValue() : initialValue;
}

export function useLocalStorage<T,>(key: string, initialValue: T | (() => T)): [T, React.Dispatch<React.SetStateAction<T>>] {
    const [value, setValue] = useState<T>(() => {
        return getValue(key, initialValue);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}