const Dict = require("../index");

const users = new Dict({
  12345: {
    firstName: "Yaşar",
    lastName: "İÇLİ",
    age: 20,
  },

  123456: {
    firstName: "Selim",
    lastName: "KUMRU",
    age: 20,
  },
});

test("Fetch", () => {
  expect(users.fetch()).toEqual({
    12345: {
      firstName: "Yaşar",
      lastName: "İÇLİ",
      age: 20,
    },

    123456: {
      firstName: "Selim",
      lastName: "KUMRU",
      age: 20,
    },
  });
});

test("Insert", () => {
  users.insert("1234567", {
    firstName: "Ayşe",
    lastName: "KIRGEL",
    age: 31,
  });

  expect(users.fetch()).toEqual({
    12345: {
      firstName: "Yaşar",
      lastName: "İÇLİ",
      age: 20,
    },

    123456: {
      firstName: "Selim",
      lastName: "KUMRU",
      age: 20,
    },

    1234567: {
      firstName: "Ayşe",
      lastName: "KIRGEL",
      age: 31,
    },
  });
});

test("Get", () => {
  const user = users.get("12345");
  const user2 = users.get("123456");

  expect(user.get("firstName")).toBe("Yaşar");
  expect(user.get("lastName")).toBe("İÇLİ");

  expect(user2.get("firstName")).toBe("Selim");
  expect(user2.get("lastName")).toBe("KUMRU");
});

test("Update", () => {
  const user = users.get("12345");

  user.update("firstName", "Yaşarİ");
  user.update("lastName", "İÇLİM");

  expect(user.get("firstName")).toBe("Yaşarİ");
  expect(user.get("lastName")).toBe("İÇLİM");
});

test("Inc", () => {
  const user = users.get("12345");

  user.inc("age", +10);
  expect(user.get("age")).toBe(30);

  user.inc("age", -10);
  expect(user.get("age")).toBe(20);
});

test("Remove", () => {
  const user = users.get("12345");

  user.remove();

  expect(users.get("12345")).toBeUndefined();
});
