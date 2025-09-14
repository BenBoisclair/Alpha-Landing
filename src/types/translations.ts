export interface NavTranslations {
  blog: string;
  contact: string;
}

export interface ContactFormTranslations {
  name: string;
  email: string;
  message: string;
  send: string;
  sending: string;
  success: string;
  error: string;
  required: string;
  invalidEmail: string;
}

export interface ContactInfoTranslations {
  title: string;
  line: string;
  email: string;
}

export interface ContactTranslations {
  title: string;
  subtitle: string;
  form: ContactFormTranslations;
  info: ContactInfoTranslations;
}

export interface Translations {
  nav: NavTranslations;
  contact: ContactTranslations;
}

export type SupportedLocale = 'en' | 'th';