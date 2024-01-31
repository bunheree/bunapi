# Welcome to bunapi 👋

<p>
<a href="#"><img src="https://img.shields.io/badge/BunAPI-v1.0.0-orange?logo=dependabot" alt="Build Status"></a>
<a href="https://github.com/loanngo99/bunapi/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue" alt="License"></a>
</p>

## 🔎 BUN Scraping

<a href="#"><img src="https://img.shields.io/badge/BUN Scraping-v1.0.0-pink?logo=FastAPI" alt="Build Status"></a>

### API call

1. **Google Developer Profile**

```bash
{APIEndpoint}/api/gg-badges?userid={username}
```

Properties

*Example*: https://developers.google.com/profile/u/bunhere

Param | Value
------|---------
userid| String

2. **Microsoft Badges, Trophies**

```bash
{APIEndpoint}/api/microsoft-badges?userid={username}
```

Properties

*Example*: https://learn.microsoft.com/en-us/users/emmango-1181

Param | Value
------|------------------------------
userid| String
type  | `all` or `trophy` or `badge`

*Note*: `type` upcoming soon...

3. **Credly Certificates**

```bash
{APIEndpoint}/api/credly?userid={username}
```

Properties

*Example*: https://www.credly.com/users/emma-ngo/badges

Param | Value
------|---------
userid| String

### Docs

**Bun Scraping API Document**: [bun-scraping-api/api](https://docs.bunhere.com/bun-scraping-api/api)

## Reference

Docs: [crawlee.dev](https://crawlee.dev/)

## License

[MIT License](https://github.com/loanngo99/bunapi?tab=MIT-1-ov-file). Copyright (c) 2024 Emma Ngo
