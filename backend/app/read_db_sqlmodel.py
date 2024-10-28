from sqlmodel import Session, select

from connector import get_engine
from models import ExerciseSet


def print_database_contents():
    engine = get_engine()
    with Session(engine) as session:
        statement = select(ExerciseSet)
        results = session.exec(statement).all()

        for exercise_set in results:
            print(f"ID: {exercise_set.id}, Time: {exercise_set.time}, Name: {exercise_set.name}, "
                f"Weight: {exercise_set.weight}, Set: {exercise_set.set}, Reps: {exercise_set.reps}")


print_database_contents()
