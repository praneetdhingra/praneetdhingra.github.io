// Visitor analytics via GoatCounter (free, cookieless, so no consent banner needed under GDPR).
// Setup: sign up at https://www.goatcounter.com, pick a code (e.g. "praneet"), and paste it below.
// Stats then appear at https://<your-code>.goatcounter.com
const GOATCOUNTER_CODE = "praneet";

const isLocal = ["localhost", "127.0.0.1", ""].includes(location.hostname);

if (!GOATCOUNTER_CODE.startsWith("YOUR_") && !isLocal) {
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://gc.zgo.at/count.js";
  s.dataset.goatcounter = `https://${GOATCOUNTER_CODE}.goatcounter.com/count`;
  document.head.appendChild(s);
}
