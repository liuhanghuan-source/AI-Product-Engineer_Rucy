#!/bin/bash
# GitHub Pages 部署脚本

echo "开始构建项目..."

# 构建项目
npm run build

if [ $? -ne 0 ]; then
  echo "构建失败，请修复错误后再试"
  exit 1
fi

echo "构建成功！"

# 检查 dist 目录是否存在
if [ ! -d "dist" ]; then
  echo "错误：dist 目录不存在，请确保构建成功"
  exit 1
fi

echo "请按照以下步骤将项目部署到 GitHub:"
echo ""
echo "1. 如果你还没有创建 GitHub 仓库，请登录 GitHub 并创建一个新仓库"
echo "2. 复制你的仓库的 HTTPS URL (例如: https://github.com/用户名/仓库名.git)"
echo ""
echo "3. 在终端中运行以下命令 (将 URL 替换为你的仓库 URL):"
echo "   git remote add origin https://github.com/你的用户名/你的仓库名.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "4. 要启用 GitHub Pages，请访问你的仓库 -> Settings -> Pages"
echo "   在 'Source' 部分选择 'Deploy from a branch'"
echo "   选择 'main' 分支和 '/' 文件夹"
echo ""
echo "5. 每次更新后，只需运行:"
echo "   npm run build"
echo "   git add ."
echo "   git commit -m \"更新项目\""
echo "   git push origin main"
echo ""
echo "注意: GitHub Pages 可能需要几分钟时间来部署更新"