// eslint-disable-next-line
const  { PHASE_PRODUCTION_BUILD, PHASE_DEVELOPMENT_SERVER } = require('next/constants');

// eslint-disable-next-line
const nextEnv = require('next-env')
// eslint-disable-next-line
const dotenvLoad = require('dotenv-load')

dotenvLoad()

const withNextEnv = nextEnv()
// eslint-disable-next-line
module.exports = withNextEnv()

// eslint-disable-next-line
module.exports = (phase, { defaultConfig }) => {
  if(phase === PHASE_DEVELOPMENT_SERVER) {
    console.log("I'm in dev mode...");

    return defaultConfig;
  }

  return defaultConfig; 
}