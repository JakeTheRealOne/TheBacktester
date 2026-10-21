curl -X 'POST' \
  -H 'Content-Type: application/json' \
  -d '{"strategy": "Class BuyAndHold(Strategy): ...", "backtestSettings": {"stock":"NVDA"}}' \
  --url 'http://localhost:8080/api/v1/submit'

curl 'http://localhost:8080/api/v1/helloworld'