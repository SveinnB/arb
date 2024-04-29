// vuetify.config.ts
import type { ExternalVuetifyOptions } from "vuetify-nuxt-module";
import type { ThemeDefinition } from "vuetify";

const light: ThemeDefinition = {
  dark: false,
  colors: {
    "primary": "#f66f2d",
    "secondary": "#0b5e9f",
    "info": "#78909C",
    "success": "#558B2F",
    "warning": "#F57C00",
    "error": "#F70303",
    "surface": "#FFFFFF",
    "background": "#FFFFFF",
    // on colors
    "on-primary": "#FFFFFF",
    "on-secondary": "#FFFFFF",
    "on-info": "#FFFFFF",
    "on-success": "#FFFFFF",
    "on-warning": "#FFFFFF",
    "on-error": "#FFFFFF",
    "on-surface": "#000000",
    "on-background": "#000000",
  },
};

export default {
  config: true,
  directives: true,
  theme: {
    defaultTheme: "light",
    themes: {
      light,
    },
  },
} satisfies ExternalVuetifyOptions;
