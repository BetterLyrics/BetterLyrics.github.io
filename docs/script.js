window.$docsify = {
  name: "BetterLyrics",
  loadSidebar: true, // 加载 _sidebar.md
  alias: {
    "/.*/_sidebar.md": "/_sidebar.md",
  },
  search: {
    maxAge: 86400000, // 过期时间，单位毫秒，默认一天
    paths: [], // or 'auto'
    placeholder: "Type to search",

    // 支持本地化
    placeholder: {
      "/zh-Hans/": "搜索",
      "/": "Type to search",
    },

    // 支持本地化
    noData: {
      "/zh-Hans/": "找不到结果",
      "/": "No Results",
    },

    // 搜索标题的最大程级, 1 - 6
    depth: 2,
  },
}; // <--- 这里的 JS 文件结尾，分号加不加都行，但语法一定要对
