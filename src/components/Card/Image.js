import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function CardImage({ url, title, refID, from }) {
  const Image = styled.div`
    background-image: url("${url}");
    height: 300px;
    cursor: pointer;
  `;

  const Container = styled.div`
    @media (min-width: 640px) {
      width: calc(100% / 2);
    }

    @media (min-width: 1024px) {
      width: calc(100% / 3);
    }

    @media (min-width: 1280px) {
      width: calc(100% / 5);
    }
  `;

  const navigate = useNavigate();

  const getByID = () => {
    navigate(`/id?reference=${refID}&from=${from}`);
  };

  return (
    <Container
      onClick={getByID}
      className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 flex flex-col justify-center items-center px-10"
    >
      <Image className="bg-center bg-cover bg-no-repeat shadow-lg rounded-xl mb-4 w-full" />
      <p className="font-bold mb-16 truncate w-60 text-xs">{title}</p>
    </Container>
  );
}
