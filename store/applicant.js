export const state = () => ({
  // peribadi
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
  negeri: "",

  // pendidikan
  tahapPendidikan: "",
  bidangPengajian: "",
  namaInstitusi: "",

  // pekerjaan
  sektorPekerjaan: "",
  statusPekerjaan: "",
  pekerjaan: "",
  namaMajikan: "",
  telMajikan: "",
  streetMajikan: "",
  cityMajikan: "",
  postcodeMajikan: "",
  negeriMajikan: "",
  pendapatan: "",
  pendapatanLain: "",
  sedangCariKerja: "",

  // waris
  namaWaris: "",
  icWaris: "",
  passportWaris: "",
  nationalityWaris: "",
  hubungan: "",
  jobWaris: "",
  incomeWaris: "",
  permanentAddWaris: "",
  homeNumWaris: "",
  officeNumWaris: "",
  mobileNumWaris: "",
  mailingAddWaris: "",
  postCodeWaris: "",
  cityWaris: "",
  stateWaris: ""
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
  },
  saveMaklumatPendidikan(
    state,
    { tahapPendidikan, bidangPengajian, namaInstitusi }
  ) {
    state.tahapPendidikan = tahapPendidikan;
    state.bidangPengajian = bidangPengajian;
    state.namaInstitusi = namaInstitusi;
  },
  saveMaklumatPekerjaan(
    state,
    {
      sektorPekerjaan,
      statusPekerjaan,
      pekerjaan,
      namaMajikan,
      telMajikan,
      streetMajikan,
      cityMajikan,
      postcodeMajikan,
      negeriMajikan,
      pendapatan,
      pendapatanLain,
      sedangCariKerja
    }
  ) {
    state.sektorPekerjaan = sektorPekerjaan;
    state.statusPekerjaan = statusPekerjaan;
    state.pekerjaan = pekerjaan;
    state.namaMajikan = namaMajikan;
    state.telMajikan = telMajikan;
    state.streetMajikan = streetMajikan;
    state.cityMajikan = cityMajikan;
    state.postcodeMajikan = postcodeMajikan;
    state.negeriMajikan = negeriMajikan;
    state.pendapatan = pendapatan;
    state.pendapatanLain = pendapatanLain;
    state.sedangCariKerja = sedangCariKerja;
  },
  saveMaklumatWaris(
    state,
    { namaWaris, icWaris, passportWaris, nationalityWaris, hubungan, jobWaris, incomeWaris, 
      permanentAddWaris, homeNumWaris, officeNumWaris, mobileNumWaris, mailingAddWaris, 
      postCodeWaris, cityWaris, stateWaris  }
  ) {
    state.namaWaris = namaWaris;
    state.icWaris = icWaris;
    state.passportWaris = passportWaris;
    state.nationalityWaris = nationalityWaris;
    state.hubungan = hubungan;
    state.jobWaris = jobWaris;
    state.incomeWaris = incomeWaris;
    state.permanentAddWaris = permanentAddWaris;
    state.homeNumWaris = homeNumWaris;
    state.officeNumWaris = officeNumWaris;
    state.mobileNumWaris = mobileNumWaris;
    state.mailingAddWaris = mailingAddWaris;
    state.postCodeWaris = postCodeWaris;
    state.cityWaris = cityWaris;
    state.stateWaris = stateWaris;
  },
};
