# MyApp 项目指南

## 项目概述
这是一个 react学习项目，使用以下技术栈：
- 前端：React 18 + Js + Tailwind CSS + antd
- 构建工具：Vite
- 包管理器：pnpm

## 常用命令
- 启动开发服务器：`pnpm dev`
- 构建生产版本：`pnpm build`


## 代码风格
- 使用函数式组件和 React Hooks
- 样式使用 Tailwind CSS，不使用 CSS Modules
- 文件命名使用 kebab-case，组件命名使用 PascalCase
- 导出组件使用 named export，不使用 default export
- 基础组件使用 antd


## 安全注意事项
- 绝不在代码中硬编码 API 密钥或密码
- 不要直接修改 `prisma/migrations/` 下的已有文件
- 认证和权限相关的修改必须运行完整测试套件
- 没有特别说明，不要修改代码中的任何中文字符，包括注释