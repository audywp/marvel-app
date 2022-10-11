import React from "react";
import styled from "styled-components";

export default function Tumb({ url, title }) {
  const Image = styled.div`
    background-image: url("${url}");
    height: 140px;
    width: 100%;
  `;

  const Container = styled.div`
    width: calc(100% / 5);
  `;

  return (
    <Container className="flex flex-col justify-center items-center px-10 h-98">
      <Image className="bg-center bg-cover bg-no-repeat shadow-lg rounded-xl mb-4" />
      <p className="mb-4 text-center">{title}</p>
    </Container>
  );
}
