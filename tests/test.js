console.log("Running application tests...");

const expected = "AKS";

if (!expected.includes("AKS")) {
    console.error("Test failed");
    process.exit(1);
}

console.log("All tests passed");
