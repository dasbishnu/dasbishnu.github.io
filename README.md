**Build Instructions**
```bash
#to build dev site and override environment to production
JEKYLL_ENV=production bundle exec jekyll serve --livereload
#to build dev site 
bundle exec jekyll serve --livereload
#First Time users run this instead
bundle install && bundle exec jekyll serve --livereload
#copy jekyll container folder from
git clone https://github.com/microsoft/vscode-dev-containers.git
#and rebuild github code space
```
**Merging branches**
```bash
#Switch to main branch
git switch main
# Get origin
git fetch origin
#Get latest main from origin
git reset --hard origin/main
# Perform a diff of the staging branch that has your changes and except the files mentioned in the grep -v command and load them to local staging branch
git diff main staging --name-only | grep -v -e '.devcontainer' -e '.gitpod' -e '_config.yml' -e 'CNAME' -e 'Gemfile' | sed 's/.*/"&"/' | xargs git checkout staging
#Now check if the changes you want are staged in the Source Control.Make necessary changes and commit
git commit -m 'Merged files to main from staging'
#Push to origin/main
git push
#Switch back to staging
$ git switch staging
```