function share(params, platform) {
  return platforms[platform](params);
}

let platforms = {
  twitter: ({text, url, hashtags}) => `http://twitter.com/share?text=${encodeURI(text)}&url=${url}&hashtags=${hashtags.join(',')}`,
  linkedin: ({url}) => `http:www.linkedin.com/shareArticle?mini=true&url=${url}`,
  facebook: ({url}) => `https://www.facebook.com/sharer/sharer.php?&u=${url}`
}

module.exports = share
