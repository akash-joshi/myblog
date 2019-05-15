module.exports = {
  title:"Akash Joshi",
  head: [
    ["link", { rel: "icon", href: `/logo.png` }],
    ["meta", { name: "theme-color", content: '#fb7777'}],
    ["link", { rel: "manifest", href: 'manifest.json'}],
    [
      "script",{},`var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
      (function(){
      var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
      s1.async=true;
      s1.src='https://embed.tawk.to/5c5a3d597cf662208c9439d5/default';
      s1.charset='UTF-8';
      s1.setAttribute('crossorigin','*');
      s0.parentNode.insertBefore(s1,s0);
      })();`
    ],
  ],
  base: "/",
  description: "🚀FullStack-GigIndia |💻OpenSource-MetaCall |✍️ Flexiple-HackerNoon |🔥Up for Speaking Gigs |🌏 akashj.pw",
  ga: "UA-136873075-1",
  themeConfig: {
    nav: [
      {text:'🖥 GitHub',link:'https://github.com/akash-joshi'},
      {text:'🌐 LinkedIn',link:'https://www.linkedin.com/in/akash-s-joshi'},
      {text:'☕️ Donate',link:'https://ko-fi.com/B0B4MFVE'}
    ],
    sidebar:{
      '/':[
        {
          title:'Articles',
          children: [
            'boiler-npm',
            'js-lib',
            'firebase'
          ]
        },
        'portfolio'
      ]
    }
  },
  theme: "dark-new"
};