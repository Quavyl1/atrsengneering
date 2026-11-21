---
import {site} from '../data/site';
import {services,projects,insights} from '../data/content';

const urls=[
  {path:'/',priority:'1.0'},
  {path:'/services/',priority:'0.9'},
  ...services.map(s=>({path:`/services/${s.slug}/`,priority:'0.8'})),
  {path:'/projects/',priority:'0.9'},
  ...projects.map(p=>({path:`/projects/${p.slug}/`,priority:p.featured?'0.8':'0.7'})),
  {path:'/insights/',priority:'0.6'},
  ...insights.map(a=>({path:`/insights/${a.slug}/`,priority:'0.5'})),
  {path:'/about/',priority:'0.6'},
  {path:'/partner/',priority:'0.6'},
  {path:'/contact/',priority:'0.8'},
  {path:'/privacy/',priority:'0.2'},
  {path:'/terms/',priority:'0.2'}
];
const xml=urls.map(({path,priority})=>`<url><loc>${site.domain}${path}</loc><changefreq>monthly</changefreq><priority>${priority}</priority></url>`).join('');
---
<%@xml version="1.0" encoding="UTF-8"%>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" set:html={xml}></urlset>