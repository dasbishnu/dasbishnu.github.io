**Build Instructions**
```bash
#to build dev site and override environment to production
JEKYLL_ENV=production bundle exec jekyll serve --livereload
#to build dev site 
bundle exec jekyll serve --livereload
#First Time users run this instead
bundle install && bundle exec jekyll serve --livereload
#if you want to preview drafts
bundle install && bundle exec jekyll serve --livereload --drafts
#if you want to clean the _sites directory
bundle install &&  bundle exec jekyll clean &&  bundle exec jekyll serve --livereload --drafts
#Instructions to copy jekyll dev container
cd ..
#Ensure you are in /workspace folder or a folder outside your current working directory 
git clone https://github.com/devcontainers/images.git
cd images
cp -r src/jekyll/.devcontainer /workspace/dasbishnu.github.io
#and rebuild github code space
```
**Merging branches**
```bash
# Switch to preprod
git checkout preprod

# Perform a diff of the staging branch that has your changes and exclude the files mentioned in the grep -v command,
# then load them to the local preprod branch
git diff --name-only staging preprod \
  | grep -v -e '.devcontainer' -e '.gitpod' -e '_config.yml' -e 'CNAME' -e 'Gemfile'  \
  | xargs -I {} git checkout staging -- "{}"

# Switch back to preprod branch
git checkout preprod
# Stage all changes, including modifications, deletions, and newly created files
git add -A
# Commit the changes
git commit -m 'Merged files to preprod from staging'
# Push the changes to the remote preprod branch
git push origin preprod

#Now you can merge preprod to main
git checkout main
git merge preprod
```
**Other commands**
```bash
#Switch back to staging
$ git switch staging
#Stash changes
git stash
#Switch to main branch
git switch main
# Get origin
git fetch origin
#Get latest main from origin
git reset --hard origin/main
#Push your local changes to a remote repository and simultaneously set up tracking information for the branch
git push --set-upstream origin branch_name
```