BOT_TOKEN := 'PASS_TOKEN_HERE'
build:
	docker build -t tg-bot-ws .
run:
	docker run -d --name tg-ws tg-bot-ws
run-t:
	docker run -d --name tg-ws -e TOKEN=${BOT_TOKEN} tg-bot-ws