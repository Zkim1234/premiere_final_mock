import Image from "next/image";
import { Lexend } from "next/font/google";

const lexend = Lexend({ subsets: ["latin"] });

export default function Home() {
  return <div className={lexend.className}>Find Fun and Save More!</div>;
}
