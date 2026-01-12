from fastapi.testclient import TestClient

from .main import app

client = TestClient(app)


def test_read_main():
    response = client.get("/products")
    assert response.status_code == 200
    assert response.json() == [{"name": "Product 1"}, {"name": "Product 2"}, {"name": "Product 45"}]