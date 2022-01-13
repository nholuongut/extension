if [[ $(git log --format=%B -n 1) == "chore: release"* ]]; then
  NODE_ENV=proding FACET=dismoi yarn run upload:chromium
else
  echo "Not a version commit, skipping …"
fi
