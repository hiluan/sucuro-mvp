import Image from "next/image";
import styled from "styled-components";

export default function Tokens({}) {
  return (
    <STokens>
      <div>
        <Image
          alt="Sucuro Asset Token"
          width="200rem"
          height="200rem"
          src="/Sucuro-Asset-Token.jpg"
          href={"/"}
        />
        <h1>Sucuro Governance Token</h1>
        <p>
          Our ecosystem starts with SUCG: a token that replaces old world real
          estate intermediaries; and earns revenue.
        </p>
      </div>

      <div>
        <Image
          alt="Sucuro Governance Token"
          width="200rem"
          height="200rem"
          src="/Sucuro-Governance-Token.jpg"
          href={"/"}
        />
        <h1>Sucuro Asset Token</h1>
        <p>
          At the heart of our ecosystem is SUCF: a token backed by real world
          real estate assets with reinvested yield.
        </p>
      </div>
    </STokens>
  );
}

const STokens = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    max-width: 500px;
    text-align: center;
    padding: 2rem;
    box-shadow: var(--boxshadow01);
    margin: 2rem 1rem;
    background: white;
  }
  img {
    border-radius: 50%;
  }
`;
