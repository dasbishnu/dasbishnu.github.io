# mywebsite
to build dev site and override environment to production
'''
JEKYLL_ENV=production bundle exec jekyll serve --livereload
'''
to build dev site 
'''
bundle exec jekyll serve --livereload
'''
copy jekyll container folder from
'''
git clone https://github.com/microsoft/vscode-dev-containers.git
'''
and rebuild github code space

Add the following two lines below ruby in base.Dockerfile
# Setting ruby to <3.1 and >2.5 so as to make it work for the linux 
# nokogiri-1.11.1-x86_64-linux requires ruby version < 3.1.dev, >= 2.5, which is incompatible with the current version, ruby 3.2.2p53
RUN rbenv install 3.0.0
RUN rbenv global 3.0.0