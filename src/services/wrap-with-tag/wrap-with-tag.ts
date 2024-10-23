type Params = {
  tagName: string;
  attributes?: Record<string, unknown>;
  content: string;
};

export const wrapWithTag = ({ tagName, content, attributes }: Params) => {
  const attributesString = attributes
    ? Object.entries(attributes)
        .map(([key, value]) => {
          if (typeof value === "boolean") {
            return value ? key : "";
          }
          return `${key}="${String(value)}"`;
        })
        .filter(Boolean)
        .join(" ")
    : "";

  const openTag = attributesString ? tagName + " " + attributesString : tagName;
  return `<${openTag}>${content}</${tagName}>`;
};
