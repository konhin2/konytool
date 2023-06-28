import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import common from "../public/locales/en/common.json"
import dashboard from "../public/locales/en/dashboard.json"
import { I18nNamespaces } from "./types/i18next"

i18n.use(initReactI18next).init({
	lng: "en",
	fallbackLng: "en",
	resources: {
		en: {
			translation: {
				common: common as I18nNamespaces["common"],
				dashboard: dashboard as I18nNamespaces["dashboard"]
			}
		}
	}
})

export default i18n
