import{a as b,S as w,i as d}from"./assets/vendor-da186403.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();async function g(l,t,r){return await b.get("https://pixabay.com/api/",{params:{key:"42368868-12588a31d2c2b3196976be5e8",q:l,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:r,page:t}}).then(s=>{if(s.status!==200)throw new Error("Network response is not ok");return s.data})}function F(l,t){const r=document.querySelector(".gallery"),s=l.map(a=>`<li class="gallery-item">
                        <div class="box">
                          <a class="gallery-link" href="${a.largeImageURL}">
                            <img class="gallery-image" src="${a.webformatURL}" alt="${a.tags}" data-likes="${a.likes}" data-views="${a.views}" data-comments="${a.comments}" data-downloads="${a.downloads}"/>
                            <div class="img-card">
                              <div class="img-data">
        <h4 class="data-title">Likes</h4>
        <p class="data-value">
          ${a.likes}
        </p>
      </div>
      <div class="img-data">
        <h4 class="data-title">Views</h4>
        <p class="data-value">
          ${a.views}
        </p>
      </div>
      <div class="img-data">
        <h4 class="data-title">Comments</h4>
        <p class="data-value">
          ${a.comments}
        </p>
      </div>
      <div class="img-data">
        <h4 class="data-title">Downloads</h4>
        <p class="data-value">
          ${a.downloads}
        </p>
      </div>
                            </div>
                          </a>
                        </div>
                      </li>`).join(`
`);t?r.insertAdjacentHTML("beforeend",s):r.innerHTML=s;const o=document.querySelector(".box").getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"});let i=new w(".gallery a",{captionDelay:250,captionsData:"alt"});i.on("show.simplelightbox",function(){}),i.refresh()}const p=document.querySelector(".load-more-button");function v(){p.style.display="block"}function u(){p.style.display="none"}const f=document.querySelector(".search-form"),n=document.querySelector(".loader");let c=1,y=15,m,h="";f.addEventListener("submit",async l=>{l.preventDefault();const t=f.querySelector("input").value.trim();if(t){n.style.display="block",h!==t&&(c=1),h=t;try{const r=await g(t,c,y),s=r.hits;m=Math.ceil(r.totalHits/y),s.length===0?d.error({title:"Error",titleColor:"#FFF",messageColor:"#FFF",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",position:"topRight",theme:"dark",timeout:5e3}):(F(s,!1),n.style.display="none",c===m?(u(),d.info({title:"Info",titleColor:"#FFF",messageColor:"#FFF",message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#0099FF",theme:"dark",timeout:5e3})):v())}catch(r){console.error("Error:",r),n.style.display="none"}}else d.warning({title:"Caution",titleColor:"#FFF",messageColor:"#FFF",message:"This input field cannot be empty. Please enter your request!",backgroundColor:"#FFA000",position:"topRight",theme:"dark",timeout:5e3}),n.style.display="none"});p.addEventListener("click",async()=>{n.style.display="block",u(),c++;try{const t=(await g(h,c,y)).hits;t.length>0?(F(t,!0),v(),c===m&&(u(),d.info({title:"Info",titleColor:"#FFF",messageColor:"#FFF",message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#0099FF",theme:"dark",timeout:5e3}))):u()}catch(l){console.error("Error:",l)}finally{n.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
