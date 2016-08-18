DROP TABLE IF EXISTS surveydata;

DROP DATABASE IF EXISTS programmerdata;

CREATE DATABASE programmerdata;

DROP ROLE IF EXISTS htmlint;

CREATE ROLE htmlint WITH LOGIN PASSWORD 't';

ALTER DATABASE programmerdata OWNER TO htmlint;

\c programmerdata;

