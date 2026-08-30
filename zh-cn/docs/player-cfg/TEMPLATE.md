# 播放器配置文档模板

> 播放器简介[^1]

## 适配说明

**无需配置**。该播放器原生支持系统媒体协议（SMTC），直接播放即可使用。（可选）

### 基础设置（可选）

### 精准匹配（可选）

### 专项优化（可选）

### 已知限制（可选）

> [!WARNING]
> **免责声明**（可选）
>
> ...

[^1]: [播放器简介引用源](https://the.source/that.you.cite.from)

---

### 如何在侧边栏显示该文档：

打开根目录下的 `sidebar.json` 文件，并参考下述示例将其添加到对应的分组中：

```json
{
  "group": "播放器配置",
  "items": [
    // ... 其他播放器
    {
      "title": "你的播放器名称",
      "path": "docs/zh-cn/player-cfg/your-player-file.md",
      "badge": {
        "text": "Config",
        "variant": "note"
      }
    }
  ]
}
```

*提示：`badge` 属性为可选。通常配置类提醒使用 `"variant": "note"`，限制类提醒使用 `"variant": "caution"`。*