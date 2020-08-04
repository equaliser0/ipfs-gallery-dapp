# ipfs-gallery-dapp
A simple photo gallery built with [Nuxt.js](https://nuxtjs.org/) & [IPFS](https://ipfs.io/).

## IPFS Node Setup
* Install and run a local IPFS node (More info can be found in the [docs](https://docs.ipfs.io/recent-releases/go-ipfs-0-6/install/#windows))
* Start IPFS node with the following cmd: **ipfs daemon**
* Open the IPFS WebUI running on **http://localhost:5001/webui**
* Go to the **Settings tab**
* Add **http://<span></span>localhost:3000** to the **Access-Control-Allow-Origin** at the top of the IPFS config file (CORS)

Any additional info on configuring IPFS nodes can be found in the [docs](https://docs.ipfs.io/how-to/configure-node/#addresses).

## Nuxt Setup
* npm install
* npm run dev
