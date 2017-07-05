# tricksters.io

Site and blog of tricksters team.

## Installation

1.  Install [node](https://nodejs.org/en/) and [yarn](https://yarnpkg.com/en/).

2.  Clone repo

    ```bash
    git clone https://github.com/trickstersio/tricksters.io.git && cd tricksters.io
    ```

3.  Install dependencies

    ```bash
    yarn install --production
    ```

4.  Start local copy in `production` mode

    ```bash
    yarn start
    ```

    Application uses port 3000 by default. To use another port, you can run `yarn start -- -p <your port here>`.

    Now application is ready on [`http://localhost:3000`](http://localhost:3000).

## Development

1.  Install all dependencies with `yarn install`.

2.  Run dev server with `yarn dev` or `yarn dev -- -p <your port here>`.

    Now application is ready on [`http://localhost:3000`](http://localhost:3000).

## Docker

```
docker build -t trickstersio/trickstersio .
docker run -d --rm --publish 7777:3000 --name trickstersio trickstersio/trickstersio
```
