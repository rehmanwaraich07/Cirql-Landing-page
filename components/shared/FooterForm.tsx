"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const FooterForm = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleClick = () => {
    if (!email) {
      return;
    }

    router.push(`https://platform.cirql.ai/signup?email=${email}`);
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-2">
      <Input
        type="email"
        className="w-full md:w-[250px]"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />

      <Button
        type="button"
        onClick={handleClick}
        className="font-semibold w-full flex-1"
      >
        Get started
      </Button>
    </div>
  );
};

export default FooterForm;
