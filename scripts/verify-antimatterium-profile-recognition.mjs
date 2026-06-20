import fs from "node:fs";

const profile = fs.readFileSync("profile/README.md", "utf8");
const recognition = JSON.parse(fs.readFileSync("public/recognitions/ANTIMATTERIUM_QVRA_PROFILE_RECOGNITION.json", "utf8"));

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

assert(recognition.profile_surface === "QVRA_PROFILE_ANTIMATTERIUM_RECOGNITION", "profile surface mismatch");
assert(recognition.version === "v0.1.0", "version mismatch");
assert(recognition.recognized_object.owner === "ANTIMATTERIUM", "owner mismatch");
assert(recognition.recognized_object.type === "qvra-recognized external runnable lab object", "object type mismatch");
assert(recognition.recognized_object.website === "https://antimatterium.github.io/WWW/", "website missing");
assert(recognition.recognized_object.npm_install === "npm i @antimatterium/antimatterium", "npm install missing");

assert(recognition.qvra_chain.lab.includes("v0.1.0-qvra-antimatterium-lab-object"), "lab release missing");
assert(recognition.qvra_chain.index.includes("v0.1.0-qvra-index-antimatterium-runnable-object"), "index release missing");
assert(recognition.qvra_chain.launch.includes("v0.1.0-qvra-launch-antimatterium-runnable-object"), "launch release missing");
assert(recognition.qvra_chain.meta.includes("v0.1.0-qvra-meta-antimatterium-recognition"), "meta release missing");

assert(recognition.external_chain.antimatterium_core.includes("v0.2.0-antimatterium-qvra-external-lab-recognition"), "core release missing");
assert(recognition.external_chain.antimatterium_www.includes("v0.1.3-antimatterium-www-qvra-lab-recognition"), "www release missing");
assert(recognition.external_chain.invocorder_profile.includes("v2.0.1-antimatterium-evidence-profile"), "invocorder release missing");

assert(recognition.claim_boundary.claims_current_industrial_antimatter_production === false, "production overclaim");
assert(recognition.claim_boundary.claims_current_starship_readiness === false, "starship overclaim");
assert(recognition.claim_boundary.claims_physical_production_instructions === false, "instruction overclaim");

assert(recognition.completion.QVRA_PROFILE_RECOGNITION_BOUND === true, "profile recognition not bound");
assert(recognition.completion.QVRA_LAB_BOUND === true, "lab not bound");
assert(recognition.completion.QVRA_INDEX_BOUND === true, "index not bound");
assert(recognition.completion.QVRA_LAUNCH_BOUND === true, "launch not bound");
assert(recognition.completion.QVRA_META_BOUND === true, "meta not bound");
assert(recognition.completion.ANTIMATTERIUM_PUBLIC_PROFILE_EXPOSED === true, "public profile not exposed");

assert(profile.includes("ANTIMATTERIUM"), "profile missing ANTIMATTERIUM");
assert(profile.includes("external runnable lab object"), "profile missing object statement");
assert(profile.includes("v0.1.0-qvra-meta-antimatterium-recognition"), "profile missing meta release");
assert(profile.includes("v0.2.0-antimatterium-qvra-external-lab-recognition"), "profile missing core release");
assert(profile.includes("not current industrial antimatter production"), "profile boundary missing");

console.log("QVRA_PROFILE_ANTIMATTERIUM_RECOGNITION_VERIFY_PASS=true");
console.log("QVRA_PROFILE_RECOGNITION_BOUND=true");
console.log("QVRA_LAB_BOUND=true");
console.log("QVRA_INDEX_BOUND=true");
console.log("QVRA_LAUNCH_BOUND=true");
console.log("QVRA_META_BOUND=true");
console.log("ANTIMATTERIUM_PUBLIC_PROFILE_EXPOSED=true");
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
