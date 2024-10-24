from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlmodel import Field, Session, SQLModel, create_engine

from models import ExerciseSet

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:3000"],  # Allow your front-end origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Create the SQLite database and table
DATABASE_URL = "sqlite:///exercise_sets.db"
engine = create_engine(DATABASE_URL)

# Create the database and tables
SQLModel.metadata.create_all(engine)

@app.post("/exercise_set/")
async def create_item(exercise_set: ExerciseSet):
    with Session(engine) as session:
        session.add(exercise_set)
        session.commit()
        session.refresh(exercise_set)
    return exercise_set
