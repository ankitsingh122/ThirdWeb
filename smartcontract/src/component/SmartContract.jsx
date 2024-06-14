import React from 'react'
import { useState } from 'react';

import {
  ConnectWallet,
  Web3Button,
  useAddress,
  useContract,
  useContractRead,
} from "@thirdweb-dev/react";


function SmartContract() {
      const [newvalue, setNewValue] = useState("0");
      const { contract } = useContract(
        "0x514fcDcf53C7aFafdFA9A2aadedf789e0b909D75"
      );
      const { data: numsValue, isLoading } = useContractRead(
        contract,
        "retrieve"
      );

      const addr = useAddress();

      const handlesubmit = async (contract) =>{
        await contract.call("store", [newvalue])
        setNewValue("");
      }
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-slate-950 shadow-inner">
        <div className="bg-black w-max rounded-lg border border-orange-500">
          <div className="flex justify-center p-10">
            <ConnectWallet />
          </div>

          <h1 className="flex justify-center text-white">
            {isLoading ? "0" : numsValue.toNumber()}
          </h1>
          <div className="space-x-10 p-10 flex justify-center">
            {addr && (
              <>
                <input
                  type="number"
                  placeholder='Enter the Number'
                  value={newvalue}
                  onChange={(e) => setNewValue(parseInt(e.target.value))}
                  className="border py-2 rounded-lg text-center"
                />
                <Web3Button
                  contractAddress="0x514fcDcf53C7aFafdFA9A2aadedf789e0b909D75"
                  action={handlesubmit}
                >
                  Set new value
                </Web3Button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default SmartContract;


