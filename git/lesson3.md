### 版本回退

  1. git checkout  -- <file>  取消工作区的修改，从暂存区里面查找，然后覆盖到工作区
 
  2. git  rm --cached  <file>  删除暂存区里的文件（前提是当前文件在历史区没有历史记录）
 
  3. git  reset  HEAD <file>  回退暂存区，历史区覆盖暂存区
 
  4. git  reset (--mixed) 默认  commitID    回退到指定版本，历史区和暂存区回退，工作区不回退
 
  5. git  reset  --soft   commitID   回退到指定版本，只回退历史区，工作区和暂存区不回退
 
  6. git  reset   --hard  commitID  回退到指定版本，工作区，暂存区和工作区全部回退
 
  7. git  log   查看历史记录的详细情况，只能查看当前和过去的版本，不能查看未来版本
 
  8. git  log  --oneline   在一行显示历史记录
 
  9. git  reflog  查看历史记录，可以显示过去和未来的版本
 
 
 