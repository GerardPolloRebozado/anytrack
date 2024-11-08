FROM --platform=$BUILDPLATFORM node:20-alpine AS builder

WORKDIR /usr/src/app
RUN --mount=type=bind,source=package.json,target=package.json \
  --mount=type=bind,source=package-lock.json,target=package-lock.json \
  --mount=type=cache,target=/root/.npm \
  npm ci --dev

COPY . .

EXPOSE 4444
RUN chmod +x ./docker/entrypoint.sh
RUN npx prisma generate
RUN npx nx build api
RUN npx nx build web

CMD ["./docker/entrypoint.sh"]
