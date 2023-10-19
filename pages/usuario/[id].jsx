import Header from "@/components/Header";
import RotaPrivada from "@/components/RotaPrivada"
import { useRouter } from "next/dist/client/router";

export default() =>{
    const id = useRouter().query.id
    const usuario = {}

    return(
        <RotaPrivada id={id}>
            <Header></Header>
            {
                
            }
        </RotaPrivada>
    )

}