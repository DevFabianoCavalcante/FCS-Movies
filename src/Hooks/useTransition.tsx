import React from 'react';

function useTransition (refElement:React.MutableRefObject<HTMLHeadingElement | HTMLButtonElement | null>[], classTransition: string) {

    React.useEffect(() => {
        const handleScroll = () => {
            refElement.map((item)=>{
                const elementHtml = item.current;
                if (elementHtml) {
                    const rect = elementHtml.getBoundingClientRect();
                    if (rect.top < window.innerHeight && rect.bottom >= 0) {
                        elementHtml.classList.add(classTransition);
                    }
                }
            })
            
        };
    
        window.addEventListener('scroll', handleScroll);
        handleScroll();
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
}

export default useTransition;
