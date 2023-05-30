"use client";

import {
  TokenBuildrContract,
  contracts,
} from "../../contracts/tokenbuildr/TokenBuildr";
import { useContractWrite, useNetwork, useWaitForTransaction } from "wagmi";

import { useState } from "react";
import { ChainIcon, ConnectKitButton, useModal } from "connectkit";
import { Connected } from "../Connected";
import { parseEther } from "viem";
import { Balance } from "../Balance";
import { NetworkDisplay } from "./NetworkDisplay";

export function TokenMaker() {
  const { chain } = useNetwork();

  console.log(chain?.network);

  const { write, data, error, isLoading, isError } = useContractWrite({
    ...TokenBuildrContract,
    address: chain
      ? contracts[chain.network as keyof typeof contracts]
      : contracts["sepolia"],
    functionName: "deployToken",
  });

  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [initialSupply, setInitialSupply] = useState(1000000);

  const deployToken = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await write({
      args: [tokenName, tokenSymbol, parseEther(`${initialSupply}`)],
    });
  };

  return (
    <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
      <div className="w-full max-w-xs">
        <div className="content-center">
          <ConnectKitButton
            label="Connect your wallet to start"
            showBalance={true}
            theme="midnight"
          />
        </div>
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            TokeNice
          </h2>
          <NetworkDisplay />
        </div>
        <Connected>
          <form
            onSubmit={deployToken}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="tokenName"
              >
                Token Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="tokenName"
                type="text"
                placeholder="k1merran.eth Coin"
                value={tokenName}
                onChange={(e) => setTokenName(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="tokenSymbol"
              >
                Token Symbol
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="tokenSymbol"
                type="text"
                placeholder="K1M"
                value={tokenSymbol}
                onChange={(e) => setTokenSymbol(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="initialSupply"
              >
                Initial Supply
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="initialSupply"
                type="number"
                placeholder="Initial Supply"
                value={initialSupply}
                onChange={(e) => setInitialSupply(Number(e.target.value))}
              />
            </div>
            <div className="inline-flex">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
              >
                Create Token
              </button>
            </div>
          </form>
        </Connected>
      </div>
    </div>
  );
}
