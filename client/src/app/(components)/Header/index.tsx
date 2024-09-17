import React from "react";

type HeadeerProps = {
  name: string;
};

const Header = ({ name }: HeadeerProps) => {
  return <h1 className="text-2xl font-semibold text-gray-700">{name}</h1>;
};

export default Header;
