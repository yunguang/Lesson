### 版本回退
1.git checkout -- index.html

2.git rm --cached index.html
  git reset HEAD index.html
  
3.git reset commitID  回退历史区和暂存区
  
  git reset --hard commitId 回退历史区，暂存区和工作区
  
  git reset --soft commitId 只回退历史区
  
  