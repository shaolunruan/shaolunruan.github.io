require 'net/http'
urls = ['https://shaolunruan.github.io/', 'https://shaolunruan.github.io/index.html']
uri = URI.parse('http://data.zz.baidu.com/urls?site=https://shaolunruan.github.io&token=FoxIKuSowFWd1JhG')
req = Net::HTTP::Post.new(uri.request_uri)
req.body = urls.join("\n")
req.content_type = 'text/plain'
res = Net::HTTP.start(uri.hostname, uri.port) { |http| http.request(req) }
puts res.body