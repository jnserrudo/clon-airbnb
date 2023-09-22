import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb";

export async function POST(
  request: Request, 
) {
    //ATENDEMOS LA PETICION Y EXTRAEMOS LO QUE RECIBIMOS DEL BODY
  const body = await request.json();
  const { 
    email,
    name,
    password,
   } = body;

   //el segundo parametro, en este caso el 12 es la sal
   const hashedPassword = await bcrypt.hash(password, 12);

   const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
    }
  });

  return NextResponse.json(user);
}