import { BsPiggyBank, BsBuilding } from "react-icons/bs";
import { FaRegHandshake } from "react-icons/fa";
import styled from "styled-components";

export default function HowsThree({}) {
  return (
    <SHowsThree>
      <div>
        <h1>
          We've made investing in real estate <span> more accessible</span>,
          <span> less expensive</span> and <span>more trustworthy</span>.
        </h1>
        <h3>
          Sucuro uses public blockchain technology to offer investors
          inflation-linked returns from a debt free diversified portfolio of
          institutional-grade real estate assets with ultra low fees.
        </h3>
        <h1>Here's how:</h1>
      </div>
      <S3Points>
        <div>
          <BsBuilding />
          <h2>Institutional-grade Australian real estate assets</h2>
          <p>
            When you buy a Sucuro Asset Token you're buying a share of bricks
            and mortar properties with paying tenants on a secure public
            blockchain. We don't do synthetic assets or paper money algorithms.
          </p>
        </div>
        <div>
          <BsPiggyBank />
          <h2>Disruptive technology that replaces middlemen</h2>
          <p>
            We've rebuilt the asset management model from the ground up with
            blockchain-based smart contracts that replace fee hungry middlemen
            like banks, fund managers and brokers. These smart contracts are
            managed by the Sucuro Governance Token that you can also choose to
            own.
          </p>
        </div>
        <div>
          <FaRegHandshake />
          <h2>Earning trust through transparency</h2>
          <p>
            Real estate investors deserve more than a glossy picture book every
            12 months. That's why we're earning your trust by recording every
            transaction on a public blockchain and publishing every investment
            decision in real time.
          </p>
        </div>
      </S3Points>
    </SHowsThree>
  );
}

const SHowsThree = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  span {
    color: #6f1d1b;
  }
`;

const S3Points = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 768px;

  div {
    padding: 2rem;
    margin: 1rem 2rem;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
  }

  svg {
    font-size: 2rem;
    font-weight: 100;
  }
`;
