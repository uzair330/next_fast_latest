from fastapi import FastAPI

app = FastAPI()


@app.get("/api/python")
def hello_world():
    return {"message": "My name is Muhammad UZair"}
