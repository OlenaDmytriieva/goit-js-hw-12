import{a as b,S as w,i as c}from"./assets/vendor-da186403.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();async function f(l,t,a){return await b.get("https://pixabay.com/api/",{params:{key:"42368868-12588a31d2c2b3196976be5e8",q:l,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:a,page:t}}).then(s=>{if(s.status!==200)throw new Error("Network response is not ok");return s.data})}let F=new w(".gallery a",{captionDelay:250,captionsData:"alt"});F.on("show.simplelightbox",function(){});function u(l,t){const a=document.querySelector(".gallery"),s=l.map(o=>`<li class="gallery-item">
                        <div class="box">
                          <a class="gallery-link" href="${o.largeImageURL}">
                            <img class="gallery-image" src="${o.webformatURL}" alt="${o.tags}" data-likes="${o.likes}" data-views="${o.views}" data-comments="${o.comments}" data-downloads="${o.downloads}"/>
                            <div class="img-card">
                              <div class="img-data">
        <h4 class="data-title">Likes</h4>
        <p class="data-value">
          ${o.likes}
        </p>
      </div>
      <div class="img-data">
        <h4 class="data-title">Views</h4>
        <p class="data-value">
          ${o.views}
        </p>
      </div>
      <div class="img-data">
        <h4 class="data-title">Comments</h4>
        <p class="data-value">
          ${o.comments}
        </p>
      </div>
      <div class="img-data">
        <h4 class="data-title">Downloads</h4>
        <p class="data-value">
          ${o.downloads}
        </p>
      </div>
                            </div>
                          </a>
                        </div>
                      </li>`).join(`
`);t?a.insertAdjacentHTML("beforeend",s):a.innerHTML=s;const r=document.querySelector(".box").getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"}),F.refresh()}const p=document.querySelector(".load-more-button");function v(){p.style.display="block"}function d(){p.style.display="none"}const g=document.querySelector(".search-form"),i=document.querySelector(".loader");let n=1,m=15,y,h="";g.addEventListener("submit",async l=>{l.preventDefault();const t=g.querySelector("input").value.trim();if(t){i.style.display="block",d(),h!==t&&(n=1),h=t;try{const a=await f(t,n,m),s=a.hits;y=Math.ceil(a.totalHits/m),s.length===0?(c.error({title:"Error",titleColor:"#FFF",messageColor:"#FFF",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",position:"topRight",theme:"dark",timeout:5e3}),u(s,!1)):(u(s,!1),i.style.display="none",n===y?(d(),c.info({title:"Info",titleColor:"#FFF",messageColor:"#FFF",message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#0099FF",theme:"dark",timeout:5e3})):v())}catch{i.style.display="none"}}else c.warning({title:"Caution",titleColor:"#FFF",messageColor:"#FFF",message:"This input field cannot be empty. Please enter your request!",backgroundColor:"#FFA000",position:"topRight",theme:"dark",timeout:5e3}),i.style.display="none"});p.addEventListener("click",async()=>{i.style.display="block",d(),n++;try{const t=(await f(h,n,m)).hits;t.length>0?(u(t,!0),v(),n===y&&(d(),c.info({title:"Info",titleColor:"#FFF",messageColor:"#FFF",message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#0099FF",theme:"dark",timeout:5e3}))):d()}catch{c.error({title:"Error",titleColor:"#FFF",messageColor:"#FFF",message:"Something went wrong :(",position:"topRight",backgroundColor:"#EF4040",theme:"dark",timeout:5e3})}finally{i.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
