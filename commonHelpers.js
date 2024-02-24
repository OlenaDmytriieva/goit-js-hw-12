import{a as F,S as b,i as c}from"./assets/vendor-da186403.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}})();async function h(s,o,r){return await F.get("https://pixabay.com/api/",{params:{key:"42368868-12588a31d2c2b3196976be5e8",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:r,page:o}}).then(a=>{if(a.status!==200)throw new Error("Network response is not ok");return a.data})}function g(s,o){const r=document.querySelector(".gallery"),a=s.map(e=>`<li class="gallery-item">
                        <div class="box">
                          <a class="gallery-link" href="${e.largeImageURL}">
                            <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" data-likes="${e.likes}" data-views="${e.views}" data-comments="${e.comments}" data-downloads="${e.downloads}"/>
                            <div class="img-card">
                              <div class="img-data">
        <h4 class="data-title">Likes</h4>
        <p class="data-value">
          ${e.likes}
        </p>
      </div>
      <div class="img-data">
        <h4 class="data-title">Views</h4>
        <p class="data-value">
          ${e.views}
        </p>
      </div>
      <div class="img-data">
        <h4 class="data-title">Comments</h4>
        <p class="data-value">
          ${e.comments}
        </p>
      </div>
      <div class="img-data">
        <h4 class="data-title">Downloads</h4>
        <p class="data-value">
          ${e.downloads}
        </p>
      </div>
                            </div>
                          </a>
                        </div>
                      </li>`).join(`
`);o?r.insertAdjacentHTML("beforeend",a):r.innerHTML=a;let t=new b(".gallery a",{captionDelay:250,captionsData:"alt"});t.on("show.simplelightbox",function(){}),t.refresh()}const y=document.querySelector(".load-more-button");function v(){y.style.display="block"}function m(){y.style.display="none"}const p=document.querySelector(".search-form"),l=document.querySelector(".loader");let i=1,d=15,f,u="";p.addEventListener("submit",async s=>{s.preventDefault();const o=p.querySelector("input").value.trim();if(o){l.style.display="block",u!==o&&(i=1),u=o;try{const r=await h(o,i,d),a=r.hits;f=Math.ceil(r.totalHits/d),a.length===0?c.error({title:"Error",titleColor:"#FFF",messageColor:"#FFF",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",position:"topRight",theme:"dark",timeout:5e3}):(g(a,!1),l.style.display="none",v(),i>f&&c.error({title:"Error",titleColor:"#FFF",messageColor:"#FFF",message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#EF4040",theme:"dark",timeout:5e3}))}catch(r){console.error("Error:",r),l.style.display="none"}}else c.warning({title:"Caution",titleColor:"#FFF",messageColor:"#FFF",message:"This input field cannot be empty. Please enter your request!",backgroundColor:"#FFA000",position:"topRight",theme:"dark",timeout:5e3}),l.style.display="none"});y.addEventListener("click",async()=>{l.style.display="block",m(),i++;try{const o=(await h(u,i,d)).hits;o.length>0?(g(o,!0),v()):m()}catch(s){console.error("Error:",s)}finally{l.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
