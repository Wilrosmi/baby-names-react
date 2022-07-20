import genderReturn from "./objectGenderReturn";
import Gender from "./genderEnum";

test("Returns the correct string value", () => {
  expect(
    genderReturn({
      name: "Will",
      id: 3,
      sex: Gender.f,
    })
  ).toBe("f");
  expect(
    genderReturn({
      name: "Smith",
      id: 74,
      sex: Gender.m,
    })
  ).toBe("m");
});
