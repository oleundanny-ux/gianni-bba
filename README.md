# GIANNI Portal

## Deploy na Render (besplatno)

1. Idi na [render.com](https://render.com)
2. Sign up with GitHub
3. New Web Service
4. Connect `gianni-ba` repo
5. Settings:
   - **Runtime**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
6. Add Environment Variables (sve iz .env.example)
7. Click Create Web Service

## Deploy na Railway (ako imaš credits)

1. Connect GitHub repo
2. Railway auto-detects Node.js
3. Add Environment Variables
4. Deploy

## Environment Variables

```
DISCORD_CLIENT_ID=
DISCORD_CLIENT_SECRET=
DISCORD_BOT_TOKEN=
DISCORD_GUILD_ID=
BASE_URL=
SESSION_SECRET=
ADMIN_IDS=
```
