"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("8241cf55-adb4-4f4b-a9a3-67ddd7c1f351");
  }, []);

  return null;
};
