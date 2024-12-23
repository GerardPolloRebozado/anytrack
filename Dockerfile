FROM --platform=$BUILDPLATFORM node:22-alpine
WORKDIR /app

COPY package.json package-lock.json nx.json tsconfig.base.json .eslintignore .eslintrc.json .prettierrc ./
COPY prisma/schema.prisma prisma/schema.prisma
COPY libs/ libs/
COPY apps/ apps/
COPY components.json ./
COPY migrations.json ./
COPY nx.json ./
COPY tsconfig.json ./
COPY tsconfig.base.json ./

RUN apt-get update -y && apt-get install -y openssl
RUN npm i
RUN npx prisma generate
RUN npm run build

RUN mkdir docker
COPY docker/entrypoint.sh ./docker/entrypoint.sh
RUN chmod +x ./docker/entrypoint.sh

EXPOSE 4444

CMD ["./docker/entrypoint.sh"]
