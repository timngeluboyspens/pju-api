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

# set docker env
ENV ADMIN_EMAIL=admin@gmail.com
ENV ADMIN_PASSWORD=adminMSIB
ENV API_SECRET_KEY=0123456789KHTIOP0123456789abcdef0123456789abcdef0123456789HJKOYV
ENV CORS_ORIGIN=http://localhost:3000,http://localhost:5000,https://pju-monitoring-web-pens.vercel.app,https://pju-monitoring-web-pens-production.up.railway.app
ENV DATABASE_URL=postgresql://postgres:kRKQpGkBBmJlYtxuUkPcKKFuWNxAUGWJ@junction.proxy.rlwy.net:33051/railway
ENV SECRET_KEY=tVBfsPby6j2uBCsQMJ7G2piJ6r9GW7ln

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
