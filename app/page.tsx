"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CardanoQueryClient } from "@utxorpc/sdk";
import Image from "next/image";
import { useState } from "react";

async function readParamsExample(port: number) {
  const queryClient = new CardanoQueryClient({
    uri: `http://localhost:${port}`,
    // uri: "https://preprod.utxorpc-v0.demeter.run:443",
    // headers: {
    //   "dmtr-api-key": "dmtr_utxorpc15dnupstcsym5xjd7yha0eccta5x6s353",
    // },
  });

  const params = await queryClient.readParams();
  console.log(params);
}

export default function Home() {
  const [port, setPort] = useState<number>(8081);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-row gap-4">
          <Label>Port</Label>
          <Input type="number" placeholder="port" onChange={(e) => setPort(Number(e.target.value))} />
        </div>
        <div>
          <Button
            onClick={() => {
              readParamsExample(port).catch(console.error);
            }}
          >
            Read Params
          </Button>
        </div>
        
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
