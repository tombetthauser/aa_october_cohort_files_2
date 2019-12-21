require 'rack'
require 'byebug'

app = Proc.new do |env|
  req = Rack::Request.new(env)
  res = Rack::Response.new
  res['Content-Type'] = 'text/html'

  text = (req.path.split('/') * 1000).shuffle.join(" ")

  if text.length == 0
    text = ("all work and no play makes jack a dull boy".split(" ") * 1000).shuffle.join(" ")
  end
  
  res.write(text)
#   debugger
  res.finish
end

Rack::Server.start(
  app: app,
  Port: 5000
)