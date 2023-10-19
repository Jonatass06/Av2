// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextRequest, NextResponse } from "next/server";

export async function getDataId(cep) {
  const result = await fetch("https://viacep.com.br/ws/" + cep + "/json/");
  const dados = await result.json();



  return dados

}
// export async function getAllData() {
//   const result = await fetch("https://viacep.com.br/usuarios");
//   const dados = await result.json();


//   return dados

// }

export async function postData() {
  const res = await fetch("https://viacep.com.br/ws/01001000/json/", {
    method: "POST",
    headers: {
      'Content-Type': 'Application/json'
    },
    body: JSON.stringify(object),
  });

  const data = await res.json()

  return NextResponse.json(data)

}

export async function deleteData(idExclusao) {
  const result = await fetch("https://viacep.com.br/ws/" + idExclusao,{method:"DELETE"});
  const dados = await result.json();

  return dados;

}

export async function putData() {
  const res = await fetch("https://viacep.com.br/ws/01001000/json/", {
    method: "PUT",
    headers: {
      'Content-Type': 'Application/json'
    },
    body: JSON.stringify(object),
  });

  const data = await res.json()

  return NextResponse.json(data)

}
