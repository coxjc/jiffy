# Jifhub
## A Firefox extension for copying Markdown-formatted GIF links so that you can embed GIFs in Github comments, PRs, etc.

## Demo
[![Demo CountPages alpha](https://cdn.loom.com/sessions/thumbnails/a15e3c7462b5433cabf66998846d8d7c-with-play.gif)](https://www.loom.com/share/a15e3c7462b5433cabf66998846d8d7c)


### Prerequisites
- [Get an **SDK** key from Giphy](https://developers.giphy.com/)
    - Set the SDK key to environment variable `REACT_APP_GIPHY_SDK_KEY`
- `yarn install`

### Scripts
- `yarn run dev`: Live reload running of React app & starts a Firefox Developer Edition instance with the extension installed
- `yarn run build-ext`: 
    1. Builds the React app
    2. Uses `web-ext` to build a web extension from the resulting React build
    3. Outputs extension build (ZIP file) in root project directory