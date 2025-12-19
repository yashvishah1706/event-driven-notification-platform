#!/usr/bin/env bash
#!/usr/bin/env bash
set -e
echo "Bootstrap complete (docker skipped)."

until docker info >/dev/null 2>&1; do
  sleep 2
done

echo "Starting local dependencies..."
docker compose -f docker/docker-compose.yml up -d || true

echo "Bootstrap completed."
