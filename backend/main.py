import logging
from typing import Union
from fastapi import FastAPI

app = FastAPI()


logger = logging.getLogger("uvicorn")
handler = logging.StreamHandler()
formatter = logging.Formatter("%(asctime)s - %(name)s - %(levelname)s - %(message)s")


for handler in logger.handlers:
    handler.setFormatter(formatter)


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
