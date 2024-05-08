import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom";

export const useSearchBar = () => {
    const [value, setValue] = useState<string>('');
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    useEffect(() => {
        setValue(searchParams.get('search') || '');
    }, [searchParams.get('search')]);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    return {
        onChange,
        value
    }
}