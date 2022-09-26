FROM node:lts-alpine AS base
WORKDIR /app

RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod --frozen-lockfile

FROM base AS runtime
WORKDIR /app

COPY dist/packages/nightshift ./dist

EXPOSE 28001
CMD ["node", "dist/main.js"]
