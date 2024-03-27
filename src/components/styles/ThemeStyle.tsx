export interface ITheme {
  theme: {
    bodyBg: string;
    bodyColor: string;

    modalBg: string;
    textBg: string;
    iconBg: string;
    tagBg: string;

    text: string;
    inputBorder: string;

    btnBg: string;
    btnText: string;
  };
}

export const lightTheme = {
  bodyBg: "#fff",
  bodyColor: "black",

  modalBg: "#fff",
  textBg: "#edf2f9",
  iconBg: "#f6fafc",
  tagBg: "#edf2f9",

  text: "#2b3138",
  inputBorder: "#d9dee4",

  btnBg: "#2b3138",
  btnText: "#fff",
};

export const darkTheme = {
  bodyBg: "#444b52",
  bodyColor: "#fff",

  modalBg: "#202528",
  textBg: "#141416",
  iconBg: "#2a3138",
  tagBg: "#2a3138",

  text: "#edf2f9",
  inputBorder: "#343b44",

  btnBg: "#edf2f9",
  btnText: "#202528",
};
