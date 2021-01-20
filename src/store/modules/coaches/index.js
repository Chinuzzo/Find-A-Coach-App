import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      coaches: [
        {
          id: "c1",
          firstName: "Mario",
          lastName: "Gnotti",
          areas: ["mentor"],
          description:
            "I'm Mario and I've worked as a freelance football coach for years. A great fan of attacking football. People consider me a 'peoples person'. Let me help you become a great team!",
          hourlyRate: 30,
        },
        {
          id: "c2",
          firstName: "Jim",
          lastName: "Woods",
          areas: ["manager", "mentor"],
          description:
            "I am Jim and as a former football coach at some major clubs, I can help you win your first title and progress with your current squad.",
          hourlyRate: 50,
        },
        {
          id: "c3",
          firstName: "Henk",
          lastName: "de Vries",
          areas: ["assistant"],
          description:
            "Hello, my name is Henk de Vries. I recently started as a professional football coach, but I have a lot of experience with youth teams. I can help build a strong foundation.",
          hourlyRate: 20,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
