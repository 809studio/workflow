# 部署

## GitHub Page

使用`VuePress + GitHub Page + Travis CI`

### GitHub

- 在GitHub上创建新的项目

- 在页面右上角，点击头像，在下拉框里面点击`setting -> Developer settings -> Personal access tokens`，点击`Generate new token`生成token（保存好改token，因为只会显示一次，如果忘记了就只能重新生成）

- 在第一次Travis CI完成自动部署后，根据`.travis.yaml`文件里的`target-branch`字段，会自动生成一个新的分支。之后我们需要在项目的`settings -> Options -> Github Pages`里，将source选成刚刚生成的分支，如下：

<base-img img="github-pages.png" />

### Travis CI

- 用GitHub账户注册Travis CI的账户，并授权想要自动部署的项目

- 将在GitHub上生成的token填入Travis CI授权项目的`setting -> Environment Variables`，`name`记得和后面`.travis.yaml`文件里的`github_token`字段的值保持一致

<base-img img="travis-ci.png" />

### VuePress

- 在 `docs/.vuepress/config.js` 中设置正确的 `base`。

    如果你打算发布到 `https://<USERNAME or GROUP>.github.io/`，则可以省略这一步，因为 `base` 默认即是 `"/"`。

    如果你打算发布到 `https://<USERNAME or GROUP>.github.io/<REPO>/`（也就是说你的仓库在 `https://github.com/<USERNAME>/<REPO>`），则将 `base` 设置为 `"/<REPO>/"`。

- 在项目的根目录创建一个名为 `.travis.yml` 的文件；

- 在本地执行 `yarn` 或 `npm install` 并且提交生成的 lock 文件（即 `yarn.lock` 或 `package-lock.json`）；

- 使用 `GitHub Pages` 部署提供程序模板并遵循 [Travis 文档](https://docs.travis-ci.com/user/deployment/pages/)。

```yaml
language: node_js
node_js:
  - lts/*
branches:
  only:
  - master    # 构建的分支
cache:
  directories:
  - node_modules # 依赖缓存的目录
install:
  - npm install
script:
  - npm run docs:build
deploy:
  provider: pages
  skip_cleanup: true
  local_dir: docs/.vuepress/dist
  github_token: $GITHUB_TOKEN # 在 GitHub 中生成，用于允许 Travis 向你的仓库推送代码。在 Travis 的项目设置页面进行配置，设置为 secure variable
  target-branch: gh-pages
  keep_history: true
  on:
    branch: master
```
