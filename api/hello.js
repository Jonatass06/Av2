// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextRequest, NextResponse } from "next/server";

export async function getDataId(id, tabela) {
  const result = await fetch( "http://localhost:8082/"+ tabela +"/"+ id);
  const dados = await result.json();
  return dados
}

export async function getUserByPasswordUsername(username, password) {
  const result = await fetch("http://localhost:8082/usuario");
  const dados = await result.json();
  for(let dado of dados){
    if(dado.nome == username && dado.senha == password){
      return dado;
    }
  }
  return null;
}

export async function getAllData(tabela) {
  const result = await fetch("http://localhost:8082/"+ tabela);
  const dados = await result.json();
  return dados
}

export async function postData(object, tabela) {
  const res = await fetch("https://localhost:8082/"+ tabela , {
    method: "POST",
    headers: {
      'Content-Type': 'Application/json'
    },
    body: JSON.stringify(object),
  });

  const data = await res.json()
  return NextResponse.json(data)
}

export async function deleteData(id, tabela) {
  const result = await fetch("http://localhost:8082/" + tabela +"/"+ id,{method:"DELETE"});
  const dados = await result.json();

  return dados;

}

export async function putData(object, tabela) {
  const res = await fetch("http://localhost:8082/"+tabela, {
    method: "PUT",
    headers: {
      'Content-Type': 'Application/json'
    },
    body: JSON.stringify(object),
  });
  const data = await res.json()

  return NextResponse.json(data)

}
