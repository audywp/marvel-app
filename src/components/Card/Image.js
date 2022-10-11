import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function CardImage({ url, title, refID, from }) {
  const Image = styled.div`
    background-image: url("${url}");
    height: 300px;
    width: 100%;
    cursor: pointer;
  `;

  const Container = styled.div`
    width: calc(100% / 5);
  `;

  const navigate = useNavigate();

  const getByID = () => {
    navigate(`/id?reference=${refID}&from=${from}`);
  };

  return (
    <Container
      onClick={getByID}
      className="flex flex-col justify-center items-center px-10"
    >
      <Image className="bg-center bg-cover bg-no-repeat shadow-lg rounded-xl mb-4" />
      <p className="font-bold mb-16 truncate w-60">{title}</p>
    </Container>
  );
}
