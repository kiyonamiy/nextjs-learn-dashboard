## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

## 笔记

### Chapter 5 Navigating Between Pages

- 使用 'next/link' 替换 a，做页面跳转（不触发刷新）；
- 高亮选中 Tab：使用 `const pathname = usePathname()` 和 `pathname === link.href`；
- 只要使用 hooks 地方，就要将其转换为 Client Component（"use client"）；
