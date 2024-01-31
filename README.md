# 🔎 BUN Scraping

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Quick Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### API call

1. **Google Developer Profile**

```bash
/api/gg-badges
```

Properties

Param | Value
------|------------------------------------------------------
url   | Example: https://developers.google.com/profile/u/bunhere

2. **Microsoft Badges, Trophies**

```bash
/api/microsoft-badges
```

Properties

Param | Value
------|------------------------------------------------------
url   | Example: https://learn.microsoft.com/en-us/users/emmango-1181
type  | `all` or `trophy` or `badge`

*Note*: `type` upcoming soon...

3. **Credly Certificates**

```bash
/api/creadly
```

Properties

Param | Value
------|------------------------------------------------------
url   | Example: https://www.credly.com/users/emma-ngo/badges

### Docs

**Bun Scraping API Document**: [bun-scraping-api/api](https://docs.bunhere.com/bun-scraping-api/api)

## Reference

Docs: [crawlee.dev](https://crawlee.dev/)

## License

[MIT License](https://github.com/loanngo99/bun-scraping?tab=MIT-1-ov-file). Copyright (c) 2024 Emma Ngo
