# Meals To Go - Simplified

Reimplementing code from a two year old course I took on React Native with a few
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

## Instructions

To enable the [Firebase](https://firebase.google.com) functionality you
will need to configure your own Firebase project with authentication. Then
copy the sample dotenv config: 

```shell
cp .env.sample .env
```

and add your own configuration values from
your Firebase console:

```dotenv
FBASE_APIKEY=SomEREALl-yLonGSTringOfRANDOch4rs
FBASE_AUTHDOMAIN=your-project-name.firebaseapp.com
FBASE_PROJECTID=your-project-name
FBASE_STORAGEBUCKET=your-project-name.appspot.com
FBASE_MESSAGINGSENDERID=NUMGOESHERE
FBASE_APPID=1:NOTHERNUM:web:gu1dyguudn3ss
```
