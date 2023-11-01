#!/bin/bash
file="$1"
message="$2"
git_push(){

git add $file
git commit -m "$message"
git push 

}
git_push