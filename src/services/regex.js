const regex_validate = {
  email: (value) =>
    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value) ? null : "Email inválido!",
  name: (value) =>
    value.length >= 3 && value.length <= 50 ? null : "Tamanho inválido [3..50]",
  keywords: (value) =>
    value.length >= 1 && value.length <= 20
      ? null
      : "Quantidade de palávras [1..20]",
};

export default regex_validate;
