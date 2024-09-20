echo "Runing database migrations"
npx prisma migrate deploy
echo "Starting the app"
npx npm-run-all --parallel start:web start:api
