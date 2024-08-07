FROM --platform=$BUILDPLATFORM node:20-alpine AS builder

WORKDIR /usr/src/app
RUN --mount=type=bind,source=package.json,target=package.json \
  --mount=type=bind,source=package-lock.json,target=package-lock.json \
  --mount=type=cache,target=/root/.npm \
  npm ci --dev

COPY . .

EXPOSE 4444

RUN npx prisma generate --schema ./apps/api/prisma/schema.prisma
RUN npx nx run api:build
RUN npx nx run web:build

CMD ./docker/entrypoint.sh
