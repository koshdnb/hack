import Cookies from "@iq/lib/cookies";

export const COOKIE_LANG = 'NEXT_LOCALE';
export const NOT_DEFINED_LANG = 'default';
export const DEFAULT_LANG = 'en';

export const LOCALES_MAP = {
  ar: 'ar-AE',
  bn: 'bn-BD',
  cn: 'zh-CN',
  de: 'de-DE',
  en: 'en-US',
  es: 'es-ES',
  fr: 'fr-FR',
  hi: 'hi-IN',
  hl: 'en-US',
  id: 'id-ID',
  it: 'it-IT',
  ko: 'ko-KR',
  pt: 'pt-PT',
  se: 'se-SE',
  th: 'th-TH',
  tr: 'tr-TR',
  vi: 'vi-VN',
};

export const isLangDefined = (lang) => lang !== NOT_DEFINED_LANG;

export const currentLang = () => Cookies.get(COOKIE_LANG);

export const getLocalizedDate = (date) => {
  if (!date) {
    return null;
  }

  const hasDay = date.split(' ').length === 3;
  if (!hasDay) {
    date = `01 ${date}`;
  }

  const inputDate = new Date(date);
  const locale = LOCALES_MAP[currentLang()];

  const options = hasDay
    ? { year: 'numeric', month: 'short', day: '2-digit' }
    : { year: 'numeric', month: 'short' };

  const formattedDate = inputDate.toLocaleDateString(locale, options);

  return formattedDate;
};

