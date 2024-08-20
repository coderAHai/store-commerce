export const useMenu = defineStore('menu', () => {
  const show = ref(false);
  const lang = ref('English');
  const currency = ref('USD');
  const footerShow = ref(true);

  const handleChangeShow = (value: boolean) => {
    show.value = value;
  };

  const handleChangeCurrency = (value: string) => {
    currency.value = value;
  };

  const handleChangeLang = (value: string) => {
    lang.value = value;
  };

  const handleChangeFooter = (value: boolean) => {
    footerShow.value = value;
  };

  return {
    show,
    lang,
    currency,
    footerShow,
    handleChangeFooter,
    handleChangeShow,
    handleChangeCurrency,
    handleChangeLang
  };
});
