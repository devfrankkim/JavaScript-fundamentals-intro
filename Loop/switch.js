// Switch statement

// Use for multiple if checks
// Use for enum-like value check
// Use for multiple type checks in TS

const browser = "IE";
switch (browser) {
  case "IE":
    console.log("not any more");
    break;
  case "Chrome": // you can repeat
  case "safari": // you can repeat
    console.log("Google is good");
    break;
  case "Firefox":
    console.log("Firefox is okay");
    break;
  default:
    console.log("default");
    break;
}
