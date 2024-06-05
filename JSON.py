import json
import psycopg2

# Load JSON data
with open('data.json') as f:
    data = json.load(f)

# Connect to PostgreSQL
conn = psycopg2.connect(
    dbname="mydatabase",
    user="yourusername",
    password="yourpassword",
    host="localhost"
)
cur = conn.cursor()

# Insert data into PostgreSQL
for item in data:
    cur.execute("""
        INSERT INTO users (id, name, age, city)
        VALUES (%s, %s, %s, %s)
    """, (item['id'], item['name'], item['age'], item['city']))

conn.commit()
cur.close()
conn.close()
