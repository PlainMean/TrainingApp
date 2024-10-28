import requests

url = "http://127.0.0.1:8000/exercise_set/"
data = {
    "time": "2024-10-03",  # Current date in ISO format
    "name": "Bench Press",
    "weight": 75.0,  # weight in kilograms
    "set": 3,
    "reps": 10
}

response = requests.post(url, json=data)
print(response.json())
