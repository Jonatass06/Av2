
import { useRouter } from "next/dist/client/router";
export default () => {

    const router = useRouter();
    function logar(){
        let usuario = "192837"
        document.cookie = "logado=" + usuario + ";max-age=max-age-in-seconds:"+60*60*24*3;
        router.push('/usuario/'+usuario);
    }

    return (
        <div className="w-[700px] h-[650px] bg-white shadow-10b ronded-[5px] flex flex-col justify-center items-center  gap-12">
            <h2 className="text-verde font-alata text-[48px]">Entrar</h2>
            <div className="flex flex-col justify-center items-center gap-6">
                <input type="text" placeholder="Nome" />
                <input type="text" placeholder="Senha" />
            </div>
                <button className="bg-verde w-[370px] h-[80px] text-branco text-[24px] font-alata rounded-[5px]" onClick={() => logar()}>Continuar</button>
        </div>
    )
}