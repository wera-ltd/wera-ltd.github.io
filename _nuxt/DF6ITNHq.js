import{o as n,c,a as o,I as g,_ as a,B as l,w as p,m,t as d,b as u,F as _,G as f,z as A}from"./BsAnuX0m.js";import{_ as h}from"./D-HAy1HA.js";const j=["width","height","aria-labelledby","viewBox","color"],E=["transform"],I={__name:"IconBase",props:{name:{type:String,default:"icon"},width:{type:[Number,String],default:18},height:{type:[Number,String],default:18},color:{type:String,default:"currentColor"},viewBox:{type:String,required:!1},transform:{type:String}},setup(t){const e=t;return(i,s)=>(n(),c("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.width,height:e.height,"aria-labelledby":e.name,viewBox:e.viewBox?e.viewBox:`0 0 ${e.width} ${e.height}`,color:e.color,class:"icon"},[o("g",{transform:e.transform},[g(i.$slots,"default")],8,E)],8,j))}},N={};function C(t,e){const i=I;return n(),l(i,null,{default:p(()=>e[0]||(e[0]=[o("path",{d:"M5.60608 1.78571H0.214285C0.0959463 1.78571 0 1.88166 0 2V3C0 3.11833 0.0959463 3.21428 0.214285 3.21428H5.60608V4.03676C5.60608 4.41858 6.0677 4.6098 6.3377 4.33981L7.87447 2.80305C8.04184 2.63567 8.04184 2.36432 7.87447 2.19696L6.3377 0.660196C6.06772 0.390214 5.60608 0.581428 5.60608 0.963249V1.78571Z",fill:"currentColor"},null,-1)])),_:1})}const R=a(N,[["render",C]]),v={class:"portfolio-item-img-box"},W=["src"],k={class:"portfolio-item-text-box"},O={class:"portfolio-item-text__name"},U={class:"portfolio-item-text__kind"},y=m({__name:"item",props:{portfolioItem:{type:Object,default:{}}},setup(t){return(e,i)=>{const s=R,r=h;return n(),l(r,{class:"portfolio-item",to:`/portfolio/${t.portfolioItem.code}`},{default:p(()=>[o("div",v,[o("img",{src:`/assets/contents/${t.portfolioItem.code}/thumbnail.png`,class:"portfolio-item-img",alt:""},null,8,W)]),o("div",k,[o("strong",O,d(t.portfolioItem.projectName),1),o("p",U,d(t.portfolioItem.kind),1),u(s,{width:"8",height:"5",class:"portfolio-item-text__icon"})])]),_:1},8,["to"])}}}),P=a(y,[["__scopeId","data-v-e12d7d11"]]),x={class:"list"},L=m({__name:"list",props:{portfolioList:{type:Array,default:[]},itemSize:{type:String,default:"50%"}},setup(t){return(e,i)=>{const s=P;return n(),c("ul",x,[(n(!0),c(_,null,f(t.portfolioList,(r,b)=>(n(),c("li",{key:b,style:A({width:t.itemSize})},[u(s,{portfolioItem:r},null,8,["portfolioItem"])],4))),128))])}}}),w=a(L,[["__scopeId","data-v-8a34f100"]]),S=JSON.parse('[{"code":"ok","client":"OK 캐피탈","projectName":"OK 비교대출","subName":"OK CAPITAL","kind":"Mobile & PC","date":"2024","color":"#FF5300","summary":"금융사에서 판매 중인 대출 상품 금리와 한도를 비교해 금융소비자에게 가장 적합한 조건의 대출을 추천하고 간편하게 대출을 신청할 수 있도록 도와주는 금융서비스","details":{"descriptions":[{"subject":"사용자 중심의 금융 솔루션","content":"WERA는 해당 프로젝트에서 백엔드 개발 대신 사용자 경험에 초점을 맞춘 UI/UX 설계를 중심으로 작업했습니다.<br/> 금융 소비자가 대출 상품을 직관적으로 비교하고 선택할 수 있도록 최적의 화면 디자인과 인터랙션을 구현했습니다."},{"subject":"프론트엔드로 구현된 간편한 접근성","content":"사용자 편의성을 극대화하기 위해 WERA의 프론트엔드 전문성을 기반으로 구축되었습니다.<br/> 불필요한 복잡함을 제거하고, 단순하고 명확한 레이아웃으로 누구나 쉽게 사용할 수 있는 서비스를 제공합니다."},{"subject":"협업을 통해 완성된 성공적 프로젝트","content":"고객과 긴밀한 협업을 통해 금융 소비자 중심의 디지털 솔루션을 설계했습니다.<br/> 고객의 요구사항을 깊이 이해하고 이를 프로젝트에 반영하여, 그래픽 품질과 기술력으로 인정받는 완성도 높은 서비스를 구현했습니다."}],"skills":["front-end development","Architecture design"],"images":["detail0.png","detail1.png","detail2.png","detail3.png"],"videos":["video-m.mp4","video.mp4"]}},{"code":"blacklot","client":"서울옥션","projectName":"BLACKLOT","subName":"BLACKLOT","kind":"Mobile & PC","date":"2023","color":"#49CDDA","summary":"모든 컬렉터블 아이템의 큐레이션과 거래를 위해 구축한 디지털 플랫폼","details":{"descriptions":[{"subject":"Vue.js 기반의 프리미엄 플랫폼 구축","content":"Nuxt.js를 활용하여 제작된 모바일과 PC용 디지털 플랫폼입니다.<br/> WERA는 각 디바이스의 특성을 고려해 최적화된 인터페이스를 설계하고, 모바일과 PC에서 동일한 사용자 경험을 제공하도록 구현했습니다."},{"subject":"직관적 사용자 경험을 선사하는 UI/UX","content":"모바일과 PC에 최적화된 인터페이스를 설계하여 사용자의 편의성과 몰입감을 극대화했습니다.<br/> 디바이스 간의 일관성을 유지하면서도 각 플랫폼의 장점을 살린 사용자 친화적인 UI/UX를 구현했습니다.<br/> 컬렉션 데이터와 아이템 정보를 명확하고 시각적으로 표현해 플랫폼의 접근성과 사용자 만족도를 높였습니다."},{"subject":"안정적인 데이터 관리와 시스템 최적화","content":"WERA는 BLACKLOT 플랫폼의 데이터 흐름을 최적화하고, 안정적인 백엔드 시스템을 구축하여 대규모 사용자 트래픽을 효율적으로 처리했습니다.<br/> 이는 플랫폼의 신뢰성과 사용자 경험을 동시에 강화하는 데 기여했습니다."}],"skills":["front-end development","Architecture design"],"images":["detail0.png","detail1.png","detail2.png","detail3.png","detail4.png"]}},{"code":"thepond","client":"Lettitu","projectName":"The Pond","subName":"The Pond","kind":"Mobile & PC","date":"2024","color":"#0038FF","details":{"descriptions":[{"subject":"차별화된 브랜드 경험을 제공하다","content":"The Pond 프로젝트는 브랜드의 정체성과 가치를 디지털 공간에서 창의적으로 전달하는 플랫폼입니다.<br/> WERA는 감각적인 웹 디자인과 브랜드 중심의 스토리텔링을 결합해, 사용자들에게 잊을 수 없는 디지털 경험을 제공합니다."},{"subject":"디자인과 기술의 통합","content":"WERA는 The Pond 프로젝트에서 브랜드 비전을 반영한 UI/UX 디자인과, 안정적이고 확장 가능한 시스템 아키텍처를 성공적으로 구현했습니다.<br/> 사용자 인터랙션과 비주얼 요소의 균형을 통해 웹사이트의 품질을 극대화했습니다."},{"subject":"효율적인 시스템 아키텍처","content":"WERA는 최신 기술 스택을 활용하여 The Pond 플랫폼의 효율성과 안정성을 보장했습니다.<br/> 이는 사용자 친화적 디자인과 고성능 시스템의 결합으로, 모든 디지털 터치포인트에서 브랜드의 가치를 유지합니다."}],"skills":["front-end development","Architecture design"],"images":["detail0.png","detail1.png","detail2.png","detail3.png"],"videos":["video-m.mp4","video.mp4"]}},{"code":"doitpet","client":"에스오엘코퍼레이션","projectName":"DO IT PET","subName":"DO IT PET","kind":"PC","date":"2024","color":"#000000","summary":"펫케어부터 소통까지 한번에! 반려생활의 모든 것을 담은 플랫폼","details":{"descriptions":[{"subject":"반려생활의 가치를 소개하다","content":"WERA는 DO IT PET 프로젝트를 통해 반려동물을 위한 플랫폼의 철학과 가치를 명확히 전달하는 회사 소개 사이트를 설계하고 구현했습니다.<br/> 사용자 친화적인 콘텐츠 배치와 시각적 완성도를 갖춘 디자인을 통해 브랜드 이미지와 서비스 핵심 가치를 효과적으로 전달하고, 사이트 방문자들에게 반려동물 중심의 생활 문화를 심어줍니다."},{"subject":"플랫폼 운영을 위한 관리자 설계","content":"모바일 플랫폼의 데이터를 효율적으로 관리하고 실시간으로 모니터링할 수 있도록 관리자 페이지의 UI/UX를 설계하고 구현했습니다.<br/> 복잡한 데이터 처리와 관리 절차를 직관적인 인터페이스로 단순화하여, 관리자가 최소한의 작업으로도 플랫폼을 효율적으로 운영할 수 있는 환경을 제공합니다."},{"subject":"사용자 중심의 직관적 인터페이스","content":"WERA는 관리자의 경험을 극대화하기 위해 데이터 시각화, 실시간 보고서 생성, 편리한 검색 기능 등 고급 기능을 포함한 관리자 인터페이스를 설계했습니다.<br/> 이를 통해 DO IT PET 플랫폼의 운영 효율성을 높이고, 반려동물 데이터 관리의 새로운 기준을 제시했습니다."}],"skills":["front-end development","Architecture design"],"images":["detail0.png","detail1.png","detail2.png","detail3.png"],"videos":["video.mp4"]}},{"code":"koworks","client":"코웍스","projectName":"KOWORKS","subName":"KOWORKS","kind":"PC","date":"2023","color":"#3B91FA","summary":"글로벌 가치 실현에 기여하는 국제개발협력 분야 전문 수행기관 내부 관리시스템","details":{"descriptions":[{"subject":"글로벌 협력을 위한 최적화된 내부 시스템","content":"WERA는 해당 프로젝트에서 국제개발협력 분야의 업무를 효율화하기 위해 사용자 편의성이 극대화된 내부 관리 시스템을 설계했습니다.<br/> 체계적인 데이터 관리를 통해 글로벌 협력의 가치를 실현할 수 있는 기반을 제공했습니다."},{"subject":"Toast UI Grid로 구현된 효율적 데이터 관리","content":"KOWORKS 플랫폼에는 Toast UI Grid를 도입하여 대규모 데이터를 효과적으로 정리하고 관리할 수 있는 강력한 테이블 시스템을 구현했습니다.<br/> 이를 통해 사용자는 데이터를 빠르게 탐색하고 필요한 정보를 손쉽게 확인할 수 있습니다."},{"subject":"업무 프로세스의 단순화와 혁신","content":"복잡한 업무 절차를 단순화하고 명확히 정리하여 관리자가 효율적으로 작업할 수 있는 시스템 환경을 조성했습니다.<br/> 체계적인 설계와 기술적 혁신이 결합된 결과, 업무 효율성과 사용자 만족도가 크게 향상되었습니다."}],"skills":["front-end development","Architecture design"],"images":["detail0.png","detail1.png","detail2.png"]}},{"code":"energy","client":"한국에너지기술연구원","projectName":"KOREA INSTITUTE OF ENERGY RESEARCH","subName":"스마트홈에너지","kind":"Mobile","date":"2022","color":"#0754bc","summary":"에너지 사용 정보를 실시간으로 제공하고, 사용 습관에 따른 에너지 절약을 돕기 위한 맞춤형 안내 서비스","details":{"descriptions":[{"subject":"에너지 절약을 위한 맞춤형 솔루션","content":"WERA는 스마트홈 에너지 프로젝트를 통해 사용자의 에너지 사용 데이터를 실시간으로 분석하고, 절약 방안을 제안하는 맞춤형 안내 서비스를 개발했습니다.<br/> 사용자 친화적인 차트를 도입해 데이터를 시각적으로 표현하고, 에너지 유형별로 색상을 구분하여 가독성과 이해도를 한층 높였습니다.<br/> 이를 통해 사용자는 에너지 사용 습관을 쉽게 파악하고 구체적인 절약 전략을 세울 수 있습니다."},{"subject":"실시간 데이터 제공의 혁신","content":"스마트홈 에너지 플랫폼은 실시간 데이터 분석 기술을 바탕으로 사용자의 에너지 사용 정보를 명확히 전달합니다.<br/> 직관적인 차트와 색상 구분을 통해 데이터를 시각적으로 효과적으로 표현하며, 사용자 경험을 혁신적으로 개선합니다.<br/> 이를 통해 개인화된 에너지 절약 솔루션을 제공하고, 환경에 기여하는 데 도움을 줍니다."},{"subject":"효율적이고 안정적인 시스템 구축","content":"WERA는 안정적인 백엔드 인프라와 직관적인 프론트엔드 UI/UX를 결합하여, 사용자가 복잡한 에너지 데이터를 손쉽게 이해할 수 있도록 지원했습니다.<br/> 차트 기반의 시각적 디자인과 색상 체계를 통해 정보 전달의 명확성을 극대화하며, 효율적인 데이터 관리 환경을 제공합니다."}],"skills":["front-end development","Architecture design"],"images":["detail0.png","detail1.png","detail2.png","detail3.png"]}},{"code":"incrob","client":"인크로비","projectName":"Incrob","subName":"Incrob","kind":"PC","date":"2023","color":"#47C1CC","summary":"사람과 반려동물 모두를 위한 건강관리 플랫폼 관리자","details":{"descriptions":[{"subject":"플랫폼 운영을 위한 관리자 사이트 구축","content":"WERA는 해당 프로젝트를 통해 플랫폼 운영에 최적화된 관리자 사이트를 설계하고 개발했습니다.<br/> 직관적인 인터페이스와 간결한 화면 구성을 바탕으로, 관리자가 플랫폼의 데이터를 쉽고 빠르게 파악하고 제어할 수 있도록 설계되었습니다."},{"subject":"관리자의 효율성을 극대화하다","content":"플랫폼 운영의 복잡성을 최소화하기 위해 사용자 중심의 UI/UX를 구현했습니다<br/> 데이터 시각화와 검색 기능을 포함한 직관적인 설계로, 관리자들이 최소한의 학습 곡선으로 플랫폼을 효과적으로 관리할 수 있는 환경을 제공합니다."},{"subject":"기능성과 심미성을 겸비한 디자인","content":"플랫폼 관리자 사이트를 설계하며 심미성과 기능성을 동시에 추구했습니다.<br/> 주요 데이터를 강조하는 레이아웃과 사용 편의성을 고려한 인터랙션 설계를 통해, 관리자의 경험을 혁신적으로 개선했습니다.<br/>  이는 직관적이고 간편한 사용자 경험은 운영 효율성과 만족도를 높이는 데 기여했습니다."}],"skills":["front-end development","Architecture design"],"images":["detail0.png","detail1.png","detail2.png"]}},{"code":"channel","client":"채널미들웨어","projectName":"CHANNEL MIDDLEWARE","subName":"CHANNEL MIDDLEWARE","kind":"Mobile & PC","date":"2022 ~ 2024","color":"#1CD0B9","summary":"온라인 재고관리 솔루션","details":{"descriptions":[{"subject":"서비스 가치를 전달하는 디자인과 설계","content":"WERA는 해당 프로젝트를 통해 회사 서비스의 핵심 가치를 명확히 전달하는 소개 사이트를 설계하고 구현했습니다.<br/> 반응형 웹 디자인을 적용하여 모바일, 태블릿, 데스크톱 등 모든 디바이스에서 일관된 사용자 경험을 제공하며, 사용자가 어떤 환경에서도 서비스를 편리하게 이용할 수 있도록 최적화했습니다.<br/> 또한, 사용자가 서비스를 쉽게 이해할 수 있도록 WERA가 직접 제작한 설명 동영상을 통합하여 정보 전달력을 극대화했습니다."},{"subject":"사용자 중심의 관리자 페이지 설계","content":"관리자 페이지는 효율적이고 직관적인 데이터 관리를 지원하도록 설계되었습니다.<br/> 특히, 대시보드에는 사용자 친화적인 차트를 도입해 데이터를 시각적으로 명확하게 표현하고, 관리자가 중요한 정보를 빠르게 파악할 수 있도록 가독성을 극대화했습니다.<br/> 세련된 디자인 요소와 포인트 컬러를 활용해 시각적 완성도를 높이며, 단순함 속에서도 고급스러운 느낌을 제공합니다.<br/>  동영상을 활용한 시각적 자료도 포함되어 관리자는 복잡한 데이터를 쉽게 이해하고 작업 효율성을 높일 수 있습니다."},{"subject":"디자인과 기술의 완벽한 조화","content":"WERA는 CHANNEL MIDDLEWARE의 서비스 소개 사이트와 관리자 페이지를 설계하며, 심플하면서도 세련된 디자인 철학을 유지했습니다.<br/> 디바이스 간의 호환성을 고려한 반응형 UI와 최적화된 인터랙션 디자인을 통해, 사용성과 기능성을 모두 만족하는 결과물을 제공했습니다.<br/> 또한, WERA가 직접 제작한 고품질의 동영상 콘텐츠를 통해 복잡한 정보를 시각적으로 전달하며 사용자와 관리자의 이해를 돕는 데 기여했습니다."}],"skills":["front-end development","Architecture design"],"images":["detail0.png","detail1.png","detail2.png","detail3.png"],"videos":["video.mp4","video-m.mp4"]}},{"code":"bori","client":"사회적협동조합 보아스사회공헌재단","projectName":"BORI","subName":"BORI","kind":"PC","date":"2023","color":"#FFC502","summary":"의료비지원 플랫폼 소개 사이트","details":{"descriptions":[{"subject":"의료비 지원 플랫폼을 돋보이게 하다","content":"WERA는 BORI 프로젝트를 통해 의료비 지원 플랫폼의 핵심 가치를 효과적으로 전달하는 소개 홈페이지를 설계하고 구현했습니다. <br/>사용자 친화적인 정보 구조와 간결하면서도 전문성을 느낄 수 있는 디자인을 통해, 방문자들에게 의료비 지원 플랫폼의 목적과 가치를 명확히 전달합니다."},{"subject":"사회적 가치를 담은 직관적인 UI/UX","content":"의료비 지원이라는 중요한 목적을 강조하기 위해, WERA는 사용자 중심의 UI/UX를 설계했습니다.<br/> 접근성이 뛰어난 디자인과 간결한 인터페이스는 다양한 사용자 계층이 플랫폼의 주요 정보를 빠르고 쉽게 이해할 수 있도록 돕습니다."},{"subject":"브랜드 이미지와 신뢰를 구축하다","content":"BORI 소개 홈페이지는 의료비 지원의 신뢰성을 강화하기 위해, 세련된 시각적 디자인과 안정적인 기술 기반으로 개발되었습니다.<br/> WERA는 명확한 정보 전달과 설득력 있는 스토리텔링을 결합하여, 사용자와 플랫폼 간의 신뢰를 구축하는 데 중점을 두었습니다."}],"skills":["front-end development","Architecture design"],"images":["detail0.png","detail1.png","detail2.png"],"videos":["video.mp4"]}},{"code":"nelow","client":"WI.Plat","projectName":"NELOW","subName":"NELOW","kind":"PC","date":"2022","color":"#5AB5CA","summary":"지능형 종합 누수관리 시스템의 관리자","details":{"descriptions":[{"subject":"시스템 관리를 위한 UI/UX 개선","content":"WERA는 NELOW 프로젝트에서 기존 시스템 관리자 페이지를 Vue.js로 성공적으로 마이그레이션하여, 성능 및 사용자 경험을 획기적으로 개선했습니다.<br/> 새로운 UI/UX는 단순한 관리 기능을 넘어 데이터를 빠르게 처리하고, 시각적 요소와의 조화를 통해 복잡한 정보를 명확히 전달하도록 설계되었습니다."},{"subject":"효율적이고 직관적인 관리자 페이지","content":"관리자 페이지는 복잡한 누수 관리 데이터를 간소화하여 관리자가 주요 정보를 신속하게 확인하고 대응할 수 있도록 설계되었습니다.<br/> 이를 통해 관리자는 누수 문제를 예측, 분석, 보고하는 프로세스를 직관적이고 효율적으로 수행할 수 있습니다."},{"subject":"기술 혁신을 통한 안정적 운영","content":"WERA는 Vue.js의 강력한 프레임워크를 활용해 기존의 제한적 시스템을 모던 웹 환경으로 전환했습니다.<br/> 이 과정에서 안정적인 성능, 확장 가능한 구조, 그리고 사용자 중심의 인터랙션 디자인을 구현하여 관리자 페이지의 운영 효율성을 극대화했습니다."}],"skills":["front-end development","Architecture design"],"images":["detail0.png","detail1.png","detail2.png"]}}]');export{w as _,R as a,I as b,S as c};