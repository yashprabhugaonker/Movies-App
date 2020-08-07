//import * as Sentry from "@sentry/browser";

function init() {
  // Sentry.init({
  //   dsn:
  //     "https://5c1b078058534dfdb78b31377599c9ae@o391641.ingest.sentry.io/5238057",
  // });
}

function log(error) {
  console.error(error);
  //Sentry.captureException(error);
}

export default {
  init,
  log,
};
