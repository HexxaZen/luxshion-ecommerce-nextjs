"use client";

import { useState, useEffect } from 'react';

export const useTheme = () => {
    const [isDark, setIsDark] = useState<boolean>(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
        setIsDark(initialTheme);
        document.documentElement.classList.toggle('dark', initialTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        document.documentElement.classList.toggle('dark', newTheme);
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    };

    return { isDark, toggleTheme };
};