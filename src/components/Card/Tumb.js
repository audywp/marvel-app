import React from "react";
import styled from "styled-components";

export default function Tumb({ url, title }) {
  const Image = styled.div`
    background-image: url("${url}");
    height: 140px;
    width: 140px;
    @media (min-width: 640px) {
      width: 100%;
    }
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

  return (
    <Container className="flex flex-col justify-center items-center px-10 h-98">
      <Image className="bg-center bg-cover bg-no-repeat shadow-lg rounded-xl mb-4" />
      <p
        style={{ maxWidth: "10ch", whiteSpace: "nowrap" }}
        className="font-bold mb-16 w-32 text-xs text-center text-ellipsis overflow-hidden"
      >
        {title}
      </p>
    </Container>
  );
}
