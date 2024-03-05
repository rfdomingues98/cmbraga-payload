module.exports = {
  root: true,
  extends: ["plugin:@next/next/recommended", "@payloadcms"],
  ignorePatterns: ["**/payload-types.ts"],
  plugins: ["prettier"],
  rules: {
    "react/jsx-uses-react": 1,
    "react/react-in-jsx-scope": 1,
  },
}
