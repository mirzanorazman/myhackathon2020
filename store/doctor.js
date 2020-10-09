export const state = () => ({
  verified: "",
  type: ""
});

export const mutations = {
  saveStatusPemohon(state, { verified, type }) {
    (state.verified = verified), (state.type = type);
  }
};
