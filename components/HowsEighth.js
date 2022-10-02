import { BsPiggyBank, BsBuilding } from "react-icons/bs";
import { FaRegHandshake } from "react-icons/fa";
import { SMainBtn } from "../styles/SMainBtn";
import styled from "styled-components";

export default function HowsEighth({}) {
  return (
    <SHowsThree>
      <div>
        <h1>
          We've made a <span>new ecosystem</span> for a{" "}
          <span>new way of investing</span>.
        </h1>
        <h3>
          Traditional property investing is designed to make middlemen rich. But
          blockchain technology means you can invest without them - and make
          more money doing it.
        </h3>
        <h1>Here's how it works:</h1>
      </div>
      <S8Points>
        <div>
          <BsBuilding />
          <h2>Rules</h2>
          <p>
            Sucuro Governance Token holders set the rules and attributes that
            will govern how our smart contracts execute property acquisitions.
          </p>
        </div>
        <div>
          <BsPiggyBank />
          <h2>Property sales</h2>
          <p>
            Asset owners submit properties for sale. If the property meets the
            rules and the sale price is less than or equal to a professional
            valuation; the property is added to the pipeline.
          </p>
        </div>
        <div>
          <FaRegHandshake />
          <h2>Tokens</h2>
          <p>
            Investors agree to buy tokens in a primary sale. When the value of
            tokens committed exceeds the price of the next property in the
            pipeline, the property is purchased.
          </p>
        </div>

        <div>
          <FaRegHandshake />
          <h2>Management</h2>
          <p>
            A property manager is appointed to lease the property, collect rent
            and organise repairs and maintenance.
          </p>
        </div>

        <div>
          <FaRegHandshake />
          <h2>Public transactions</h2>
          <p>
            Both investors and the general public can see the income and
            expenses for the property on the blockchain as they happen.
          </p>
        </div>
        <div>
          <FaRegHandshake />
          <h2>Market pricing</h2>
          <p>
            The market determines the price for tokens based on the value of the
            properties held and the yield they are generating.
          </p>
        </div>
        <div>
          <FaRegHandshake />
          <h2>Reinvestment</h2>
          <p>
            The net rental income from properties owned is reinvested. Sucuro
            Governance Token holders determine whether to buy new properties in
            the pipeline or upgrading existing properties.
          </p>
        </div>
        <div>
          <FaRegHandshake />
          <h2>Option to exit</h2>
          <p>
            Investors can choose to sell some or all of their tokens on a coin
            exchange at any time at the market price.
          </p>
        </div>
      </S8Points>
      <SMainBtn>Join the Early Access List</SMainBtn>
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

const S8Points = styled.div`
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
`;
