import React, { useEffect } from "react";
import "./Coin.scss";
function Coin() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="coin">
      <div className="left">
        <img src="/image/img1.png" alt="" />
        <h2>Bitcoin</h2>
        <p>Rank: #1</p>
      </div>
      <div className="right">
        <div className="top">
          <span>
            24h Change:
            <div className="green">1.85% </div>
          </span>
          <span>
            Price:
            <div className="green">$26,216.00</div>
          </span>
          <span>Symbol: btc</span>
        </div>
        <div className="bottom">
          Bitcoin is the first successful internet money based on peer-to-peer
          technology; whereby no central bank or authority is involved in the
          transaction and production of the Bitcoin currency. It was created by
          an anonymous individual/group under the name, Satoshi Nakamoto. The
          source code is available publicly as an open source project, anybody
          can look at it and be part of the developmental process. Bitcoin is
          changing the way we see money as we speak. The idea was to produce a
          means of exchange, independent of any central authority, that could be
          transferred electronically in a secure, verifiable and immutable way.
          It is a decentralized peer-to-peer internet currency making mobile
          payment easy, very low transaction fees, protects your identity, and
          it works anywhere all the time with no central authority and banks.
          Bitcoin is designed to have only 21 million BTC ever created, thus
          making it a deflationary currency. Bitcoin uses the SHA-256 hashing
          algorithm with an average transaction confirmation time of 10 minutes.
          Miners today are mining Bitcoin using ASIC chip dedicated to only
          mining Bitcoin, and the hash rate has shot up to peta hashes. Being
          the first successful online cryptography currency, Bitcoin has
          inspired other alternative currencies such as Litecoin, Peercoin,
          Primecoin, and so on. The cryptocurrency then took off with the
          innovation of the turing-complete smart contract by Ethereum which led
          to the development of other amazing projects such as EOS, Tron, and
          even crypto-collectibles such as CryptoKitties.
        </div>
      </div>
    </div>
  );
}

export default Coin;
