import os

import psycopg2
from dotenv import load_dotenv
from sqlmodel import create_engine

load_dotenv(".env", override=True)
DATABASE_URL = os.getenv("DATABASE_URL")

def get_engine():
    return create_engine(DATABASE_URL)

def get_conn():
    return psycopg2.connect(DATABASE_URL)