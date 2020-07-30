import { images } from "../utils/AVATARS";

const SET_DATA = "SET_DATA";
const MODULE_NAME = "data";
export const getData = (state) => state[MODULE_NAME].payments;
const initialState = {
  payments: [
    {
      id: 1,
      user: {
        userID: 25,
        avatar: images.user1,
        name: "Ada Lovelace",
      },
      payment: "150$",
      paymentTime: "06/20/2020",
      type: "Debt",
      payWith: "Credit Account",
    },
    {
      id: 2,
      user: {
        userID: 26,
        avatar: images.user2,
        name: "Mark Hopper",
      },
      payment: "720.25$",
      paymentTime: "07/22/2020",
      type: "Debt",
      payWith: "Credit Account",
    },
    {
      id: 3,
      user: {
        userID: 27,
        avatar: images.user3,
        name: "Margaret Hamilton",
      },
      payment: "330$",
      paymentTime: "07/20/2020",
      type: "Debt",
      payWith: "Credit Account",
    },
    {
      id: 4,
      user: {
        userID: 26,
        avatar: images.user2,
        name: "Mark Hopper",
      },

      payment: "720.25$",
      paymentTime: "07/25/2020",
      type: "Debt",
      payWith: "Credit Account",
    },
    {
      id: 5,
      user: {
        userID: 27,
        avatar: images.user3,
        name: "Margaret Hamilton",
      },
      avatar: images.user3,
      name: "Margaret Hamilton",
      payment: "330$",
      paymentTime: "06/28/2020",
      type: "Debt",
      payWith: "Credit Account",
    },
  ],
};

export function dataReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_DATA:
      return {
        ...state,
      };

    default:
      return state;
  }
}

const setData = (payload) => ({
  type: SET_DATA,
  payload,
});
