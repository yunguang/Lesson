1.分布式版本控制系统  git  可以本地提交历史记录

2.集中式  svn   需要联网

3.git的3个区域

  工作区  git add  暂存区   git commit 历史区

  暂存区和历史区都放在了.git里面

4. 配置本地git的用户名和邮箱

  1.git config --list  查看当前配置

  2.git config --global user.name 你的名字

  3.git config --global user.email 你的邮箱

5.如何使用git

  1.mkdir  创建目录

  2. cd 切换到当前目录

  3.git init 初始化 会形成一个.git的版本库

  4.touch index.html  创建文件

  5.git add   提交到暂存区

    5.1  git add .和 git add -A是提交所有文件和文件夹
    5.2  git add  要提交的文件或文件夹名

  6.git commit -m“你的信息”  提交到历史区

  7. rm -rf 是强制删除 可以删除文件或文件夹
  8. rm  只能删除文件
  9. ls   ls -a   ls -al

