# Telegram bot which works with express-ws

# Usage

## The easiest way to use it is to provide `TOKEN` to `.env`

### And run `yarn docker:up` or `npm docker:up`

> ✨

#### If you use Docker from CLI, pass `BOT_API_TOKEN` to `.env` file

> ✨

#### If you use Makefile with Docker pass `BOT_API_TOKEN` to Makefile `BOT_TOKEN` variable

> ✨

##### Others:

-   `git clone` this repo
-   _run_ with Docker `docker build -t $name$ .` then `docker run`
-   _run_ with Makefile `make build` then `make run`
-   You can also use `make run-t` if `BOT_TOKEN` was provided

## Goal

#### The main idea of this app is _to send a message to the bot and print it to the browser_

##### Also with an opportunity to catch messages on the server
