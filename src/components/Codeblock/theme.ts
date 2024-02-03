// theme reverse from https://rauno.me/
export const theme = {
  plain: {
    color: "var(--code-fg)",
    background: "var(--code-bg)",
    fontFamily: "var(--fonts-mono)",
    fontSize: 13,
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: {
        color: "var(--colors-gray10)",
      },
    },
    {
      types: ["namespace"],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ["string", "attr-value", "string-property"],
      style: {
        color: "var(--code-string)",
      },
    },
    {
      types: ["operator", "constant", "script"],
      style: {
        color: "var(--colors-highContrast)",
      },
    },
    {
      types: [
        "entity",
        "url",
        "symbol",
        "number",
        "boolean",
        "regex",
        "inserted",
        "unit",
        "function",
        "tag",
        "class",
        "class-name",
        "builtin",
        "maybe-class-name",
      ],
      style: {
        color: "var(--code-tag)",
      },
    },
    {
      types: ["keyword", "attr-name", "selector"],
      style: {
        color: "var(--colors-blue9)",
      },
    },
    {
      types: ["function-variable"],
      style: {
        color: "#6f42c1",
      },
    },
    {
      types: ["selector", "keyword", "attr-name", "punctuation", "rule"],
      style: {
        color: "var(--code-keyword)",
      },
    },
  ],
};

export const theme2 = {
  plain: {
    color: "#100F0F",
    backgroundColor: "#FFFCF0",
    fontSize: "13px",
  },
  styles: [
    {
      types: ["comment"],
      style: {
        color: "#6F6E69",
      },
    },
    {
      types: ["builtin"],
      style: {
        color: "rgb(0, 112, 193)",
      },
    },
    {
      types: ["number", "variable", "inserted"],
      style: {
        color: "#BC5215",
      },
    },
    {
      types: ["operator"],
      style: {
        color: "#100F0F",
      },
    },
    {
      types: ["constant", "char"],
      style: {
        color: "rgb(129, 31, 63)",
      },
    },
    {
      types: ["tag"],
      style: {
        color: "#6F6E69",
      },
    },
    {
      types: ["attr-name"],
      style: {
        color: "#AD8301",
      },
    },
    {
      types: ["deleted", "string"],
      style: {
        color: "#AF3029",
      },
    },
    {
      types: ["changed", "punctuation"],
      style: {
        color: "#6F6E69",
      },
    },
    {
      types: ["function", "keyword"],
      style: {
        color: "#66800B",
      },
    },
    {
      types: ["class-name"],
      style: {
        color: "#BC5215",
      },
    },
  ],
};
