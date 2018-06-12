# ID=2 sh curl-scripts/sign-out.sh
#!/bin/bash

curl "https://aqueous-atoll-85096.herokuapp.com/sign-out/${USER}" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"

echo
