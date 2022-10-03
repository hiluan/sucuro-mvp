import { BsPiggyBank, BsBuilding } from "react-icons/bs";
import { FaRegHandshake } from "react-icons/fa";
import { SMainBtn } from "../styles/SMainBtn";
import styled from "styled-components";

export default function Eighth({}) {
  return (
    <SEighth>
      <S8Title>
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
      </S8Title>
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
    </SEighth>
  );
}

const SEighth = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;
  z-index: 1;

  span {
    color: #6f1d1b;
  }

  // background: url(../blockchain.jpg) no-repeat center center fixed;
  // -webkit-background-size: cover;
  // -moz-background-size: cover;
  // -o-background-size: cover;
  // background-size: cover;
`;

const S8Title = styled.div`
  // background: white;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    width: 768px;
    padding: 2rem 0;
  }

  h3 {
    width: 768px;
  }
`;

const S8Points = styled.div`
  transition: all 0.3s ease;
  margin: 2rem 0;
  width: 50%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 1rem;

  div {
    background: white;
    padding: 1rem;
    margin: 1rem 0;
    box-shadow: var(--boxshadow01);
    border-radius: 1rem;
    transition: all ease 0.3s;

    &:hover {
      box-shadow: none;
    }
  }

  svg {
    font-size: 2rem;
    font-weight: 100;
  }
`;
