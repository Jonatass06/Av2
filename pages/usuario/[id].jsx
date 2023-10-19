import RotaPrivada from "@/components/RotaPrivada"
import { useRouter } from "next/dist/client/router";

export default() =>{
    const id = useRouter().query.id

    return(
        <RotaPrivada id={id}>
            <div className="bg-black w-16 h-16"></div>
        </RotaPrivada>
    )

}