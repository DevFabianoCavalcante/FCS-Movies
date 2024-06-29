export const alertForm = (inputArea: HTMLElement) => {
    inputArea.classList.toggle('alert');
    setTimeout(()=> {
        inputArea.classList.toggle('alert');
    }, 2000);
};
