# 设置 GitHub 仓库和 GitHub Pages 的详细步骤

## 1. 创建 GitHub 仓库

1. 登录到你的 GitHub 账户
2. 点击 "New repository" 按钮
3. 输入仓库名称（例如：ai-os-portfolio 或你的用户名.github.io）
4. 选择 "Public"（如果你想免费使用 GitHub Pages）
5. 不要勾选 "Initialize this repository with a README"
6. 不要添加 .gitignore 或 license（我们已经有了）
7. 点击 "Create repository"

## 2. 连接到远程仓库

在你的本地项目目录中执行以下命令（替换为你的仓库URL）：

```bash
git remote add origin https://github.com/你的用户名/你的仓库名.git
git branch -M main
git push -u origin main
```

## 3. 为 GitHub Pages 准备构建

为了让 GitHub Pages 正常工作，你需要一个构建好的静态网站。运行以下命令来生成构建版本：

```bash
npm run build
```

这将在 `dist/` 目录中生成你的网站文件。

## 4. 配置 GitHub Pages

1. 在 GitHub 上打开你的仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中，向下滚动到 "Pages" 部分
4. 在 "Source" 部分，选择 "Deploy from a branch"
5. 选择分支 "main" 和文件夹 "root" 或 "gh-pages"（取决于你的设置）
6. 点击 "Save"

## 5. （可选）自动部署配置

你也可以配置 GitHub Actions 来自动构建和部署你的网站。在你的仓库中创建 `.github/workflows/deploy.yml` 文件：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm install
    
    - name: Build
      run: npm run build
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## 6. 配置项目以支持子路径（如果需要）

如果你的仓库名不是 `用户名.github.io` 格式，那么你的网站将部署在 `https://用户名.github.io/仓库名` 上。在这种情况下，你可能需要在 Vite 配置中设置 base 路径。

在 `vite.config.ts` 中添加 base 选项：

```typescript
export default defineConfig({
  base: '/你的仓库名/',  // 如果你的仓库名是 ai-os-portfolio，则写 '/ai-os-portfolio/'
  // ... 其他配置
})
```

然后重新提交并推送更改：

```bash
npm run build
git add .
git commit -m "Configure base path for GitHub Pages"
git push origin main
```

## 7. 验证部署

部署完成后，你的网站将在几分钟内可通过 `https://你的用户名.github.io/仓库名` 访问。

如果使用了 `.github.io` 格式的仓库名，网站将直接在 `https://你的用户名.github.io` 上可用。

## 注意事项

- GitHub Pages 只能托管静态文件，这就是为什么我们需要运行 `npm run build` 来生成静态文件
- 如果你使用了自定义域名，请在 GitHub 仓库的 Settings > Pages > Custom domain 中配置
- GitHub Pages 不支持服务端渲染，所以我们使用构建工具生成静态文件