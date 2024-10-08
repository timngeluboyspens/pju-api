# Menggunakan image node sebagai base image
FROM node:20.10-alpine

# Tentukan working directory di dalam container
WORKDIR /usr/src/app

# Salin semua file ke dalam container
COPY . .

# Install dependencies
RUN npm install

# Build aplikasi
RUN npm run build

# Prisma migrate
# COPY .env ./prisma/
# RUN npx prisma generate
# RUN npx prisma migrate reset
# RUN npx prisma migrate deploy

# Run Seed: node prisma/seed.js
# RUN node prisma/seed.js

# Ekspos port aplikasi
EXPOSE 5000

# Jalankan aplikasi
# CMD ["node", "./dist/final.js"]
CMD ["node", "./app.js"]
# RUN npm run start
