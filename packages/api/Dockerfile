FROM node:16-slim AS build

ENV MAIN=/docker/build
RUN mkdir -p ${MAIN}
RUN chown -R node:node ${MAIN}
USER node
WORKDIR ${MAIN}

COPY package-lock.json ${MAIN}/package-lock.json
COPY package.json ${MAIN}/package.json
COPY src ${MAIN}/src
COPY .env.template ${MAIN}/.env
COPY tsconfig.json ${MAIN}/tsconfig.json

RUN npm i && npm run build

FROM node:16-slim

ENV MAIN=/docker/api
RUN mkdir -p ${MAIN}
RUN chown -R node:node ${MAIN}
USER node
WORKDIR ${MAIN}

COPY --from=build /docker/build/package-lock.json ${MAIN}/package-lock.json
COPY --from=build /docker/build/package.json ${MAIN}/package.json
COPY --from=build /docker/build/dist ${MAIN}/dist
COPY --from=build /docker/build/.env ${MAIN}/.env

RUN npm i --production

EXPOSE 3000
CMD npm start
