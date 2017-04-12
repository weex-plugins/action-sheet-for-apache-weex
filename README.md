# weex-action-sheet
- weex-action-sheet是一个weex插件，可以通过weexpack快速集成，可以丰富weex功能

# 功能

# 快速使用
- 通过weexpack初始化一个weex-action-sheet工程
   ```
   weex create dev weex-action-sheet
   ```
- 添加插件
  ```
  weex plugin add weex-action-sheet
  ```

# 已有工程集成
## iOS集成插件WeexActionSheet
- 命令行集成
  ```
  weex plugin add weex-action-sheet
  ```
- 手动集成
  在podfile 中添加
  ```
  pod 'WeexActionSheet'
  ```

## 安卓集成插件weexactionsheet
- 命令行集成
  ```
  weex plugin add weex-action-sheet
  ```
- 手动集成    
  Maven最新版本：[ ![Download](https://api.bintray.com/packages/misakuo/maven/WeexActionSheet/images/download.svg) ](https://bintray.com/misakuo/maven/WeexActionSheet/_latestVersion)    
  在相应工程的build.gradle文件的dependencies中添加
  ```
  compile 'org.weex.plugin:actionsheet:{$version}'
  ``` 
  注意：您需要自行指定插件的groupId和version并将构建产物发布到相应的依赖管理仓库内去（例如maven）, 您也可以对插件的name进行自定义，默认将使用插件工程的名称作为name
