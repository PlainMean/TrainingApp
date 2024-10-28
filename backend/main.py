from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlmodel import Session, SQLModel

from connector import get_engine
from models import ExerciseSet

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:3000"],  # Allow your front-end origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


engine = get_engine()

# Create the database and tables
SQLModel.metadata.create_all(engine)

@app.post("/exercise_set/")
async def create_item(exercise_set: ExerciseSet):
    with Session(engine) as session:
        session.add(exercise_set)
        session.commit()
        session.refresh(exercise_set)
    return exercise_set
