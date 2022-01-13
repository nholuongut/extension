if [[ $(git log --format=%B -n 1) == "chore: release"* ]]; then
  yarn install --frozen-lockfile --production=false
  NODE_ENV=production FACET=dismoi yarn run build:chromium
  NODE_ENV=production FACET=dismoi yarn run upload:chromium
else
  echo "Not a version commit, skipping …"
fi
