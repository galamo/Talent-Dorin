from node:14-alpine
USER root
RUN node -v
RUN echo ls
RUN touch app.js
RUN ls
COPY index.js index_test.js

CMD ["tail", "-f" , "/dev/null"]


