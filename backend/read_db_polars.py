import polars as pl

from connector import get_conn

conn = get_conn()

df = pl.read_database("SELECT * FROM exerciseset", conn)
print(df)
