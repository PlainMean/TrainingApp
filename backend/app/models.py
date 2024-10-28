from sqlmodel import Field, SQLModel


# Define the SQLModel
class ExerciseSet(SQLModel, table=True):
    id: int = Field(default=None, primary_key=True)
    time: str
    name: str
    weight: float
    set: int
    reps: int