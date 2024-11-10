FROM --platform=$BUILDPLATFORM node:20-slim AS builder

WORKDIR /workspace

COPY package.json package-lock.json nx.json tsconfig.base.json ./
COPY prisma/schema.prisma prisma/schema.prisma

RUN apt-get update -y && apt-get install -y openssl
RUN npm ci

COPY libs/ libs/
COPY apps/ apps/
COPY .eslintignore ./
COPY .eslintrc.json ./
COPY .prettierrc ./
COPY components.json ./
COPY migrations.json ./
COPY nx.json ./
COPY tsconfig.json ./
COPY tsconfig.base.json ./

RUN npx nx run-many --target=build --all --configuration=production --verbose

FROM node:20-slim

ENV NODE_ENV=production

WORKDIR /app

COPY --from=builder /workspace/dist /app/dist
COPY --from=builder /workspace/package.json /app/package.json
COPY --from=builder /workspace/prisma /app/prisma

RUN apt-get update -y && apt-get install -y openssl
RUN npm ci

COPY ./docker/entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

EXPOSE 4444

USER node
CMD ["/app/entrypoint.sh"]
