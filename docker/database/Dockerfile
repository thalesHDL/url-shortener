FROM postgres
ENV POSTGRES_USER thales
ENV POSTGRES_PASSWORD password
ENV POSTGRES_DB DB_URL_SHORTENER
COPY init.sql /docker-entrypoint-initdb.d/
