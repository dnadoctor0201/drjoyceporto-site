source "https://rubygems.org"

# Matches whatever Jekyll/plugin versions GitHub Pages currently runs in
# production, so `bundle exec jekyll serve` locally behaves the same as
# the live GitHub Pages build.
gem "github-pages", group: :jekyll_plugins

group :jekyll_plugins do
  gem "jekyll-sitemap"
end

# Windows/JRuby compatibility (harmless to include even if unused on your machine)
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]
