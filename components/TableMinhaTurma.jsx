import { useState } from "react"
import Nomes from "./Nomes";

export default ({ turma }) => {
    const [mostrarAlunos, setMostrarA] = useState(false);
    const [mostrarDisciplinas, setMostrarD] = useState(false);


    return (
        <div>
            <div>Minha Turma</div>
            <div>
                <div>
                    <div>{turma.id}</div>
                    <div>
                        {turma.alunos.map(aluno => {
                            return <div>
                                <div>{aluno.nome}</div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}