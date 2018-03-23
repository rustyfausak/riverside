task default: [:serve]

desc 'Serve the site'
task :serve do
  sh(*%w(jekyll serve --drafts --future --incremental --watch))
end
