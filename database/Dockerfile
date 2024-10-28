# Use the official PostgreSQL image
FROM postgres:latest

# Set default database and user
ENV POSTGRES_USER useradmin
ENV POSTGRES_PASSWORD kampdrag5
ENV POSTGRES_DB trainingdb

# Copy initialization script
# COPY init-user-db.sql /docker-entrypoint-initdb.d/

# Expose port
EXPOSE 5432
