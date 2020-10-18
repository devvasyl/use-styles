import {
  CLASS_PREFIX,
  NAMESPACE_PREFIX,
  CONSTANTS_PREFIX,
  COMPTUED_PREFIX,
  NAMESPACE_REGEX
} from "../constants";
import { separator } from "../core/transformer";

export const isNamespace = style => style.startsWith(NAMESPACE_PREFIX);

export const getKeyFromNamespace = style => style.replace(NAMESPACE_REGEX, "");

export const getKey = style => style.substring(1);

export const getNamespace = style =>
  style.match(NAMESPACE_REGEX)[0].substring(1);

export const hasPath = style => style.indexOf(separator) !== -1;

export const hasClassName = style => style.indexOf(CLASS_PREFIX) !== -1;

export const hasConstant = style => style.indexOf(CONSTANTS_PREFIX) !== -1;

export const hasComputed = style => style.indexOf(COMPTUED_PREFIX) !== -1;

export const getPathFromLiteralTag = (strings, expressions) =>
  strings.reduce(
    (result, currentString, i) =>
      `${result}${currentString}${expressions[i] ? expressions[i] : ""}`,
    ""
  );
