import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  width?: number;
  height?: number;
  footer?: boolean;
};

const Logo = ({ width = 120, height = 32, footer = false }: Props) => {
  return (
    <Link href="/">
      <Image
        src={`${footer ? "/images/footer-logo.png" : "/images/logo.png"}`}
        alt="Cirql AI"
        width={width}
        height={height}
        className="h-auto"
        priority
      />
    </Link>
  );
};

export default Logo;
