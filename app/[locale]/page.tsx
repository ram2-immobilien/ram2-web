"use client"
import { useState } from "react";
import TextField from "@/components/TextField/TextField";
import TextArea from "@/components/TextArea/TextArea";

export default function Home() {
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");

  return (
    <div style={{ padding: "40px", maxWidth: "800px" }}>
      <TextField label="Nombre completo" placeholder="Nombre completo" value={nombre} setValue={setNombre} />
      <br />
      <TextArea label="Mensaje" placeholder="Mensaje" value={mensaje} setValue={setMensaje} />
    </div>
  );
}