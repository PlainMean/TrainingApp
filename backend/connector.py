import os

import psycopg2
from dotenv import load_dotenv
from sqlmodel import create_engine

load_dotenv(".env")
DATABASE_URL = os.getenv("PSQL_URL")

def get_engine():
    return create_engine(DATABASE_URL)

def get_conn():
    load_dotenv(".env")
    return psycopg2.connect(DATABASE_URL)