import mock from "../mock";

const affiliateDB = {
  about: [
    {
      id: 0,
      name: "John Wick",
      time: "17:24 AM",
      bonus: "5000",
      status: "Verified"
    },
    {
      id: 1,
      name: "James Bond",
      time: "17:24 PM",
      bonus: "0",
      status: "Not Verified"
    },
    {
      id: 2,
      name: "Jack Reacher",
      time: "01:00 AM",
      bonus: "5000",
      status: "Verified"
    },
    {
      id: 3,
      name: "Jason Bourne",
      time: "11:11 PM",
      bonus: "0",
      status: "Not Verified"
    },
    {
      id: 4,
      name: "Jack Sparrow",
      time: "10:24 AM",
      bonus: "5000",
      status: "Verified"
    }
  ]
};

mock.onGet("/api/user/affiliates").reply(config => {
  return [200, affiliateDB.about];
});
