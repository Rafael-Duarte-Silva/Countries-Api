import { useEffect, useState } from "react";

export const useDarkMode = () => {
    const $html = document.querySelector('html');
    const preference = window.matchMedia("(prefers-color-scheme: dark)");

    const [isDark, setIsDark] = useState<boolean>(() => {
            if(preference.matches){
                localStorage.setItem('isDark', 'true');
            }

            const isDark = Boolean(localStorage.getItem('isDark'));

            if(isDark){
                $html?.classList.add('dark');
            }

            return isDark;
        }
    );

    preference.onchange = () => {
        if(preference.matches){
            $html?.classList.add('dark');

            localStorage.setItem('isDark', 'true');
        }

        else{
            $html?.classList.remove('dark');

            localStorage.setItem('isDark', '');
        }
    }

    const changeDarkMode = () => {
        $html?.classList.toggle('dark');

        if(isDark){
            localStorage.setItem('isDark', 'true');
        }

        else{
            localStorage.setItem('isDark', '');
        }
    };

    useEffect(changeDarkMode, [isDark]);

    const handleChangeDarkMode = () => {
        setIsDark(!isDark);
    };

    return { handleChangeDarkMode, isDark };
}