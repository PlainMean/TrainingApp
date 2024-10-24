import sqlite3

import polars as pl

# Create your connection.
cnx = sqlite3.connect('exercise_sets.db')

df = pl.read_database("SELECT * FROM exerciseset", cnx)
print(df)
