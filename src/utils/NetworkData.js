const NetworkData = {
  ethereum: {
    chainId: `0x${Number(1).toString(16)}`,
    chainName: "Ethereum Mainnet",
    nativeCurrency: {
      name: "Ethereu,",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://eth.llamarpc.com"],
    blockExplorerUrls: ["https://www.energi.world/"],
  },

  ethereum_test: {
    chainId: `0x${Number(5).toString(16)}`,
    chainName: "Ethereum Goerli",
    nativeCurrency: {
      name: "ETHEREUM",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://eth-goerli.public.blastapi.io"],
    blockExplorerUrls: ["https://goerli.etherscan.io/"],
  },

  energi: {
    chainId: `0x${Number(39797).toString(16)}`,
    chainName: "Energi Mainnet",
    nativeCurrency: {
      name: "Energi",
      symbol: "NRG",
      decimals: 18,
    },
    rpcUrls: ["https://nodeapi.energi.network"],
    blockExplorerUrls: ["https://www.energi.world/"],
  },

  energi_test: {
    chainId: `0x${Number(49797).toString(16)}`,
    chainName: "Energi Testnet",
    nativeCurrency: {
      name: "Energi",
      symbol: "NRG",
      decimals: 18,
    },
    rpcUrls: ["https://nodeapi.test.energi.network"],
    blockExplorerUrls: ["https://explorer.test.energi.network/"],
  },

  polygon: {
    chainId: `0x${Number(137).toString(16)}`,
    chainName: "Polygon Mainnet",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://polygon-rpc.com/"],
    blockExplorerUrls: ["https://polygonscan.com/"],
  },

  bsc: {
    chainId: `0x${Number(56).toString(16)}`,
    chainName: "Binance Smart Chain Mainnet",
    nativeCurrency: {
      name: "Binance Chain Native Token",
      symbol: "BNB",
      decimals: 18,
    },
    rpcUrls: ["https://bsc-dataseed1.binance.org"],
    blockExplorerUrls: ["https://bscscan.com"],
  },

  avax: {
    chainId: `0x${Number(43114).toString(16)}`,
    chainName: "Avalanche C-Chain",
    nativeCurrency: {
      name: "Avalanche",
      symbol: "AVAX",
      decimals: 18,
    },
    rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
    blockExplorerUrls: ["https://snowtrace.io"],
  },

  avax_test: {
    chainId: `0x${Number(43113).toString(16)}`,
    chainName: "Avalanche Fuji Testnet",
    nativeCurrency: {
      name: "Avalanche",
      symbol: "AVAX",
      decimals: 18,
    },
    rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
    blockExplorerUrls: ["https://testnet.snowtrace.io"],
  },
};

export default NetworkData;
