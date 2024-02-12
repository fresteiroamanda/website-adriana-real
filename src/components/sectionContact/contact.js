import React, { useState } from 'react';
import { IoMdPerson } from "react-icons/io";
import { CiMail, CiCalendarDate } from "react-icons/ci";
import { BiMailSend } from "react-icons/bi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { Title, FormContainer, Form, FormGroup, Label, Input, SubmitButton } from './contactStyle'
import budget from '../../assets/budget.png'

const FormWhatsapp = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [data, setData] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const celularPadrao = '+55'
    const celularCompleto = `${celularPadrao}${celular}`;

    const mensagem = `
      Nome: ${nome}
      Email: ${email}
      Celular: ${celularCompleto}
      Data: ${data}
    `;
    const numeroWhatsapp = '+5521969372134';
    const url = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  };

  return (
    <>
    <Title>
      <img src={budget} width="300px" alt="Logo" />
    </Title>
    <FormContainer>
      <Form>
        <FormGroup>
          <Label htmlFor="nome"><IoMdPerson /></Label>
          <Input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} required placeholder='Digite seu nome'/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email"><CiMail /></Label>
          <Input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='Digite seu e-mail'/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="celular"><IoPhonePortraitOutline /></Label>
          <Input type="tel" id="celular" value={celular} onChange={(e) => setCelular(e.target.value)} required placeholder='Nº celular com DDD'/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="text"><CiCalendarDate /></Label>
          <Input type="text" id="data" value={data} onChange={(e) => setData(e.target.value)} required placeholder='Data do evento (dd/mm/aaaa)'/>
        </FormGroup>
        <SubmitButton type="submit" onClick={handleSubmit}><BiMailSend /> Enviar orçamento</SubmitButton>
      </Form>
    </FormContainer>
    </>
  );
};

export default FormWhatsapp;
