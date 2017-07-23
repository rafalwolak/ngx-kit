import { KitThemeColor } from '../core/meta/theme';
export interface KitDefaultThemeParams {
  border: {
    width: number;
    radius: {
      s: number;
      m: number;
      l: number;
    };
  };
  colorMod: {
    type: 'shade' | 'tint' | 'lighten' | 'darken';
    ratio: number;
  }
  colors: KitThemeColor[];
  grid: {
    v: number;
    h: number;
  };
  shadows: {
    element: string;
    deep: string;
    overlay: string;
  };
  transitions: {
    default: string;
  };
  typo: {
    bodyFontSize: string;
    primaryFontSize: string;
    secondaryFontSize: string;
    headers: {
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
    };
  };
  modules: {
    autoComplete: {
      resultsColor: string;
    },
    badge: {
      defaultColor: string;
    }
    buttons: {
      defaultColor: string,
      disabledColor: string,
    },
    checkbox: {
      color: string;
      checkedColor: string;
    },
    datePicker: {
      color: string;
    },
    dropdownMenu: {
      menuColor: string;
    },
    form: {
      errorColor: string;
    },
    input: {
      color: string;
      focusColor: string;
    },
    menu: {
      color: string;
    },
    radio: {
      color: string;
      checkedColor: string;
    },
    select: {
      color: string;
    },
    textarea: {
      color: string;
      focusColor: string;
    },
    toggle: {
      color: string;
      checkedColor: string;
    },
  },
}

export interface KitDefaultThemeColor {
  color: string;
  text: string;
}
