export const state = () => ({
  name: "",
  ic: "",
  icTentera: "",
  statusKahwin: "",
  numChildren: "",
  mobileNum: "",
  homeNum: "",
  officeNum: "",
  street: "",
  city: "",
  postcode: "",
  negeri: ""
});

export const mutations = {
  saveMaklumatPeribadi(
    state,
    {
      name,
      ic,
      icTentera,
      statusKahwin,
      numChildren,
      mobileNum,
      homeNum,
      officeNum,
      street,
      city,
      postcode,
      negeri
    }
  ) {
    state.name = name;
    state.ic = ic;
    state.icTentera = icTentera;
    state.statusKahwin = statusKahwin;
    state.numChildren = numChildren;
    state.mobileNum = mobileNum;
    state.homeNum = homeNum;
    state.officeNum = officeNum;
    state.street = street;
    state.city = city;
    state.postcode = postcode;
    state.negeri = negeri;
  }
};
