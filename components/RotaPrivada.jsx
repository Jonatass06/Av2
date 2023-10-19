import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function PrivateRoute({ children, id }) {
    const router = useRouter();
    let autenticado = false;

    useEffect(() => {
        for (let cookie of document.cookie.split(';')) {
            const [name, value] = cookie.trim().split('=');
            if (name === 'logado') {
                autenticado = value == id;
            }
        }
        if(!autenticado){
            router.push('/login');
        }
    },[autenticado]);

    return children;
};