import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { FaTwitterSquare, FaLinkedin } from "react-icons/fa";

export default function Footer({}) {
  return (
    <SFooter>
      <div>
        <Link href={"https://twitter.com/sucuroco"}>
          <FaTwitterSquare />
        </Link>
        <Link href={"https://www.linkedin.com/company/sucuro/"}>
          <FaLinkedin />
        </Link>
        {/* <Image
          alt="Sucuro Asset Token"
          height="50rem"
          width="50rem"
          src="https://uploads-ssl.webflow.com/62b122ba5bc41637dba39c91/62b2f957c62926808b42dfab_LinkedIn.svg"
        />
        <Image
          alt="Sucuro Asset Token"
          height="50rem"
          width="50rem"
          src="https://uploads-ssl.webflow.com/62b122ba5bc41637dba39c91/62b2f957c62926808b42dfab_LinkedIn.svg"
        /> */}
      </div>
      <div>
        <p>
          The information on this website is intended to be general in nature
          and is not personal financial product advice. It does not take into
          account your objectives, financial situation or needs. Before acting
          on any information, you should consider the appropriateness of the
          information provided and the nature of the relevant financial product
          having regard to your objectives, financial situation and needs. In
          particular, you should seek independent financial advice and read all
          information available prior to making an investment decision in
          relation to a financial product (including a decision about whether to
          acquire or continue to hold).
        </p>
        <p>Copyright © 2021 Sucuro (Venture) Pty Ltd</p>
        {/* <Link href={"/"}>Privacy Policy</Link> */}
      </div>
    </SFooter>
  );
}

const SFooter = styled.div`
  svg {
    font-size: 2rem;
  }
`;
