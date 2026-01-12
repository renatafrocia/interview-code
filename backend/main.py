from fastapi import FastAPI    
from tinydb import TinyDB, Query
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

origins = [
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:5173",
]

app = FastAPI() 

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


db = TinyDB('db.json')
product_table = db.table('products')

class Product(BaseModel):
    name: str

@app.get('/products')
def get_product():
    ProductQuery = product_table.search(Query().products.all)
    if ProductQuery:
        return ProductQuery
    else:
        return {'message': 'Product not found'}
        