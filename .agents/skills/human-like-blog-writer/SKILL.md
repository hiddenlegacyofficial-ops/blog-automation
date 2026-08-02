---
name: human-like-blog-writer
description: End-to-end automated long-form blog publishing pipeline. Generates 2,000+ word human-like AI articles, custom featured SVG banner images, data charts, metadata, and handles GitHub commit and Cloudflare deployment.
---

# Automated Long-Form Blog Publishing Skill

Use this skill whenever generating, building, and deploying blog posts for **Syntexic** (`syntexic.com`). All future blog posts MUST strictly follow this exact long-form format and visual asset structure.

---

## 📐 Mandatory Blog Standard & Requirements

Every single published blog post MUST satisfy the following rules:

1. **Word Count**: **1,500 - 2,500+ words** long-form deep dive content (no short or thin articles).
2. **Featured Hero Banner SVG**: Always generate a 16:9 custom gradient vector hero banner image at `public/images/<slug>-banner.svg` and embed it at the very top of the article:
   ```markdown
   ![<Title> Hero Banner](/images/<slug>-banner.svg)
   ```
3. **Inline Performance Chart SVG**: Always generate an inline visual bar chart or graph SVG image at `public/images/<slug>-chart.svg` and embed it in the benchmark section:
   ```markdown
   ![<Title> Data Chart](/images/<slug>-chart.svg)
   ```
4. **Mermaid Flowchart Diagrams**: Include at least 1 interactive `mermaid` workflow diagram in the architecture section.
5. **Data Comparison Matrix**: Include at least 1 benchmark data table with metrics (Latency, TTFT, Cost/1M Tokens, Accuracy).
6. **Hinglish Conversational Tone**: Write in an authentic, anti-AI pattern conversational tone (no corporate fluff words like *"In today's fast-paced world"*).
7. **Production Code Blueprint**: Include a full TypeScript/Node.js implementation code block with comments and token tracking.
8. **FAQ & Checklist Section**: Include structured developer Q&A and a summary deployment checklist.

---

## 🔄 9-Step Publishing Pipeline Architecture

```
Keyword Input
      ↓
OpenAI Long-Form Article (2,000+ words)
      ↓
Featured Hero SVG Banner (/images/<slug>-banner.svg)
      ↓
Inline Data Chart SVG (/images/<slug>-chart.svg)
      ↓
SEO Title Optimization
      ↓
Meta Description & Canonical Tag Creation
      ↓
URL Slug Generation
      ↓
GitHub Commit & Push Sync
      ↓
Cloudflare Pages Auto-Deploy
      ↓
Live Verification (syntexic.com/blog/<slug>)
```

---

## Pipeline Execution Details

### 1. Keyword Input
* Select target keyword (e.g. `DeepSeek-R1 vs o3-mini benchmarks`).

### 2. Article Generation (2,000+ Words)
* Write 8 detailed sections: Introduction, Architecture, Benchmarks, Visual Chart Analysis, Selection Guide, Code Implementation, Warnings/Pitfalls, FAQ, and Summary Checklist.

### 3. Hero & Inline Image Asset Generation
* Create `public/images/<slug>-banner.svg` and `public/images/<slug>-chart.svg` with high-contrast gradient cards.

### 4. SEO & Metadata
* Optimize title (50-60 chars) and meta description (140-155 chars).

### 5. Build & Cloudflare Deployment
* Execute `npm run build` static compilation.
* Deploy via `npx wrangler pages deploy dist --project-name syntexic --branch main`.
