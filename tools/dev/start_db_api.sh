# Set Environment Variables
export DATABASE_HOST=localhost

# Start Database Container
sudo docker start mongodb

# Start API
cd ../../api/inventory/
python api.py