# Meals To Go - Simplified

Reimplementing code from a course I took on React Native with a few
changes that fit more with my development style.

**NOTE:** I chose to get rid of `styled-components` for two reasons

1. As of this writing they do not play well with React@18 + TypeScript
2. I do not see the value add of semantically magic-ing away the underlying
   components vs having a standard stylesheet with good semantic style names to
   lend the underlying elements meaning

## Goals:

- TypeScript all of the things
- Static analysis and style enforcement with ESLint and Prettier
- Organize components with barrels

## **TODO:**

- Quite a few magic strings floating around, especially in navigation
