from sqlmodel import Field, Session, create_engine, select

from models import ExerciseSet

DATABASE_URL = "sqlite:///exercise_sets.db"
engine = create_engine(DATABASE_URL)

def print_database_contents():
    with Session(engine) as session:
        statement = select(ExerciseSet)
        results = session.exec(statement).all()

        for exercise_set in results:
            print(f"ID: {exercise_set.id}, Time: {exercise_set.time}, Name: {exercise_set.name}, "
                f"Weight: {exercise_set.weight}, Set: {exercise_set.set}, Reps: {exercise_set.reps}")


print_database_contents()
