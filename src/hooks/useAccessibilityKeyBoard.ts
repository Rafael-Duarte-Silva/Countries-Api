export const useAccessibilityKeyBoard = () => {
    const accessibilityKeyDown = (event: React.KeyboardEvent) => {
        if(event.key === 'Enter'){
            (event.target as HTMLElement).click();
        }
    }

    return { accessibilityKeyDown };
}