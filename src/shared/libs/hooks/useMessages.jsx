import { useEffect } from 'react';

function useMessageListener(onMessage) {
    useEffect(() => {
        const handleMessage = (event) => {
            onMessage(event);
        };

        window.addEventListener('message', handleMessage);

        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, [onMessage]);
}

export default useMessageListener;
