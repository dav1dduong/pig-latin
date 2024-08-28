const translate = require("../src/piglatin.js");

describe("At least (5) tests for words starting with different vowels", () => {
  test(`translate("apple")->"appleway"`, () => {
    const result = translate("apple");
    expect(result).toBe("appleway");
  });
  test(`translate("elephant")->"elephantway"`, () => {
    const result = translate("elephant");
    expect(result).toBe("elephantway");
  });
  test(`translate("igloo")->"iglooway"`, () => {
    const result = translate("igloo");
    expect(result).toBe("iglooway");
  });
  test(`translate("octopus")->"octopusway"`, () => {
    const result = translate("octopus");
    expect(result).toBe("octopusway");
  });
  test(`translate("umbrella")->"umbrellaway"`, () => {
    const result = translate("umbrella");
    expect(result).toBe("umbrellaway");
  });
});

describe(`At least two (2) tests for words starting with one consonant`, () => {
  test(`translate("giraffe") → "iraffegay"`, () => {
    const returnValue = translate("giraffe");
    expect(returnValue).toBe("iraffegay");
  });
  test(`translate("sushi") → "ushisay"`, () => {
    const returnValue = translate("sushi");
    expect(returnValue).toBe("ushisay");
  });
});

describe("At least one (1) test for words starting with two consonants.", () => {
  test(`translate("chicken) -> "hickencay`, () => {
    const returnValue = translate("chicken");
    expect(returnValue).toBe("ickenchay");
  });
});

describe("At least one (1) test for words starting with three consonants.", () => {
  test(`translate("three") -> hreetay`, () => {
    const returnValue = translate("three");
    expect(returnValue).toBe("eethray");
  });
});

describe("At least one (1) test checking for lower case conversion.", () => {
  test(`translate("JOEMAMA") -> oemamajay`, () => {
    const returnValue = translate("JOEMAMA");
    expect(returnValue).toBe("oemamajay");
  });
});
