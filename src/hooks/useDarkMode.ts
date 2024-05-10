import { useEffect, useState } from "react";

export const useDarkMode = () => {
    const $html = document.querySelector('html');
    const preference = window.matchMedia("(prefers-color-scheme: dark)");

    const [theme, setTheme] = useState<'dark' | 'light'>(() => {
        const theme = localStorage.getItem('theme');

        if (theme === 'dark') {
            $html?.classList.remove('light');
            $html?.classList.add('dark');

            return theme;
        }

        else if (preference.matches && !theme) {
            localStorage.setItem('theme', 'dark');

            return 'dark';
        }

        return 'light';
    }
    );
    const [isDark, setIsdark] = useState<boolean>(() => {
        if(theme === 'dark'){
            return true;
        }

        return false;
    });

    preference.onchange = () => {
        if(preference.matches){
            setTheme('dark');
        }

        else{
            setTheme('light');
        }
    }

    const changeDarkMode = () => {
        setIsdark(!isDark);

        if (theme === 'dark') {
            $html?.classList.remove('light');
            $html?.classList.add('dark');

            localStorage.setItem('theme', 'dark');
        }

        else {
            $html?.classList.remove('dark');
            $html?.classList.add('light');

            localStorage.setItem('theme', 'light');
        }
    };

    useEffect(changeDarkMode, [theme]);

    const handleChangeDarkMode = () => {
        if(theme === 'dark'){
            setTheme('light');
        }

        else{
            setTheme('dark');
        }
    };

    return { handleChangeDarkMode, isDark };
}