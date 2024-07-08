

import {
    TT_TEXT, 
    TT_IMAGE, 
    TT_GALLERY, 
    TT_VIDEO, 
    TT_LIST, 
    TT_MAP, 
    TT_JOBS, 
    TT_QUOTES, 
    TT_COOKIES, 

    CT_MAIN_COMPONENT, 
    CT_CONTENT_COMPONENT, 
    CT_HEADER_COMPONENT, 

    CT_CONTENT_CONTAINER, 
    CT_HEADER_CONTAINER, 
    CT_TEXT_CONTAINER, 
    CT_IMAGE_CONTAINER, 
    CT_VIDEO_CONTAINER, 
    CT_POSTER_CONTAINER, 
    CT_IFRAME, 
    CT_MAP_CONTAINER, 

    CT_JOB_TAB_COTNAINER, 
    CT_JOB_TAB_CONTENT, 
    CT_JOB_F_G_CONTAINER, 
    CT_JOB_FILTER_CONTAINER, 
    CT_JOB_GROUP_CONTAINER, 

    CT_HEADER, 
    CT_CONTENT, 
    CT_BUTTON, 
    CT_IMAGE, 
    
    CT_GALLERY, 
    CT_GALLERY_ITEM, 
    CT_GALLERY_IMG, 
    CT_GALLERY_CAROUSEL, 
    CT_GALLERY_CAROUSEL_CTL, 
    
    CT_VIDEO, 
    CT_VIDEO_POSTER_IMAGE, 

    CT_LIST, 
    CT_LIST_ITEM, 
    CT_LIST_ITEM_IMG, 
    CT_LIST_ITEM_HEAD, 
    CT_LIST_ITEM_CONTENT, 

    CT_MAP, 

    CT_JOB, 
    CT_JOB_CARD, 
    CT_JOB_CARD_HEADER, 
    CT_JOB_FILTER, 
    CT_JOB_GROUP,

    CT_QUOTE, 
    CT_QUOTE_TEXT, 
    CT_QUOTE_ITEM, 
    CT_QUOTE_ITEM_AUTHOR, 
    CT_QUOTE_AUTHOR_IMG, 
    CT_QUOTE_AUTHOR_TXT, 
    CT_LIST_SETTING, 

    CT_COOKIE, 
} from './constants'


import { 
    PageType
} from '@/types/page_builder'


const pages_data: PageType[] = [
    {
        id: 'text-page-1',
        type: TT_TEXT, 
        styles: `.flex{display: flex}
                @media only screen and (max-width: 375px){
                    .flex{display: block;}
                }
                .page-header{font-size:2rem; width: 100%; font-weight:600;padding: 1rem 2rem;}
              .page-content1{padding: 1rem; width: 100%; margin: 0;vertical-align: top;}
              .page-content-item-code{text-transform: uppercase;margin-bottom: 10px;display: block;}`,
        component: `<div class="${CT_MAIN_COMPONENT}">
                        <div class="${CT_CONTENT_COMPONENT} flex">
                            <div class="page-header ${CT_HEADER}">Pushing the limits - playfully.</div>
                            <div class="page-content1 ${CT_TEXT_CONTAINER}">
                                <code class="page-content-item-code">Brand Strategy</code>
                                <div class="${CT_CONTENT}">Our results-driven solutions are based on research and insights that support the strategic growth of your brands and products.</div>
                            </div>
                            <div class="page-content1 ${CT_TEXT_CONTAINER}">
                                <code class="page-content-item-code">Visual Design</code>
                                <div class="${CT_CONTENT}">We have crafted a reputation for providing high quality design that cherishes the tiniest of details.</div>
                            </div>
                        </div>
                    </div>`,
    },
    {
        id: 'text-page-2',
        type: TT_TEXT, 
        styles: `.flex{display: flex}
                @media only screen and (max-width: 375px){
                    .flex{display: block;}
                }
                .page-header{ width: 100%;display: inline-block; font-size:2rem; font-weight:600;padding: 1rem 2rem;}
                .page-content2{padding: 1rem 2rem; margin: 0;  width: 100%;display: inline-block;vertical-align: top;}`,
        component: `<div class="${CT_MAIN_COMPONENT}"><div class="${CT_CONTENT_COMPONENT} flex">
                    <div class="page-header ${CT_HEADER}">Strategic design and engineering for global leading brands.</div>
                    <div class="page-content2 ${CT_CONTENT}">
                        For the last 10 years, we have partnered with some of the world’s leading organizations to help them strategize, design, develop, launch and grow their digitally-enabled brands and products.
                    </div>
                </div>
                </div>`,
    },
    {
        id: 'text-page-3',
        type: TT_TEXT, 
        styles: `.flex{display: flex}
                @media only screen and (max-width: 375px){
                    .flex{display: block;}
                }
                .page-header{font-size:24px; font-weight:600;padding: 1rem 2rem;}
                .page-content3{padding: 1rem 2rem; margin: 0; vertical-align: top;}`,
        component: `<div class="${CT_MAIN_COMPONENT}"><div class="${CT_CONTENT_COMPONENT} flex">
                        <div class="p-inline-block p-width-50">
                            <div class="page-header ${CT_HEADER}">Brand Strategy</div>
                            <div class="page-content3 ${CT_CONTENT}">
                                Our results-driven solutions are based on research and insights that support the strategic growth of your brands and products.
                            </div>
                        </div>
                        <div class="p-inline-block p-width-50">
                            <div class="page-header ${CT_HEADER}">Visual Design</div>
                            <div class="page-content3 ${CT_CONTENT}">
                                We have crafted a reputation for providing high quality design that cherishes the tiniest of details.
                            </div>
                        </div>
                    </div>
                    </div>`,
    },
    {
        id: 'text-page-4',
        type: TT_TEXT, 
        styles: `.flex{display: flex}
                @media only screen and (max-width: 375px){
                    .flex{display: block;}
                }
                .right-section{width: 20%; padding-top: 25px; padding-left: 25px; padding-right: 25px;}
                .width-80{width: 80%}
                .page-header{width: 75%; display: block; font-size:2rem; font-weight:600;padding: 1rem 2rem;}
                .page-content4{padding: 1rem 2rem; margin: 0;vertical-align: top;}
                .page-code4{text-transform: uppercase;font-weight: bold;vertical-align: top;}`,
        component: `<div class="${CT_MAIN_COMPONENT}"><div class="${CT_CONTENT_COMPONENT} flex">
                        <div class="right-section">
                            <code class="page-code4">- services</code>
                        </div>
                        <div class="width-80" >
                            <div class="page-header ${CT_HEADER}">We will make you win across a couple of major digital design fields. </div>
                            <div class=" flex">
                                <div class="page-content4 ${CT_CONTENT}">
                                    Werk is a strategic design and engineering agency with an uncompromised commitment to quality and the generation of true value. For the last 10 years, we have partnered with some of the world’s leading organizations to help them strategize, design, develop, launch and grow their
                                </div>
                                <div class="page-content4 ${CT_CONTENT}">
                                    igitally-enabled brands and products. And even though we have offices in Madrid and Barcelona, our distributed team works from various different locations, gaining you access to the best possible talent, wherever you are.
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    </div>`,
    },
    {
        id: 'image-page-5',
        type: TT_IMAGE, 
        styles: `body{over-flow: hidden;}
                .flex{display: flex; justify-content: center;}
                @media only screen and (max-width: 375px){
                    .flex{display: block;}
                }
                .page-image-content{align-items: center;}
                .page-header{width: 100%; display: block; font-size:2rem; font-weight:600;padding: 1rem 2rem;}
                .page-content5{padding: 1rem 2rem; margin: 0; width: 100%; display: block;vertical-align: top;}
                .page-padding{padding: 1rem 2rem;}
                .page-button5{background-color: #0E181C; color: white; font-size: 16px;padding: 10px 20px; border-radius: 5px;border: none;}
                .${CT_TEXT_CONTAINER}{max-width: 500px;}`,
        component: `<div class="${CT_MAIN_COMPONENT}">
                        <div class="${CT_CONTENT_COMPONENT} flex">
                            <div class="${CT_TEXT_CONTAINER}" >
                                <div class="${CT_HEADER} page-header">Remote Work</div>
                                <div class="${CT_CONTENT} page-content5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</div>
                                <div class="page-padding">
                                    <button class="page-button5 ${CT_BUTTON}" type="button">Read more</button>
                                </div>
                            </div>
                            <div class="${CT_IMAGE_CONTAINER} page-image-content flex" >
                                <img class="${CT_IMAGE}" alt="Don't exist image" src="${`data:image/png'base64,`}" />
                            </div>
                        </div>
                </div>`,
    },
    {
        id: 'image-page-6',
        type: TT_IMAGE, 
        styles: `.flex{display: flex; justify-content: center;}
                @media only screen and (max-width: 375px){
                    .flex{display: block;}
                }
                .page-image-content{align-items: center;}
                .page-header{width: 100%; display: block; font-size:2rem; font-weight:600;padding: 1rem 2rem;}
                .page-content6{padding: 1rem 2rem; margin: 0; width: 100%; display: block;vertical-align: top;}
                .${CT_TEXT_CONTAINER}{max-width: 500px;}`,
        component: `<div class="${CT_MAIN_COMPONENT}" >
                        <div class="${CT_CONTENT_COMPONENT} flex">
                            <div class="${CT_IMAGE_CONTAINER} page-image-content flex" >
                                <img alt="Don't exist image" class="${CT_IMAGE}" src='${`data:image/png'base64,`}'/>
                            </div>
                            <div class="${CT_TEXT_CONTAINER}" >
                                <div class="${CT_HEADER} page-header">Out Mission</div>
                                <div class="${CT_CONTENT} page-content6">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </div>
                                <div class="${CT_CONTENT} page-content6">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy
                                </div>
                            </div>
                        </div>
                    </div>`,
    }, 
    {
        id: 'image-page-7',
        type: TT_IMAGE, 
        styles: `body{overflow: hidden;}
                .flex{display: flex; justify-content: center;}
                @media only screen and (max-width: 375px){
                    .flex{display: block;}
                }
                .width-100{width: 100%;}
                .page-image-content{align-items: center;}
                .page-header{width: 100%; display: block; font-size:2rem; font-weight:600;padding: 1rem 2rem;}
                .page-content7{padding: 1rem 2rem; margin: 0; width: 100%; display: block;vertical-align: top;}
                .page-padding{padding: 1rem 2rem;}
                .page-button7{background-color: #0E181C; color: white; font-size: 16px;padding: 10px 20px; border-radius: 5px;border: none;}
                .${CT_TEXT_CONTAINER}{max-width: 500px;}`,
        component: `<div class="${CT_MAIN_COMPONENT} ">
                        <div class="${CT_CONTENT_COMPONENT} flex">
                            <div class="${CT_TEXT_CONTAINER}" >
                                <div class="${CT_HEADER} page-header">Your journey starts here</div>
                                <div class="${CT_CONTENT} page-content7">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                                <div class="page-padding">
                                    <button class="page-button7 ${CT_BUTTON}" type="button">Read more</button>
                                </div>
                            </div>
                            <div class="${CT_IMAGE_CONTAINER} flex page-image-content" >
                                <img class="${CT_IMAGE} width-100" alt="" src='${`data:image/png'base64,`}'/>
                            </div>
                        </div>
                    </div>`
    }, 
    {
        id: 'image-page-8',
        type: TT_IMAGE, 
        styles: `body{overflow: hidden;}
                .flex{display: flex; justify-content: center;}
                @media only screen and (max-width: 375px){
                    .flex{display: block;}
                }
                .width-100{width: 100%;}
                .page-image-content{align-items: center;}
                .page-header{width: 100%; display: block; font-size:2rem; font-weight:600;padding: 5px 50px 15px 50px;}
                .page-content8{padding: 15px 50px; margin: 0; width: 100%; display: block;vertical-align: top;}
                .page-button8{background-color: #FF7468; color: white; font-size: 16px;padding: 10px 20px; border-radius: 20px;border: none;}
                .page-image{margin-left: auto; margin-right: auto; display: flex;}
                .page-ribbon8{width: 2rem; border-bottom: 5px solid #FF6464; margin-left: 50px; display: block;}
                .page-padding{padding: 1rem 2rem;}
                .${CT_TEXT_CONTAINER}{max-width: 500px;}`,
        component: `<div class="${CT_MAIN_COMPONENT} ">
                        <div class="${CT_CONTENT_COMPONENT} flex">
        
                            <div class="${CT_IMAGE_CONTAINER} page-image-content flex" >
                                <img class="${CT_IMAGE} width-100" alt="" src='${`data:image/png'base64,`}'/>
                            </div>
                            <div class="${CT_TEXT_CONTAINER}" >
                                <div>
                                    <span class="page-ribbon8"><span>
                                </div>
                                <div class="${CT_HEADER} page-header">Built to empower every instructor</div>
                                <div class="${CT_CONTENT} page-content8">
                                    Receive heartfelt contributions instantly & straight to your bank. Guests can choose any amount of money to give, using all major credit cards. It's simple, safe, and 100% secure.
                                </div>
                                <div class="${CT_CONTENT} page-content8">
                                    Receive heartfelt contributions instantly & straight to your bank. Guests can choose any amount of money to give.
                                </div>
                                <div class="page-padding">
                                    <buttom class="${CT_BUTTON} page-button8" type="button">Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>`,
    }, 
    {
        id: 'gallery-page-9', 
        type: TT_GALLERY, 
        styles: `body{overflow: hidden;}
                .flex{display: flex; justify-content: center;}
                @media only screen and (max-width: 375px){
                    .flex{display: block;}
                }
                .v-center{display: flex; align-items: center;}
                .grid-content{display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem; grid-auto-rows: 200px; }
                .width-50{width: 50%;}
                .wh-100{width: 100%; height: 100%;}
                .page-header{display: block; font-size:2rem; font-weight:600;padding: 5px 50px 15px 50px;}
                .page-content8{padding: 15px 50px; margin: 0; display: block;vertical-align: top;}
                .${CT_GALLERY_ITEM}{ overflow: hidden; }
                .${CT_GALLERY_ITEM}:nth-child(2){grid-column: span 2 / span 2; grid-row: span 2 / span 2;}
                .${CT_GALLERY}{max-width: 500px;}
                .${CT_TEXT_CONTAINER}{max-width: 500px;}
                .${CT_GALLERY_IMG}{ width: 100%; height: 100%; object-fit: cover; }
                .${CT_GALLERY_CAROUSEL_CTL}{width: 100%; position: absolute; display: none; justify-content: space-between; padding-left: 1rem; padding-right: 1rem; top: 45%;}
                .${CT_GALLERY_CAROUSEL_CTL} span{background-color: #040404; display: flex; align-items: center; padding: 5px; cursor: pointer;}
                .${CT_GALLERY_CAROUSEL_CTL} span:hover{background-color: #707070;}`, 
        component: `<div class="${CT_MAIN_COMPONENT} ">
                        <div class="${CT_CONTENT_COMPONENT} flex">
                            <div class="${CT_TEXT_CONTAINER} v-center">
                                <div>
                                    <div class="${CT_HEADER} page-header">Remote Work</div>
                                    <div class="${CT_CONTENT} page-content8">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                    </div>
                                </div>
                            </div>
                            <div class="${CT_GALLERY_CAROUSEL}">
                                <div class="${CT_GALLERY_CAROUSEL_CTL}">
                                    <span class="scrollLeft">
                                        <svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 19L1.5 10.5L10 2" stroke="white" stroke-width="2.31818" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </span>
                                    <span class="scrollRight">
                                        <svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 2L10.5 10.5L2 19" stroke="white" stroke-width="2.31818" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </span>
                                </div>

                                <div class="${CT_GALLERY} grid-content">
                                    <div class="${CT_GALLERY_ITEM}"> 
                                        <img class="wh-100 ${CT_GALLERY_IMG}" alt="" src="${`data:image/png'base64,`}" />
                                    </div>
                                    <div class="${CT_GALLERY_ITEM}"> 
                                        <img class="wh-100 ${CT_GALLERY_IMG}" alt="" src="${`data:image/png'base64,`}" />
                                    </div>
                                    <div class="${CT_GALLERY_ITEM}"> 
                                        <img class="wh-100 ${CT_GALLERY_IMG}" alt="" src="${`data:image/png'base64,`}" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <script>
                        $(document).ready(function() {
                            var galleryItemCount = $(".${CT_GALLERY_ITEM}").length
                            if(galleryItemCount > 3) {
                                $(".${CT_GALLERY}")[0].scrollLeft = 100;
                            }
                            var gap = $(".${CT_GALLERY}").css("gap");

                            $(".scrollLeft").on("click", function() {
                                const lastChild = $('.${CT_GALLERY}').children().last();
                                var width = lastChild.css("width");

                                var numVal = Number(gap.split("px")[0]) + Number(width.split("px")[0]);
                                lastChild.css("margin-left", "-" + numVal + "px");
                                $(".${CT_GALLERY}").prepend(lastChild);
                                
                                lastChild.animate({
                                    'margin-left': "0px"
                                }, 500, function() {
                                    lastChild.removeAttr('style');
                                });
                            })

                            $(".scrollRight").on("click", function() {
                                const firstChild = $('.${CT_GALLERY}').children().first();
                                var width = firstChild.css("width");

                                var numVal = Number(gap.split("px")[0]) + Number(width.split("px")[0]);
                                
                                firstChild.animate({
                                    'margin-left': "-" + numVal + "px"
                                }, 500, function() {
                                    firstChild.removeAttr('style');
                                    $(".${CT_GALLERY}").append(firstChild);
                                });
                            })
                        })
                    </script>`
    }, 
    {
        id: 'gallery-page-10', 
        type: TT_GALLERY, 
        styles: `body{overflow: hidden;}
                .flex{display: flex; gap: 1rem; justify-content: center;}
                .flex-wrap{display: flex; flex-wrap: wrap; gap: 1rem; align-items: end; justify-content: center;}
                .${CT_CONTENT_COMPONENT}{width: 100%;}
                .${CT_GALLERY}{max-width: 1000px;}
                .${CT_GALLERY_IMG}{ width: 100%; height: 100%; object-fit: cover; }
                .${CT_GALLERY_ITEM}{height: 200px; flex-basis: calc(33.333% - 1rem); overflow: hidden; }
                .${CT_GALLERY_ITEM}:nth-child(2){height: 300px;}
                .${CT_GALLERY_CAROUSEL_CTL}{width: 100%; position: absolute; display: none; justify-content: space-between; padding-left: 1rem; padding-right: 1rem; top: 45%;}
                .${CT_GALLERY_CAROUSEL_CTL} span{background-color: #040404; display: flex; align-items: center; padding: 5px; cursor: pointer;}
                .${CT_GALLERY_CAROUSEL_CTL} span:hover{background-color: #707070;}`, 
        component: `<div class="${CT_MAIN_COMPONENT} flex">
                        <div class="${CT_CONTENT_COMPONENT} flex">

                            <div class="${CT_GALLERY_CAROUSEL}">
                                <div class="${CT_GALLERY_CAROUSEL_CTL}">
                                    <span class="scrollLeft">
                                        <svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 19L1.5 10.5L10 2" stroke="white" stroke-width="2.31818" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </span>
                                    <span class="scrollRight">
                                        <svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 2L10.5 10.5L2 19" stroke="white" stroke-width="2.31818" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </span>

                                </div>

                                <div class="${CT_GALLERY} flex-wrap">
                                    <div class="${CT_GALLERY_ITEM}"> 
                                        <img alt="" class="${CT_GALLERY_IMG}" src="${`data:image/png'base64,`}" />
                                    </div>
                                    <div class="${CT_GALLERY_ITEM}"> 
                                        <img alt="" class="${CT_GALLERY_IMG}" src="${`data:image/png'base64,`}" />
                                    </div>
                                    <div class="${CT_GALLERY_ITEM}"> 
                                        <img alt="" class="${CT_GALLERY_IMG}" src="${`data:image/png'base64,`}" />
                                    </div>
                                    <div class="${CT_GALLERY_ITEM}"> 
                                        <img alt="" class="${CT_GALLERY_IMG}" src="${`data:image/png'base64,`}" />
                                    </div>
                                    <div class="${CT_GALLERY_ITEM}"> 
                                        <img alt="" class="${CT_GALLERY_IMG}" src="${`data:image/png'base64,`}" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <script>
                        $(document).ready(function() {
                            var galleryItemCount = $(".${CT_GALLERY_ITEM}").length
                            if(galleryItemCount > 3) {
                                $(".${CT_GALLERY}")[0].scrollLeft = 100;
                            }
                            var gap = $(".${CT_GALLERY}").css("gap");

                            $(".scrollLeft").on("click", function() {
                                const lastChild = $('.${CT_GALLERY}').children().last();
                                var width = lastChild.css("width");

                                var numVal = Number(gap.split("px")[0]) + Number(width.split("px")[0]);
                                lastChild.css("margin-left", "-" + numVal + "px");
                                $(".${CT_GALLERY}").prepend(lastChild);
                                
                                lastChild.animate({
                                    'margin-left': "0px"
                                }, 500, function() {
                                    lastChild.removeAttr('style');
                                });
                            })

                            $(".scrollRight").on("click", function() {
                                const firstChild = $('.${CT_GALLERY}').children().first();
                                var width = firstChild.css("width");

                                var numVal = Number(gap.split("px")[0]) + Number(width.split("px")[0]);
                                
                                firstChild.animate({
                                    'margin-left': "-" + numVal + "px"
                                }, 500, function() {
                                    firstChild.removeAttr('style');
                                    $(".${CT_GALLERY}").append(firstChild);
                                });
                            })
                        })
                    </script>`
    }, 
    {
        id: 'gallery-page-11', 
        type: TT_GALLERY, 
        styles: `body{overflow: hidden;}
                .flex{display: flex;}
                @media only screen and (max-width: 375px){
                    .flex{display: block;}
                }
                .page-header{font-size:2rem; font-weight:600;padding: 1rem 2rem;}
                .page-content{padding: 1rem; margin: 0; vertical-align: top;}
                .page-padding{padding: 1rem 2rem;}
                .page-button11{background-color: #0E181C; color: white; font-size: 16px;padding: 10px 20px; border-radius: 5px;border: none;}
                .grid-content{display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1rem;}
                .${CT_GALLERY}{max-width: 500px;}
                .${CT_TEXT_CONTAINER}{max-width: 500px;}
                .${CT_GALLERY_ITEM}{ overflow: hidden; }
                .${CT_GALLERY_ITEM}:nth-child(2){grid-column: span 2 / span 2; }
                .${CT_GALLERY_IMG}{ width: 100%; height: 100%; object-fit: cover; }
                .${CT_GALLERY_CAROUSEL_CTL}{width: 100%; position: absolute; display: none; justify-content: space-between; padding-left: 1rem; padding-right: 1rem; top: 45%;}
                .${CT_GALLERY_CAROUSEL_CTL} span{background-color: #040404; display: flex; align-items: center; padding: 5px; cursor: pointer;}
                .${CT_GALLERY_CAROUSEL_CTL} span:hover{background-color: #707070;}`, 
        component: `<div class="${CT_MAIN_COMPONENT}">
                        <div class="${CT_CONTENT_COMPONENT} flex">
                            <div class="${CT_TEXT_CONTAINER} p-width-40">
                                <div class="${CT_HEADER} page-header">Your journey starts here</div>
                                <div class="${CT_CONTENT} page-content">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </div>
                                <div class="page-padding">
                                    <button class="page-button11 ${CT_BUTTON}">Read more</button>
                                </div>
                            </div>
                            <div class="${CT_GALLERY_CAROUSEL}">
                                <div class="${CT_GALLERY_CAROUSEL_CTL}">
                                    <span class="scrollLeft">
                                        <svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 19L1.5 10.5L10 2" stroke="white" stroke-width="2.31818" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </span>
                                    <span class="scrollRight">
                                        <svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 2L10.5 10.5L2 19" stroke="white" stroke-width="2.31818" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </span>
                                </div>

                                <div class="grid-content ${CT_GALLERY}">
                                    <div class="${CT_GALLERY_ITEM}"> 
                                        <img alt="" class="${CT_GALLERY_IMG}" src="${`data:image/png'base64,`}" />
                                    </div>
                                    <div class="${CT_GALLERY_ITEM}"> 
                                        <img alt="" class="${CT_GALLERY_IMG}" src="${`data:image/png'base64,`}" />
                                    </div>
                                    <div class="${CT_GALLERY_ITEM}"> 
                                        <img alt="" class="${CT_GALLERY_IMG}" src="${`data:image/png'base64,`}" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <script>
                        $(document).ready(function() {
                            var galleryItemCount = $(".${CT_GALLERY_ITEM}").length
                            if(galleryItemCount > 3) {
                                $(".${CT_GALLERY}")[0].scrollLeft = 100;
                            }
                            var gap = $(".${CT_GALLERY}").css("gap");

                            $(".scrollLeft").on("click", function() {
                                const lastChild = $('.${CT_GALLERY}').children().last();
                                var width = lastChild.css("width");

                                var numVal = Number(gap.split("px")[0]) + Number(width.split("px")[0]);
                                lastChild.css("margin-left", "-" + numVal + "px");
                                $(".${CT_GALLERY}").prepend(lastChild);
                                
                                lastChild.animate({
                                    'margin-left': "0px"
                                }, 500, function() {
                                    lastChild.removeAttr('style');
                                });
                            })

                            $(".scrollRight").on("click", function() {
                                const firstChild = $('.${CT_GALLERY}').children().first();
                                var width = firstChild.css("width");

                                var numVal = Number(gap.split("px")[0]) + Number(width.split("px")[0]);
                                
                                firstChild.animate({
                                    'margin-left': "-" + numVal + "px"
                                }, 500, function() {
                                    firstChild.removeAttr('style');
                                    $(".${CT_GALLERY}").append(firstChild);
                                });
                            })
                        })
                    </script>`
    }, 
    {
        id: 'gallery-page-12', 
        type: TT_GALLERY, 
        styles: `.flex{display: flex; gap: 1rem; justify-content: center;}
                .page-header{font-size:2rem; font-weight:600;padding: 1rem 2rem;}
                .page-content{padding: 1rem; margin: 0; vertical-align: top;}
                .gray-pannel12{background-color: #EEEFEF;}
                .grid-content{display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1rem; grid-template-rows: 300px;}
                .${CT_GALLERY}{max-width: 500px;}
                .${CT_TEXT_CONTAINER}{max-width: 500px;}
                .${CT_GALLERY_ITEM} {width: 100%; height: 100%; overflow: hidden; display: flex; align-items: end;}
                .${CT_GALLERY_ITEM}:nth-child(2){grid-column: span 2 / span 2; }
                .${CT_GALLERY_IMG}{ width: 100%; height: 100%; object-fit: cover; }
                .${CT_GALLERY_CAROUSEL_CTL}{width: 100%; position: absolute; display: none; justify-content: space-between; padding-left: 1rem; padding-right: 1rem; top: 45%;}
                .${CT_GALLERY_CAROUSEL_CTL} span{background-color: #040404; display: flex; align-items: center; padding: 5px; cursor: pointer;}
                .${CT_GALLERY_CAROUSEL_CTL} span:hover{background-color: #707070;}`, 
        component: `<div class="${CT_MAIN_COMPONENT} ">
                        <div class="${CT_CONTENT_COMPONENT} flex">
                            <div class="${CT_TEXT_CONTAINER} gray-pannel12">
                                <div class="${CT_HEADER} page-header">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                                <div class="${CT_CONTENT} page-content ">
                                    Magan, Product Designer.
                                </div>
                            </div>
                            <div class="${CT_GALLERY_CAROUSEL}">
                                <div class="${CT_GALLERY_CAROUSEL_CTL}">
                                    <span class="scrollLeft">
                                        <svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 19L1.5 10.5L10 2" stroke="white" stroke-width="2.31818" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </span>
                                    <span class="scrollRight">
                                        <svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 2L10.5 10.5L2 19" stroke="white" stroke-width="2.31818" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </span>
                                </div>

                                <div class="grid-content ${CT_GALLERY}">
                                    <div class="${CT_GALLERY_ITEM}"> 
                                        <img alt="" class="${CT_GALLERY_IMG}" src="${`data:image/png'base64,`}" />
                                    </div>
                                    <div class="${CT_GALLERY_ITEM}"> 
                                        <img alt="" class="${CT_GALLERY_IMG}" src="${`data:image/png'base64,`}" />
                                    </div>
                                    <div class="${CT_GALLERY_ITEM}"> 
                                        <img alt="" class="${CT_GALLERY_IMG}" src="${`data:image/png'base64,`}" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <script>
                        $(document).ready(function() {
                            var galleryItemCount = $(".${CT_GALLERY_ITEM}").length
                            if(galleryItemCount > 3) {
                                $(".${CT_GALLERY}")[0].scrollLeft = 100;
                            }
                            var gap = $(".${CT_GALLERY}").css("gap");

                            $(".scrollLeft").on("click", function() {
                                const lastChild = $('.${CT_GALLERY}').children().last();
                                var width = lastChild.css("width");

                                var numVal = Number(gap.split("px")[0]) + Number(width.split("px")[0]);
                                lastChild.css("margin-left", "-" + numVal + "px");
                                $(".${CT_GALLERY}").prepend(lastChild);
                                
                                lastChild.animate({
                                    'margin-left': "0px"
                                }, 500, function() {
                                    lastChild.removeAttr('style');
                                });
                            })

                            $(".scrollRight").on("click", function() {
                                const firstChild = $('.${CT_GALLERY}').children().first();
                                var width = firstChild.css("width");

                                var numVal = Number(gap.split("px")[0]) + Number(width.split("px")[0]);
                                
                                firstChild.animate({
                                    'margin-left': "-" + numVal + "px"
                                }, 500, function() {
                                    firstChild.removeAttr('style');
                                    $(".${CT_GALLERY}").append(firstChild);
                                });
                            })
                        })
                    </script>`
    }, 
    {
        id: 'video-page-1', 
        type: TT_VIDEO, 
        styles: `body{margin: unset;}
                .flex{display: flex; justify-content: center} 
                @media only screen and (max-width: 375px){
                    .flex{display: block;}
                }
                .page-header{display: block; font-size:2rem; font-weight:600;padding: 1rem 2rem;}
                .page-content{padding: 1rem 2rem; margin: 0; display: block; vertical-align: top;}
                .page-button{background-color: #0E181C; color: white; font-size: 16px;padding: 10px 20px; border-radius: 5px;border: none;}
                .page-padding{padding: 1rem 2rem;}
                .${CT_VIDEO}{width: 100%; height: 100%;position: relative; overflow: hidden; background-image: url(${`data:image/png'base64,`}); background-size: 100% 100%;}
                .${CT_CONTENT_CONTAINER}{max-width: 500px;}
                .${CT_VIDEO_CONTAINER}{max-width:500px; width: 500px; height: 100vh; min-height: 250px; align-items: center; justify-content: center}
                .${CT_POSTER_CONTAINER}{position: relative; height: 100%;}
                .${CT_VIDEO_POSTER_IMAGE}{width: 100%; height: 100%;}
                .play_button{position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); border: none; width: 38px; height: 38px; background: none; cursor: pointer;}
                .${CT_IFRAME}{width: 100%; height: 100%;}`, 
        component: `<div class="${CT_MAIN_COMPONENT} ">
                        <div class="${CT_CONTENT_COMPONENT} flex">
                            <div class="${CT_CONTENT_CONTAINER}">
                                <div class="${CT_HEADER} page-header">Remote Work</div>
                                <div class="${CT_CONTENT} page-content ">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                </div>
                                <div class="page-padding">
                                    <input class="${CT_BUTTON} page-button" type="button" value="Read More">
                                </div>
                            </div>
                            <div class="${CT_VIDEO_CONTAINER} flex">
                                <div class="${CT_VIDEO}">
                                    <iframe src="" frameborder="0" allowfullscreen style="width: 100%; height: 100%;" class="${CT_IFRAME}" ></iframe>
                                    <div class="${CT_POSTER_CONTAINER}">
                                        <img src="" alt='' height="100%" width="100%" class="${CT_VIDEO_POSTER_IMAGE}" >
                                        <button class="play_button"><svg xmlns="http://www.w3.org/2000/svg" class="poster-btn-icon" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <script>
                        $(document).ready(function() {
                            $(".${CT_IFRAME}").on("click", function() {
                                var url = $(".${CT_IFRAME} iframe").attr('src');
                                if (url.indexOf('&autoplay=1') !== -1) {
                                    url = url.replace('&autoplay=1', '&autoplay=0');
                                    $(".${CT_IFRAME} iframe").attr('src', url);
                                } else {
                                    url = url.replace('&autoplay=0', '&autoplay=1');
                                    $(".${CT_IFRAME} iframe").attr('src', url);
                                }
                            })
                        })
                    </script>`, 

    }, 
    {
        id: 'video-page-2', 
        type: TT_VIDEO, 
        styles: `body{margin: unset;}
                .flex{display: flex; justify-content: center;} 
                @media only screen and (max-width: 375px){
                    .flex{display: block;}
                }
                .page-header{display: block; font-size:2rem; font-weight:600;padding: 1rem 2rem;}
                .page-content{padding: 1rem 2rem; margin: 0; display: block; vertical-align: top;}
                .page-padding{padding: 1rem 2rem;}
                .${CT_VIDEO}{width: 100%; height: 100%;position: relative; overflow: hidden; background-image: url(${`data:image/png'base64,`}); background-size: 100% 100%;}
                .${CT_CONTENT_CONTAINER}{ max-width: 500px; min-height: 250px; width: 500px;  }
                .${CT_VIDEO_CONTAINER}{ max-width: 500px; width: 500px; height: 100vh; min-height: 250px;}
                .${CT_POSTER_CONTAINER}{ position: relative; height: 100%; }
                .${CT_VIDEO_POSTER_IMAGE}{width: 100%; height: 100%;}
                .play_button{position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); border: none; width: 38px; height: 38px; background: none; cursor: pointer;}
                .${CT_IFRAME}{width: 100%; height: 100%;}`, 
        component: `<div class="${CT_MAIN_COMPONENT}">
                        <div class="${CT_CONTENT_COMPONENT} flex">
                            <div class="${CT_VIDEO_CONTAINER} flex">
                                <div class="${CT_VIDEO}">
                                    <iframe src="" frameborder="0" allowfullscreen style="width: 100%; height: 100%;" class="${CT_IFRAME}" ></iframe>
                                    <div class="${CT_POSTER_CONTAINER}">
                                        <img src="" alt="" height="100%" width="100%" class="${CT_VIDEO_POSTER_IMAGE}" >
                                        <button class="play_button"><svg xmlns="http://www.w3.org/2000/svg" class="poster-btn-icon" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg></button>
                                    </div>
                                </div>
                            </div>
                            <div class="${CT_CONTENT_CONTAINER}">
                                <div class="${CT_HEADER} page-header">Our Mission</div>
                                <div class="${CT_CONTENT} page-content ">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                </div>
                            </div>
                        <div>
                    </div>
                    <script>
                        $(document).ready(function() {
                            $(".play_button").on("click", function() {
                                $(".${CT_POSTER_CONTAINER}").hide();
                                $(".${CT_IFRAME}").css("display", "block");
                                $(".${CT_VIDEO} iframe").attr("src", $(".${CT_VIDEO} iframe").attr("src")+"?autoplay=1");
                            })
                            $(".${CT_IFRAME}").on("click", function() {
                                var url = $(".${CT_IFRAME} iframe").attr('src');
                                if (url.indexOf('&autoplay=1') !== -1) {
                                    url = url.replace('&autoplay=1', '&autoplay=0');
                                    $(".${CT_IFRAME} iframe").attr('src', url);
                                } else {
                                    url = url.replace('&autoplay=0', '&autoplay=1');
                                    $(".${CT_IFRAME} iframe").attr('src', url);
                                }
                            })
                        })
                    </script>`
    }, 
    {
        id: 'video-page-3', 
        type: TT_VIDEO, 
        styles: `body{margin: unset;}
                .flex{display: flex; justify-content: center;} 
                @media only screen and (max-width: 375px){
                    .flex{display: block;}
                }
                .page-header{display: block; font-size:2rem; font-weight:600;padding: 1rem 2rem;}
                .page-content{padding: 1rem 2rem; margin: 0; display: block; vertical-align: top;}
                .page-padding{padding: 1rem 2rem;}
                .${CT_VIDEO}{width: 100%; height: 100%;position: relative; overflow: hidden; background-image: url(${`data:image/png'base64,`}); background-size: 100% 100%;}
                .${CT_CONTENT_CONTAINER}{max-width: 500px;background-color: #0E181C;color: white;}
                .${CT_VIDEO_CONTAINER}{max-width: 500px; height: 100vh; width: 500px; min-height: 250px;}
                .${CT_POSTER_CONTAINER}{position: relative; height: 100%;}
                .${CT_VIDEO_POSTER_IMAGE}{width: 100%; height: 100%;}
                .play_button{position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); border: none; width: 38px; height: 38px; background: none; cursor: pointer;}
                .${CT_IFRAME}{width: 100%; height: 100%;}`, 
        component: `<div class="${CT_MAIN_COMPONENT}">
                        <div class="${CT_CONTENT_COMPONENT} flex">
                            <div class="${CT_CONTENT_CONTAINER}">
                                <div class="${CT_HEADER} page-header">Remote Work</div>
                                <div class="${CT_CONTENT} page-content ">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                </div>
                            </div>
                            <div class="${CT_VIDEO_CONTAINER} flex">
                                <div class="${CT_VIDEO}">
                                    <iframe src="" frameborder="0" allowfullscreen style="width: 100%; height: 100%;" class="${CT_IFRAME}" ></iframe>
                                    <div class="${CT_POSTER_CONTAINER}">
                                        <img src="" alt="" height="100%" width="100%" class="${CT_VIDEO_POSTER_IMAGE}" >
                                        <button class="play_button"><svg xmlns="http://www.w3.org/2000/svg" class="poster-btn-icon" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <script>
                        $(document).ready(function() {
                            $(".${CT_IFRAME}").on("click", function() {
                                var url = $(".${CT_IFRAME} iframe").attr('src');
                                if (url.indexOf('&autoplay=1') !== -1) {
                                    url = url.replace('&autoplay=1', '&autoplay=0');
                                    $(".${CT_IFRAME} iframe").attr('src', url);
                                } else {
                                    url = url.replace('&autoplay=0', '&autoplay=1');
                                    $(".${CT_IFRAME} iframe").attr('src', url);
                                }
                            })
                        })
                    </script>`
    }, 
    {
        id: 'video-page-4', 
        type: TT_VIDEO, 
        styles: `body{margin: unset;}
                .flex{display: flex;} 
                @media only screen and (max-width: 375px){
                    .flex{display: block;}
                }
                .page-header{display: block; font-size:2rem; font-weight:600;padding: 1rem 2rem;}
                .page-content{padding: 1rem 2rem; margin: 0; display: block; vertical-align: top;}
                .page-button{background-color: #0E181C; color: white; font-size: 16px;padding: 10px 20px; border-radius: 5px;border: none;}
                .page-padding{padding: 1rem 2rem;}
                .${CT_VIDEO}{width: 100%; height: 100%;position: relative; overflow: hidden; background-image: url(${`data:image/png'base64,`}); background-size: 100% 100%;}
                .${CT_CONTENT_CONTAINER}{ max-width: 500px; }
                .${CT_VIDEO_CONTAINER}{ max-width: 500px; height: 100vh; width: 500px; min-height: 250px;}
                .${CT_POSTER_CONTAINER}{position: relative; height: 100%;}
                .${CT_VIDEO_POSTER_IMAGE}{width: 100%; height: 100%;}
                .play_button{position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); border: none; width: 38px; height: 38px; background: none; cursor: pointer;}
                .${CT_IFRAME}{width: 100%; height: 100%;}`, 
        component: `<div class="${CT_MAIN_COMPONENT}">
                        <div class="${CT_CONTENT_COMPONENT} flex">

                            <div class="${CT_CONTENT_CONTAINER}">
                                <div class="${CT_HEADER} page-header">Remote Work</div>
                                <div class="${CT_CONTENT} page-content ">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                </div>
                                <div class="page-padding">
                                    <input class="${CT_BUTTON} page-button" type="button" value="Read More">
                                </div>
                            </div>
                            <div class="${CT_VIDEO_CONTAINER} flex">
                                <div class="${CT_VIDEO}">
                                    <iframe src="" frameborder="0" allowfullscreen style="width: 100%; height: 100%;" class="${CT_IFRAME}" ></iframe>
                                    <div class="${CT_POSTER_CONTAINER}">
                                        <img src="" alt="" height="100%" width="100%" class="${CT_VIDEO_POSTER_IMAGE}" >
                                        <button class="play_button"><svg xmlns="http://www.w3.org/2000/svg" class="poster-btn-icon" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg></button>
                                    </div>
                                </div>
                            </div>
                        <div>
                    </div>
                    <script>
                        $(document).ready(function() {
                            $(".${CT_IFRAME}").on("click", function() {
                                var url = $(".${CT_IFRAME} iframe").attr('src');
                                if (url.indexOf('&autoplay=1') !== -1) {
                                    url = url.replace('&autoplay=1', '&autoplay=0');
                                    $(".${CT_IFRAME} iframe").attr('src', url);
                                } else {
                                    url = url.replace('&autoplay=0', '&autoplay=1');
                                    $(".${CT_IFRAME} iframe").attr('src', url);
                                }
                            })
                        })
                    </script>`
    }, 
    {
        id: 'video-page-5', 
        type: TT_VIDEO, 
        styles: `body{margin: unset;}
                .flex{display: flex; justify-content: center;} 
                @media only screen and (max-width: 375px){
                    .flex{display: block;}
                }
                .page-header{display: block; font-size:2rem; font-weight:600;padding: 1rem 2rem;}
                .page-content{padding: 1rem 2rem; margin: 0; display: block; vertical-align: top;}
                .page-padding{padding: 1rem 2rem;}
                .${CT_VIDEO}{width: 100%; height: 100%;position: relative; overflow: hidden; background-image: url(${`data:image/png'base64,`}); background-size: 100% 100%;}
                .${CT_CONTENT_CONTAINER}{max-width: 500px; background-color: #F5F5F5;}
                .${CT_VIDEO_CONTAINER}{max-width: 500px; height: calc(100vh - 4rem); margin: 2rem; min-height: 250px;}
                .${CT_POSTER_CONTAINER}{position: relative; height: 100%;}
                .${CT_VIDEO_POSTER_IMAGE}{width: 100%; height: 100%;}
                .play_button{position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); border: none; width: 38px; height: 38px; background: none; cursor: pointer;}
                .${CT_IFRAME}{width: 100%; height: 100%;}`, 
        component: `<div class="${CT_MAIN_COMPONENT} ">
                        <div class="${CT_CONTENT_COMPONENT} flex">

                            <div class="${CT_CONTENT_CONTAINER}">
                                <div class="${CT_HEADER} page-header">Our Mission</div>
                                <div class="${CT_CONTENT} page-content ">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                </div>
                            </div>
                            <div class="${CT_VIDEO_CONTAINER} flex">
                                <div class="${CT_VIDEO}">
                                    <iframe src="" frameborder="0" allowfullscreen style="width: 100%; height: 100%;" class="${CT_IFRAME}" ></iframe>
                                    <div class="${CT_POSTER_CONTAINER}">
                                        <img src="" alt="" height="100%" width="100%" class="${CT_VIDEO_POSTER_IMAGE}" >
                                        <button class="play_button"><svg xmlns="http://www.w3.org/2000/svg" class="poster-btn-icon" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <script>
                        $(document).ready(function() {
                            $(".${CT_IFRAME}").on("click", function() {
                                var url = $(".${CT_IFRAME} iframe").attr('src');
                                if (url.indexOf('&autoplay=1') !== -1) {
                                    url = url.replace('&autoplay=1', '&autoplay=0');
                                    $(".${CT_IFRAME} iframe").attr('src', url);
                                } else {
                                    url = url.replace('&autoplay=0', '&autoplay=1');
                                    $(".${CT_IFRAME} iframe").attr('src', url);
                                }
                            })
                        })
                    </script>`
    }, 
    {
        id: 'list-page-1', 
        type: TT_LIST, 
        styles: `body{margin: 0px;}.page-header{display: block; font-size:2rem; font-weight:600;padding: 1rem 2rem;}
                .page-content{padding: 1rem 2rem; margin: 0; display: block; vertical-align: top;}
                .page-list-button{background-color: #ff6c3c; color: white; box-shadow: 3px 3px 2px 0 #000000; border: none; padding: 10px 25px; font-size: 16px; cursor: pointer;}
                .text-center{text-align: center;}
                .page-padding{padding: 1rem 2rem;}
                .${CT_LIST}{display: grid; gap: 1rem;grid-template-columns: repeat(3, minmax(0, 1fr)); }
                .${CT_LIST_ITEM_HEAD}{font-size: 20px; font-weight: 600; margin-top: 20px; margin-bottom: 20px;} 
                .${CT_LIST_ITEM}{padding: 10px;}
                @media only screen and (max-width: 375px){
                    .${CT_LIST}{display: block;}
                }`, 
        component: `<div class="${CT_MAIN_COMPONENT}" splist="LC_3 LGM RABottom LIALeft" splistitem="LCenter">
                        <div class="${CT_CONTENT_COMPONENT}">
                            <div class="text-center ">
                                <div class="${CT_HEADER} page-header">Under Development The </div>
                                <div class="${CT_CONTENT} page-content p-inline-block p-width-80">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                </div>
                            </div>
                            <div class="${CT_LIST}">
                                <div class="${CT_LIST_ITEM} text-center">
                                    <img src="${`data:image/png'base64,`}" height="100" class="${CT_LIST_ITEM_IMG}" />
                                    <div >
                                        <div class="${CT_LIST_ITEM_HEAD}">Odblo LMS 4.4</div>
                                        <div class="${CT_LIST_ITEM_CONTENT}">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                        </div>
                                    </div>
                                </div>
                                <div class="${CT_LIST_ITEM} text-center">
                                    <img src="${`data:image/png'base64,`}" height="100" class="${CT_LIST_ITEM_IMG}" />
                                    <div >
                                        <div class="${CT_LIST_ITEM_HEAD}">Odblo LMS 4.4</div>
                                        <div class="${CT_LIST_ITEM_CONTENT}">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                        </div>
                                    </div>
                                </div>
                                <div class="${CT_LIST_ITEM} text-center">
                                    <img src="${`data:image/png'base64,`}" height="100" class="${CT_LIST_ITEM_IMG}" />
                                    <div >
                                        <div class="${CT_LIST_ITEM_HEAD}">Odblo LMS 4.4</div>
                                        <div class="${CT_LIST_ITEM_CONTENT}">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="text-center page-padding">
                                <input type="button" class="page-list-button" value="See full loadmap">
                            </div>
                        </div>
                    </div>`
    }, 
    {
        id: 'list-page-2', 
        type: TT_LIST, 
        styles: `body{margin: 0px;}
                .flex{display: flex}
                @media only screen and (max-width: 375px){
                    .flex{display: block;}
                    .${CT_LIST}{display: block;}
                }
                .page-header-list-2{font-size: 2rem; font-weight: 700; text-transform: uppercase;padding: 15px;}
                .font-24{font-size: 24px;padding-right: 20px;}
                .page-padding{padding: 1rem 2rem;}
                .page_list-number{color: #ABABAB; font-size: 18px;padding: 10px 0px 0px 11px; width: 10%;}
                .${CT_LIST}{display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); }
                .list-item-header{font-size: 24px; font-weight: 600; padding: 5px;}
                .list-item-content{padding: 5px;}
                .p-list-item-2{ padding-bottom: 20px; padding-right: 20px; border-bottom: 1px solid #ABABAB; border-right: 1px solid #ABABAB;}
                .p-list-item-2:nth-child(n+3){padding-top: 20px;}
                .p-list-item-2:nth-child(2n){border-right: none;}
                .p-list-item-2:nth-child(n+3){border-bottom: none;}`, 
        component: `<div class="${CT_MAIN_COMPONENT}">
                        <div class="${CT_CONTENT_COMPONENT}">

                            <div class="page-padding">
                                <div class="${CT_HEADER} page-header-list-2"><span class="font-24">&#x25A0;</span>Why Choose Us </div>
                            </div>
                            <div class="${CT_LIST} ">
                                <div class="${CT_LIST_ITEM} flex p-list-item-2">
                                    <div class="page_list-number">01</div>
                                    <div class="">
                                        <div class="list-item-header">The Best Price</div>
                                        <div class="list-item-content">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                        </div>
                                    </div>
                                </div>
                                <div class="${CT_LIST_ITEM} flex p-list-item-2">
                                    <div class="page_list-number">01</div>
                                    <div class="">
                                        <div class="list-item-header ${CT_LIST_ITEM_HEAD}">The Best Price</div>
                                        <div class="list-item-content ${CT_LIST_ITEM_CONTENT}">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                        </div>
                                    </div>
                                </div>
                                <div class="${CT_LIST_ITEM} flex p-list-item-2">
                                    <div class=" page_list-number">01</div>
                                    <div class="">
                                        <div class="list-item-header ${CT_LIST_ITEM_HEAD}">The Best Price</div>
                                        <div class="list-item-content ${CT_LIST_ITEM_CONTENT}">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                        </div>
                                    </div>
                                </div>
                                <div class="${CT_LIST_ITEM} flex p-list-item-2">
                                    <div class=" page_list-number ">01</div>
                                    <div class="">
                                        <div class="list-item-header ${CT_LIST_ITEM_HEAD}">The Best Price</div>
                                        <div class="list-item-content ${CT_LIST_ITEM_CONTENT}">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>`
    }, 
    {
        id: 'list-page-3', 
        type: TT_LIST, 
        styles: `body{margin: unset}
                .page-header{font-size: 2rem; font-weight: 600; padding: 1rem 2rem;}
                .page-content{padding: 1rem 2rem;}
                .page-list-button-3{background-color: #5b7cfe; color: white; border-radius: 30px; border: 1px solid #7186e2;padding: 10px 25px;}
                .p-list-item-3{border-radius: 10px; border: 1px solid #ABABAB; padding: 10px; }
                .page-padding-list-3{padding: 20px 0px; display: flex;}
                .text-center{text-align: center;}
                .width-50{width: 50%}
                .center-end {display: flex; align-items: center; justify-content: end;}
                .${CT_LIST}{display: grid; gap: 1rem;grid-template-columns: repeat(3, minmax(0, 1fr)); }
                .${CT_LIST_ITEM_HEAD}{font-size: 20px; font-weight: 600; margin-top: 20px; margin-bottom: 20px;} 
                .${CT_LIST_ITEM}{padding: 10px;}
                @media only screen and (max-width: 375px){
                    .${CT_LIST}{display: block;}
                }`, 
        component: `<div class="${CT_MAIN_COMPONENT} page-padding">
                        <div class="${CT_CONTENT_COMPONENT}">
                            <div class="page-padding-list-3">
                                <div class="width-50">
                                    <div class="${CT_HEADER} page-header">Our Features </div>
                                    <div class="${CT_CONTENT} page-contentp-width-80">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                    </div>
                                </div>
                                <div class="width-50 center-end">
                                    <input type="button" class="page-list-button-3" value="Meet our experts">
                                </div>
                            </div>
                            <div class="${CT_LIST} text-center">
                                <div class="${CT_LIST_ITEM} p-list-item-3">
                                    <img src="${`data:image/png'base64,`}" height="100" class="${CT_LIST_ITEM_IMG}" />
                                    <div >
                                        <div class="list-item-header ${CT_LIST_ITEM_HEAD}" >Odblo LMS 4.4</div>
                                        <div class="list-item-content ${CT_LIST_ITEM_CONTENT}" >
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                        </div>
                                    </div>
                                </div>
                                <div class="${CT_LIST_ITEM} p-list-item-3">
                                    <img src="${`data:image/png'base64,`}" height="100" class="${CT_LIST_ITEM_IMG}" />
                                    <div >
                                        <div class="list-item-header ${CT_LIST_ITEM_HEAD}"  >Odblo LMS 4.4</div>
                                        <div class="list-item-content ${CT_LIST_ITEM_CONTENT}"  >
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                        </div>
                                    </div>
                                </div>
                                <div class="${CT_LIST_ITEM} p-list-item-3">
                                    <img src="${`data:image/png'base64,`}" height="100" class="${CT_LIST_ITEM_IMG}" />
                                    <div >
                                        <div class="list-item-header ${CT_LIST_ITEM_HEAD}">Odblo LMS 4.4</div>
                                        <div class="list-item-content ${CT_LIST_ITEM_CONTENT}">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>`
    }, 
    {
        id: 'list-page-4', 
        type: TT_LIST, 
        styles: `body{margin: unset; overflow: hidden;}
                .flex{display: flex; justify-content: center;}
                .list-4-item-header{font-size: 18px; font-weight: 700;text-align: left;padding-left: 20px;}
                .list-4-item-content{color: #ABABAB;text-align: left;padding-left: 20px;}
                .list-4-image{width: 100%;}
                .text-center{text-align: center;}
                .page-padding{padding: 1rem 2rem;}
                .${CT_LIST}{display: grid; gap: 1rem;grid-template-columns: repeat(4, minmax(0, 1fr)); max-width: 1000px;}
                .${CT_LIST_ITEM_HEAD}{font-size: 20px; font-weight: 600; margin-top: 20px; margin-bottom: 20px;} 
                .${CT_LIST_ITEM}{padding: 10px;}
                @media only screen and (max-width: 375px){
                    .${CT_LIST}{display: block;}
                }`, 
        component: `<div class="${CT_MAIN_COMPONENT} page-padding">
                        <div class="${CT_CONTENT_COMPONENT} flex">
                            <div class="${CT_LIST} text-center">
                                <div class="${CT_LIST_ITEM}">
                                    <img width='100' src="${`data:image/png'base64,`}" class="list-4-image ${CT_LIST_ITEM_IMG}" />
                                    <div>
                                        <div class="list-4-item-header ${CT_LIST_ITEM_HEAD}">Arnold Sulvi</div>
                                        <div class="list-4-item-content ${CT_LIST_ITEM_CONTENT}">founder</div>
                                    </div>
                                </div>
                                <div class="${CT_LIST_ITEM}">
                                    <img width='100' src="${`data:image/png'base64,`}" class="list-4-image ${CT_LIST_ITEM_IMG}" />
                                    <div>
                                        <div class="list-4-item-header ${CT_LIST_ITEM_HEAD}">Arnold Sulvi</div>
                                        <div class="list-4-item-content ${CT_LIST_ITEM_CONTENT}">founder</div>
                                    </div>
                                </div>
                                <div class="${CT_LIST_ITEM}">
                                    <img width='100' src="${`data:image/png'base64,`}" class="list-4-image ${CT_LIST_ITEM_IMG}" />
                                    <div>
                                        <div class="list-4-item-header ${CT_LIST_ITEM_HEAD}">Arnold Sulvi</div>
                                        <div class="list-4-item-content ${CT_LIST_ITEM_CONTENT}">founder</div>
                                    </div>
                                </div>
                                <div class="${CT_LIST_ITEM}">
                                    <img width='100' src="${`data:image/png'base64,`}" class="list-4-image ${CT_LIST_ITEM_IMG}" />
                                    <div>
                                        <div class="list-4-item-header ${CT_LIST_ITEM_HEAD}">Arnold Sulvi</div>
                                        <div class="list-4-item-content ${CT_LIST_ITEM_CONTENT}">founder</div>
                                    </div>
                                </div>
                                <div class="${CT_LIST_ITEM}">
                                    <img width='100' src="${`data:image/png'base64,`}" class="list-4-image ${CT_LIST_ITEM_IMG}" />
                                    <div>
                                        <div class="list-4-item-header ${CT_LIST_ITEM_HEAD}">Arnold Sulvi</div>
                                        <div class="list-4-item-content ${CT_LIST_ITEM_CONTENT}">founder</div>
                                    </div>
                                </div>
                                <div class="${CT_LIST_ITEM}">
                                    <img width='100' src="${`data:image/png'base64,`}" class="list-4-image ${CT_LIST_ITEM_IMG}" />
                                    <div>
                                        <div class="list-4-item-header ${CT_LIST_ITEM_HEAD}">Arnold Sulvi</div>
                                        <div class="list-4-item-content ${CT_LIST_ITEM_CONTENT}">founder</div>
                                    </div>
                                </div>
                                <div class="${CT_LIST_ITEM}">
                                    <img width='100' src="${`data:image/png'base64,`}" class="list-4-image ${CT_LIST_ITEM_IMG}" />
                                    <div>
                                        <div class="list-4-item-header ${CT_LIST_ITEM_HEAD}">Arnold Sulvi</div>
                                        <div class="list-4-item-content ${CT_LIST_ITEM_CONTENT}">founder</div>
                                    </div>
                                </div>
                                <div class="${CT_LIST_ITEM}">
                                    <img width='100' src="${`data:image/png'base64,`}" class="list-4-image ${CT_LIST_ITEM_IMG}" />
                                    <div>
                                        <div class="list-4-item-header ${CT_LIST_ITEM_HEAD}">Arnold Sulvi</div>
                                        <div class="list-4-item-content ${CT_LIST_ITEM_CONTENT}">founder</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`
    }, 
    {
        id: 'map-page-1', 
        type: TT_MAP, 
        styles: `.page-map-height {height: 500px;}
                .map-page-header{width: 40%; display: inline-block; font-size:2rem; font-weight:600;padding: 1rem 2rem;}
                .map-page-content{padding: 1rem; margin: 0; width: 30%; display: inline-block;vertical-align: top;}`, 
        component: `<div class="${CT_MAIN_COMPONENT}">
                        <div class="${CT_CONTENT_CONTAINER}">
                            <div class="">
                                <div class="${CT_HEADER} map-page-header">Our Offices</div>
                            </div>
                            <div  class="${CT_MAP_CONTAINER}">
                                <iframe class="${CT_MAP} page-map-height col-12" src="https://maps.google.com/maps?&q=London UK&z=9&t=q&output=embed" allowfullscreen="" loading="lazy"></iframe>
                            </div>
                        
                        </div>
                    </div>`
    },
    {
        id: 'map-page-2', 
        type: TT_MAP, 
        styles: `.page-map-height {height: 500px;}
                .flex{display: flex; align-items: center;}
                @media only screen and (max-width: 375px){
                    .flex{display: block;}
                }
                .width-50{width: 50%;}
                .map-page-header{ font-size:2rem; font-weight:600;padding: 1rem 2rem;}
                .map-page-content{padding: 1rem; margin: 0; vertical-align: top;}`, 
        component: `<div class="${CT_MAIN_COMPONENT}">
                        <div class="${CT_CONTENT_COMPONENT}">

                            <div class="${CT_CONTENT_CONTAINER} flex">
                                <div class="width-50 ">
                                    <div class="${CT_HEADER} map-page-header">Your journey starts here</div>
                                    <div class="${CT_CONTENT} map-page-content">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                    </div>
                                </div>
                                <div class="${CT_MAP_CONTAINER} width-50">
                                    <iframe class="${CT_MAP} page-map-height col-12" src="https://maps.google.com/maps?&q=London UK&z=9&t=q&output=embed"></iframe>
                                </div>                    
                            </div>

                        </div>
                    </div>`
    },
    {
        id: 'map-page-3', 
        type: TT_MAP, 
        styles: `.page-panel-map-2{background-color: #222222; color: #FFFFFF ;}
                .page-map-height {height: 500px;}
                .flex{display: flex;}
                @media only screen and (max-width: 375px){
                    .flex{display: block;}
                }
                .width-50{width: 50%;}
                .map-page-header{ font-size:2rem; font-weight:600;padding: 1rem 2rem; }
                .map-page-content{ padding: 1rem; margin: 0; vertical-align: top; }`, 
        component: `<div class="${CT_MAIN_COMPONENT}">
                        <div class="${CT_CONTENT_COMPONENT}">
                            <div class="${CT_CONTENT_CONTAINER} flex">
                                <div class="width-50 page-panel-map-2">
                                    <div class="${CT_HEADER} map-page-header">Your journey starts here</div>
                                    <div class="${CT_CONTENT} map-page-content">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                    </div>
                                </div>
                                <div class="${CT_MAP_CONTAINER} width-50">
                                    <iframe class="${CT_MAP} page-map-height col-12" src="https://maps.google.com/maps?&q=London UK&z=9&t=q&output=embed"></iframe>
                                </div>
                            </div>

                        </div>
                    </div>`
    },
    {
        id: 'map-page-4', 
        type: TT_MAP, 
        styles: `.page-map-height {height: 500px;}
                .flex{display: flex;}
                @media only screen and (max-width: 375px){
                    .flex{display: block;}
                }
                .width-50{width: 50%;}
                .map-page-header{ font-size:2rem; font-weight:600;padding: 1rem 2rem;}
                .map-page-content{padding: 1rem; margin: 0; vertical-align: top;}`, 
        component: `<div class="${CT_MAIN_COMPONENT}">
                        <div class="${CT_CONTENT_COMPONENT}">

                            <div class="${CT_CONTENT_CONTAINER} flex">
                                <div class="width-50 ">
                                    <div class="${CT_HEADER} map-page-header">Your journey starts here</div>
                                    <div class="${CT_CONTENT} map-page-content">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                    </div>
                                </div>
                                <div class="${CT_MAP_CONTAINER} width-50">
                                    <iframe class="${CT_MAP} page-map-height col-12" src="https://maps.google.com/maps?&q=London UK&z=9&t=q&output=embed"></iframe>
                                </div>                    
                            </div>

                        </div>
                    </div>`
    },
    {
        id: 'job-page-1',
        type: TT_JOBS, 
        styles: `.flex{display: flex;}
                @media only screen and (max-width: 375px){
                    .flex{display: block;}
                }
                .${CT_MAIN_COMPONENT}{padding: 1rem;}
                .nav-tabs .job-page-nav-link-1.active{border-bottom-color: #000000;border-top: none;border-left: none;border-right: none;font-weight: bold;}
                .job-page-nav-link-1{color: #000000;}
                .job-page-filter{border: 2px solid #EAECF0; padding: 0.5rem; border-radius: 6px;} 
                .job-page-list-item{margin: 0.25rem; border: 2px solid #EAECF0; border-radius: 6px; display: block; color: black; text-decoration: none;padding-top: 0.25rem; padding-bottom: 0.25rem; padding-left: 0.5rem; font-weight: 500; width: 100%;} 
                .job-page-list-item.active{ color: #757575 !important;}
                .${CT_JOB}>div{grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; padding: 0.25rem;}
                .${CT_JOB}.show>div{display: grid !important;}
                .${CT_JOB_CARD}{border: 1px solid gray; border-radius: 6px; display: flex; align-items: center; padding: 1rem;}
                .${CT_JOB} .job-page-border-t{border-top: 2px solid #EAECF0; font-weight: 600;}
                .${CT_JOB} .job-page-border-t:first-child{border: none; font-weight: 500 !important;}
                .${CT_JOB} .job-page-border-t:first-child th{font-weight: 500 !important;}
                .${CT_JOB_CARD} p{margin-bottom: none;}`, 
        component: `<div class="${CT_MAIN_COMPONENT}" jobcardlayout="JTS_L JIP_M" jobgroup="jgt-department jgs-true">
                        <div class="${CT_HEADER_CONTAINER}">
                            <h2 class="${CT_HEADER}">Open positions</h2>
                        </div>
                        <div class="${CT_CONTENT_CONTAINER}">

                            <nav class="${CT_JOB_TAB_COTNAINER} mb-2">
                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button class="nav-link job-page-nav-link-1" id="nav-home-tab" data-bs-toggle="tab" data-bs-target=".all-departments" type="button" role="tab" aria-selected="true">All Departments</button>
                                    <button class="nav-link job-page-nav-link-1" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target=".marketing" type="button" role="tab" aria-selected="false">Marketing</button>
                                </div>
                            </nav>

                            <div class="${CT_JOB_TAB_CONTENT} tab-content" >

                                <div class="${CT_JOB_F_G_CONTAINER} flex">
                                    <div class="${CT_JOB_GROUP_CONTAINER} mx-2">
                                        <div class="fw-bolder my-3">New York</div>
                                    </div>

                                    <div class="${CT_JOB_FILTER_CONTAINER}">

                                    </div>
                                </div>

                                <div class="${CT_JOB} tab-pane fade show active all-departments" >
                                    <div class="col-12">

                                        <div class="${CT_JOB_CARD}">
                                            <div>
                                                <h5 class="${CT_JOB_CARD_HEADER} mt-1">Senior marketer (sample)</h5>
                                                <p>New York, New York, New York</p>
                                            </div>
                                            <button type="button" class="btn btn-dark ms-auto">Read more</button>
                                        </div>
                                        
                                        <div class="${CT_JOB_CARD}">
                                            <div>
                                                <h5 class="${CT_JOB_CARD_HEADER} mt-1">Senior marketer (sample)</h5>
                                                <p>New York, New York, New York</p>
                                            </div>
                                            <button type="button" class="btn btn-dark ms-auto">Read more</button>
                                        </div>

                                    </div>
                                </div>
                                <div class="${CT_JOB} tab-pane fade marketing" >
                                    <div>
                                        <div class="no-gutters gap-2">
                                            <div class="${CT_JOB_CARD}">
                                                <div>
                                                    <h5 class="${CT_JOB_CARD_HEADER} mt-1">Senior marketer (sample)</h5>
                                                    <p>New York, New York, New York</p>
                                                </div>
                                                <button type="button" class="btn btn-dark ms-auto">Read more</button>
                                            </div>
                                        </div>
                                        <div class="no-gutters gap-2">
                                            <div class="${CT_JOB_CARD}">
                                                <div>
                                                    <h5 class="${CT_JOB_CARD_HEADER} mt-1">Senior marketer (sample)</h5>
                                                    <p>New York, New York, New York</p>
                                                </div>
                                                <button type="button" class="btn btn-dark ms-auto">Read more</button>
                                            </div>
                                        </div>
                                        <div class="no-gutters gap-2">
                                            <div class="${CT_JOB_CARD}">
                                                <div>
                                                    <h5 class="${CT_JOB_CARD_HEADER} mt-1">Senior marketer (sample)</h5>
                                                    <p>New York, New York, New York</p>
                                                </div>
                                                <button type="button" class="btn btn-dark ms-auto">Read more</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <script></script>`
    },
    {
        id: 'job-page-2', 
        type: TT_JOBS, 
        styles: `.job-page-bg-2{background-color: #222222; color: white;}
                .flex{display: flex;}
                @media only screen and (max-width: 375px){
                    .flex{display: block;}
                }
                .${CT_MAIN_COMPONENT}{padding: 1rem;}
                .nav-tabs .job-page-nav-link-1.active{border-bottom-color: #000000;border-top: none;border-left: none;border-right: none;font-weight: bold;}
                .job-page-nav-link-1{color: #FFFFFF;}
                .job-page-filter{border: 2px solid #EAECF0; padding: 0.5rem; border-radius: 6px;} 
                .job-page-list-item{margin: 0.25rem; border: 2px solid #EAECF0; border-radius: 6px; display: block; color: black; text-decoration: none;padding-top: 0.25rem; padding-bottom: 0.25rem; padding-left: 0.5rem; font-weight: 500; width: 100%;} 
                .job-page-list-item.active{ color: #757575 !important;}
                .${CT_JOB_TAB_COTNAINER}, .${CT_JOB_F_G_CONTAINER}{display: none;}
                .${CT_JOB}>div{grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; padding: 0.25rem;}
                .${CT_JOB}.show>div{display: grid !important;}
                .${CT_JOB_CARD}{border: 1px solid gray; border-radius: 6px; display: flex; align-items: center; padding: 1rem;}
                .${CT_JOB} .job-page-border-t{border-top: 2px solid #EAECF0; font-weight: 600;}
                .${CT_JOB} .job-page-border-t:first-child{border: none; font-weight: 500 !important;}
                .${CT_JOB} .job-page-border-t:first-child th{font-weight: 500 !important;}
                .${CT_JOB} button{background-color: #FFFFFF; color: #000000;}
                .${CT_JOB_CARD} p{margin-bottom: none;}`, 
        component: `<div class="${CT_MAIN_COMPONENT} job-page-bg-2" jobcardlayout="JTS_L JIP_M" jobgroup="jgt-department jgs-true">
                        <div class="${CT_HEADER_CONTAINER}">
                            <h2 class="${CT_HEADER}">Open positions</h2>
                        </div>
                        <div class="${CT_CONTENT_CONTAINER}">

                            <nav class="${CT_JOB_TAB_COTNAINER} mb-2">
                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button class="nav-link job-page-nav-link-1" id="nav-home-tab" data-bs-toggle="tab" data-bs-target=".all-departments" type="button" role="tab" aria-selected="true">All Departments</button>
                                    <button class="nav-link job-page-nav-link-1" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target=".marketing" type="button" role="tab" aria-selected="false">Marketing</button>
                                </div>
                            </nav>

                            <div class="${CT_JOB_TAB_CONTENT} tab-content" >

                                <div class="${CT_JOB_F_G_CONTAINER} flex">
                                    <div class="${CT_JOB_GROUP_CONTAINER} mx-2">
                                        <div class="fw-bolder my-3">New York</div>
                                    </div>

                                    <div class="${CT_JOB_FILTER_CONTAINER}">

                                    </div>
                                </div>

                                <div class="${CT_JOB} tab-pane fade show active all-departments" >
                                    <div class="col-12">

                                        <div class="${CT_JOB_CARD}">
                                            <div>
                                                <h5 class="${CT_JOB_CARD_HEADER} mt-1">Senior marketer (sample)</h5>
                                                <p>New York, New York, New York</p>
                                            </div>
                                            <button type="button" class="btn btn-dark ms-auto">Read more</button>
                                        </div>

                                    </div>
                                </div>
                                <div class="${CT_JOB} tab-pane fade marketing" >

                                </div>
                            </div>

                        </div>
                    </div>`
    },
    {
        id: 'job-page-3', 
        type: TT_JOBS, 
        styles: `.flex{display: flex;}
                @media only screen and (max-width: 375px){
                    .flex{display: block;}
                }
                .${CT_MAIN_COMPONENT}{padding: 1rem;}
                .nav-tabs .job-page-nav-link-1.active{border-left-color: #000000;border-top: none;border-bottom: none;border-right: none;font-weight: bold; border-radius: unset; border-width: 2px;}
                .job-page-nav-link-1{color: #000000;}
                .job-page-filter{border: 2px solid #EAECF0; padding: 0.5rem; border-radius: 6px;} 
                .job-page-list-item{margin: 0.25rem; border: 2px solid #EAECF0; border-radius: 6px; display: block; color: black; text-decoration: none;padding-top: 0.25rem; padding-bottom: 0.25rem; padding-left: 0.5rem; font-weight: 500; width: 100%;} 
                .job-page-list-item.active{ color: #757575 !important;}
                .${CT_JOB}>div{grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; padding: 0.25rem;}
                .${CT_JOB}.show>div{display: grid !important;}
                .${CT_JOB_CARD}{border: 1px solid gray; border-radius: 6px; display: flex; align-items: center; padding: 1rem;}
                .${CT_JOB} .job-page-border-t{border-top: 2px solid #EAECF0; font-weight: 600;}
                .${CT_JOB} .job-page-border-t:first-child{border: none; font-weight: 500 !important;}
                .${CT_JOB} .job-page-border-t:first-child th{font-weight: 500 !important;}
                .${CT_JOB_CARD} p{margin-bottom: none;}
                .${CT_CONTENT_CONTAINER}{display: flex;}
                .${CT_CONTENT_CONTAINER} .nav-tabs{border-width: 0; flex-direction: row;}
                .${CT_JOB_TAB_CONTENT}{display: flex;}`, 
        component: `<div class="${CT_MAIN_COMPONENT}" jobcardlayout="" jobgroup="">
                        <div class="${CT_HEADER_CONTAINER}">
                            <h2 class="${CT_HEADER}">Open positions</h2>
                        </div>
                        <div class="${CT_CONTENT_CONTAINER}">

                            <nav class="${CT_JOB_TAB_COTNAINER} mb-2">
                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button class="nav-link job-page-nav-link-1 active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target=".all-departments" type="button" role="tab" aria-selected="true">All Departments</button>
                                    <button class="nav-link job-page-nav-link-1" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target=".marketing" type="button" role="tab" aria-selected="false">Marketing</button>
                                </div>
                            </nav>

                            <div class="${CT_JOB_TAB_CONTENT} tab-content" >

                                <div class="${CT_JOB_F_G_CONTAINER} flex">
                                    <div class="${CT_JOB_GROUP_CONTAINER} mx-2">
                                    </div>

                                    <div class="${CT_JOB_FILTER_CONTAINER}">
                                        <div id="i52ah" class="job-page-filter gjs-selected">
                                            <div class="">Filter</div>
                                            <div class="type_job_filter">
                                                <input class="job-page-list-item active search-text col" type="search" placeholder="Search text" key="searchInput">
                                                <select class="job-page-list-item col" key="job_title">
                                                    <option>All Job title</option>
                                                    <option key="Job Title 1">Job Title 1</option>
                                                    <option key="Job Title 2">Job Title 2</option>
                                                    <option key="Job Title 3">Job Title 3</option>
                                                    <option key="Job Title 4">Job Title 4</option>
                                                    <option key="Job Title 5">Job Title 5</option>
                                                </select>
                                                <select class="job-page-list-item col" key="category">
                                                    <option>All Category</option>
                                                    <option key="category 1">category 1</option>
                                                    <option key="category 2">category 2</option>
                                                    <option key="category 5">category 5</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="${CT_JOB} tab-pane fade show active all-departments" >
                                    <div class="col-12">

                                        <div class="${CT_JOB_CARD}">
                                            <div>
                                                <h5 class="${CT_JOB_CARD_HEADER} mt-1">Senior marketer (sample)</h5>
                                                <p>New York, New York, New York</p>
                                            </div>
                                            <button type="button" class="btn btn-dark ms-auto">Read more</button>
                                        </div>
                                        
                                        <div class="${CT_JOB_CARD}">
                                            <div>
                                                <h5 class="${CT_JOB_CARD_HEADER} mt-1">Senior marketer (sample)</h5>
                                                <p>New York, New York, New York</p>
                                            </div>
                                            <button type="button" class="btn btn-dark ms-auto">Read more</button>
                                        </div>

                                    </div>
                                </div>
                                <div class="${CT_JOB} tab-pane fade marketing" >
                                    <div>
                                        <div class="no-gutters gap-2">
                                            <div class="${CT_JOB_CARD}">
                                                <div>
                                                    <h5 class="${CT_JOB_CARD_HEADER} mt-1">Senior marketer (sample)</h5>
                                                    <p>New York, New York, New York</p>
                                                </div>
                                                <button type="button" class="btn btn-dark ms-auto">Read more</button>
                                            </div>
                                        </div>
                                        <div class="no-gutters gap-2">
                                            <div class="${CT_JOB_CARD}">
                                                <div>
                                                    <h5 class="${CT_JOB_CARD_HEADER} mt-1">Senior marketer (sample)</h5>
                                                    <p>New York, New York, New York</p>
                                                </div>
                                                <button type="button" class="btn btn-dark ms-auto">Read more</button>
                                            </div>
                                        </div>
                                        <div class="no-gutters gap-2">
                                            <div class="${CT_JOB_CARD}">
                                                <div>
                                                    <h5 class="${CT_JOB_CARD_HEADER} mt-1">Senior marketer (sample)</h5>
                                                    <p>New York, New York, New York</p>
                                                </div>
                                                <button type="button" class="btn btn-dark ms-auto">Read more</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>`
    },
    {
        id: 'job-page-4', 
        type: TT_JOBS, 
        styles: `.flex{display: flex;}
                @media only screen and (max-width: 375px){
                    .flex{display: block;}
                }
                .${CT_MAIN_COMPONENT}{padding: 1rem;}
                .nav-tabs .job-page-nav-link-1.active{border-bottom-color: #000000;border-top: none;border-left: none;border-right: none;font-weight: bold;}
                .job-page-nav-link-1{color: #000000;}
                .job-page-filter{border: 2px solid #EAECF0; padding: 0.5rem; border-radius: 6px;} 
                .job-page-list-item{margin: 0.25rem; border: 2px solid #EAECF0; border-radius: 6px; display: block; color: black; text-decoration: none;padding-top: 0.25rem; padding-bottom: 0.25rem; padding-left: 0.5rem; font-weight: 500; width: 100%;} 
                .job-page-list-item.active{ color: #757575 !important;}
                .${CT_JOB}>div{grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; padding: 0.25rem;}
                .${CT_JOB}.show>div{display: grid !important;}
                .${CT_JOB_CARD}{border: 1px solid gray; border-radius: 6px; display: flex; align-items: center; padding: 1rem;}
                .${CT_JOB} .job-page-border-t{border-top: 2px solid #EAECF0; font-weight: 600; padding: 0.5rem; height: 50px;}
                .${CT_JOB} .job-page-border-t:first-child{border: none; font-weight: 500 !important;}
                .${CT_JOB} .job-page-border-t:first-child th{font-weight: 400 !important;}
                .${CT_JOB_CARD} p{margin-bottom: none;}
                .${CT_JOB_TAB_COTNAINER}{display: none;}
                .${CT_JOB_FILTER_CONTAINER} .${CT_JOB_FILTER}{display: flex}
                .${CT_JOB_FILTER_CONTAINER}{width: 100%;}
                .${CT_JOB_GROUP_CONTAINER}{width: 15%;}`, 
component: `<div class="${CT_MAIN_COMPONENT}" >
                <div class="${CT_HEADER_CONTAINER}">
                    <h2 class="${CT_HEADER}">Open positions</h2>
                </div>
                <div class="${CT_CONTENT_CONTAINER}">

                    <nav class="${CT_JOB_TAB_COTNAINER} mb-2">
                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                            <button class="nav-link job-page-nav-link-1" id="nav-home-tab" data-bs-toggle="tab" data-bs-target=".all-departments" type="button" role="tab" aria-selected="true">All Departments</button>
                            <button class="nav-link job-page-nav-link-1" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target=".marketing" type="button" role="tab" aria-selected="false">Marketing</button>
                        </div>
                    </nav>

                    <div class="${CT_JOB_TAB_CONTENT} tab-content" >

                        <div class="${CT_JOB_F_G_CONTAINER} flex">
                            <div class="${CT_JOB_GROUP_CONTAINER} mx-2">
                                <div class="fw-bolder my-3">New York</div>
                            </div>

                            <div class="${CT_JOB_FILTER_CONTAINER}">
                                <div class="job-page-filter">
                                    <div class="">Filter</div>
                                    <div class="type_job_filter">
                                        <input class="job-page-list-item active search-text col" type="search" placeholder="Search text" key="searchInput">
                                        <select class="job-page-list-item col" key="job_title">
                                            <option>All Job title</option>
                                            <option key="Job Title 1">Job Title 1</option>
                                            <option key="Job Title 2">Job Title 2</option>
                                            <option key="Job Title 3">Job Title 3</option>
                                        </select>
                                        <select class="job-page-list-item col" key="category">
                                            <option>All Category</option>
                                            <option key="category 1">category 1</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="${CT_JOB} tab-pane fade show active all-departments" >
                            <table data-gjs-highlightable="true" id="iwiph" data-gjs-type="default" draggable="true" class="text-wrap col-12 gjs-hovered">
                                <tbody>
                                    <tr class="job-page-border-t">
                                        <th class="col" key="job_title">Job title</th>
                                        <th class="col" key="category">Category</th>
                                        <th class="col" key="department">Department</th>
                                        <th class="col" key="county">Country</th>
                                        <th class="col" key="remote_status">Remote Status</th>
                                        <th class="col" key="job_status">Job Status</th>
                                        <th class="col" key="created_at">Create Date</th>
                                        <th class=""></th>
                                    </tr>

                                    <tr class="job-page-border-t">
                                        <td class="col">Job Title 1</td>
                                        <td class="col">category 1</td>
                                        <td class="col">department 1</td>
                                        <td class="col">county 1</td>
                                        <td class="col">Remote status 1</td>
                                        <td class="col">Job status 1</td>
                                        <td class="col">2023-10-27</td>
                                        <td class=""><button class="btn btn-dark">Read more</button></td>
                                    </tr>
                                
                                </tbody>
                            </table>
                        </div>
                        <div class="${CT_JOB} tab-pane fade marketing" >
                            
                        </div>
                    </div>

                </div>
            </div>`
    },
    {
        id: 'job-page-5', 
        type: TT_JOBS, 
        styles: `.job-page-5-align-start{align-items: start !important'}`, 
        component: `<div class="${CT_JOB} p-3 d-flex">
                        <div class="col-4 d-grid gap-4">
                            <h2 class="${CT_HEADER} ">Your journey starts here</h2>
                            <div class="${CT_CONTENT}">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </div>
                            <button type="button" class="btn btn-dark me-auto">Read more</button>

                        </div>
                        <div class="col-8 d-grid gap-3 job-page-5-align-start px-2">

                            <div class="${CT_JOB_CARD} col-12 border rounded border-gray d-flex align-items-center px-2">
                                <div>
                                    <h5 class="mt-1">Senior marketer (sample)</h5>
                                    <p>New York, New York, New York</p>
                                </div>
                                <button type="button" class="btn btn-dark ms-auto">Read more</button>
                            </div>

                            <div class="${CT_JOB_CARD} col-12 border rounded border-gray d-flex align-items-center px-2">
                                <div>
                                    <h5 class="mt-1">Senior marketer (sample)</h5>
                                    <p>New York, New York, New York</p>
                                </div>
                                <button type="button" class="btn btn-dark ms-auto">Read more</button>
                            </div>

                        </div>
                    </div>`
    },

    {
        id: 'quote-page-1', 
        type: TT_QUOTES, 
        styles: `.quote-5-border{border: 1px solid #EAECF0; border-radius: 6px; padding: 1.5rem;}
                .font-13{font-size: 13px;}
                .quote-img{width: 60px; height: 60px;}
                .grid{display: grid; gap: 1rem;}
                .flex{display: flex}
                @media only screen and (max-width: 375px){
                    .flex{display: block;}
                }
                .${CT_LIST_SETTING}{display: grid; gap: 1rem; grid-template-columns: repeat(2, minmax(0, 1fr));}
                .${CT_HEADER_CONTAINER}{padding-top: 1rem; padding-bottom: 1rem;}
                .${CT_QUOTE_ITEM_AUTHOR}{align-items: center;}`, 
        component: `<div class="${CT_MAIN_COMPONENT}" quotelist="C_2 G_M" quote="">
                        <div class="${CT_CONTENT_COMPONENT}">
                            <div class="${CT_HEADER_CONTAINER}">
                                <h2 class="${CT_HEADER} ">Employee Voices</h2>
                                <div class="${CT_CONTENT}">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </div>
                            </div>
                            <div class="${CT_LIST_SETTING} p-grid p-grid-cols-2">

                                <div class="${CT_QUOTE_ITEM} quote-5-border grid">
                                    <div class="${CT_QUOTE_TEXT}"><span>Our results-driven solutions are based on research and insights that support the strategic growth of your brands and products. Our results-driven solutions are based on research and insights that</span></div>
                                    
                                    <div class="${CT_QUOTE_ITEM_AUTHOR} flex">
                                        <img class="${CT_QUOTE_AUTHOR_IMG} mt-3 me-3 quote-img" alt="" src="${`data:image/png'base64,`}" >
                                        <div class="${CT_QUOTE_AUTHOR_TXT} font-13 ms-2 mt-3">
                                            <b class="text-uppercase">Sophia Martness</b>
                                            <p>We have crafted a reputation for providing high quality design that cherishes the tiniest </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="${CT_QUOTE_ITEM} quote-5-border grid">
                                    <div class="${CT_QUOTE_TEXT}"><span>Our results-driven solutions are based on research and insights that support the strategic growth of your brands and products. Our results-driven solutions are based on research and insights that</span></div>
                                    
                                    <div class="${CT_QUOTE_ITEM_AUTHOR} flex">
                                        <img class="${CT_QUOTE_AUTHOR_IMG} mt-3 me-3 quote-img" alt="" src="${`data:image/png'base64,`}" >
                                        <div class="${CT_QUOTE_AUTHOR_TXT} font-13 ms-2 mt-3">
                                            <b class="text-uppercase">Sophia Martness</b>
                                            <p>We have crafted a reputation for providing high quality design that cherishes the tiniest </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="${CT_QUOTE_ITEM} quote-5-border grid">
                                    <div class="${CT_QUOTE_TEXT}"><span>Our results-driven solutions are based on research and insights that support the strategic growth of your brands and products. Our results-driven solutions are based on research and insights that</span></div>
                                    
                                    <div class="${CT_QUOTE_ITEM_AUTHOR} flex">
                                        <img class="${CT_QUOTE_AUTHOR_IMG} mt-3 me-3 quote-img" alt="" src="${`data:image/png'base64,`}" >
                                        <div class="${CT_QUOTE_AUTHOR_TXT} font-13 ms-2 mt-3">
                                            <b class="text-uppercase">Sophia Martness</b>
                                            <p>We have crafted a reputation for providing high quality design that cherishes the tiniest </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="${CT_QUOTE_ITEM} quote-5-border grid">
                                    <div class="${CT_QUOTE_TEXT}"><span>Our results-driven solutions are based on research and insights that support the strategic growth of your brands and products. Our results-driven solutions are based on research and insights that</span></div>
                                    
                                    <div class="${CT_QUOTE_ITEM_AUTHOR} flex">
                                        <img class="${CT_QUOTE_AUTHOR_IMG} mt-3 me-3 quote-img" alt="" src="${`data:image/png'base64,`}" >
                                        <div class="${CT_QUOTE_AUTHOR_TXT} font-13 ms-2 mt-3">
                                            <b class="text-uppercase">Sophia Martness</b>
                                            <p>We have crafted a reputation for providing high quality design that cherishes the tiniest </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="${CT_QUOTE_ITEM} quote-5-border grid">
                                    <div class="${CT_QUOTE_TEXT}"><span>Our results-driven solutions are based on research and insights that support the strategic growth of your brands and products. Our results-driven solutions are based on research and insights that</span></div>
                                    
                                    <div class="${CT_QUOTE_ITEM_AUTHOR} flex">
                                        <img class="${CT_QUOTE_AUTHOR_IMG} mt-3 me-3 quote-img" alt="" src="${`data:image/png'base64,`}" >
                                        <div class="${CT_QUOTE_AUTHOR_TXT} font-13 ms-2 mt-3">
                                            <b class="text-uppercase">Sophia Martness</b>
                                            <p>We have crafted a reputation for providing high quality design that cherishes the tiniest </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>`
    },
    {
        id: 'quote-page-2', 
        type: TT_QUOTES, 
        styles: `.quote-5-border{border: 1px solid #EAECF0; border-radius: 6px; padding: 1.5rem;}
                .font-13{font-size: 13px;}
                .quote-img{width: 60px; height: 60px;}
                .grid{display: grid; gap: 1rem;}
                .flex{display: flex}
                @media only screen and (max-width: 375px){
                    .flex{display: block;}
                }
                .${CT_LIST_SETTING}{display: grid; gap: 1rem; grid-template-columns: repeat(3, minmax(0, 1fr));}
                .${CT_HEADER_CONTAINER}{padding-top: 1rem; padding-bottom: 1rem; }
                .${CT_QUOTE_ITEM_AUTHOR}{align-items: center;}`, 
        component: `<div class="${CT_MAIN_COMPONENT}">
                        <div class="${CT_CONTENT_COMPONENT}">
                            <div class="${CT_HEADER_CONTAINER} grid">
                                <h2 class="${CT_HEADER} ">Employee Voices</h2>
                                <div class="${CT_CONTENT}">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </div>
                            </div>
                            <div class="${CT_LIST_SETTING} p-grid p-grid-cols-3">

                                <div class="${CT_QUOTE_ITEM} quote-5-border grid">
                                    <div class="${CT_QUOTE_TEXT}"><span>Our results-driven solutions are based on research and insights that support the strategic growth of your brands and products. Our results-driven solutions are based on research and insights that</span></div>
                                    
                                    <div class="${CT_QUOTE_ITEM_AUTHOR} flex">
                                        <img class="${CT_QUOTE_AUTHOR_IMG} mt-3 me-3 quote-img" alt="" src="${`data:image/png'base64,`}" >
                                        <div class="${CT_QUOTE_AUTHOR_TXT} font-13 ms-2 mt-3">
                                            <b class="text-uppercase">Sophia Martness</b>
                                            <p>We have crafted a reputation for providing high quality design that cherishes the tiniest </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="${CT_QUOTE_ITEM} quote-5-border grid">
                                    <div class="${CT_QUOTE_TEXT}"><span>Our results-driven solutions are based on research and insights that support the strategic growth of your brands and products. Our results-driven solutions are based on research and insights that</span></div>
                                    
                                    <div class="${CT_QUOTE_ITEM_AUTHOR} flex">
                                        <img class="${CT_QUOTE_AUTHOR_IMG} mt-3 me-3 quote-img" alt="" src="${`data:image/png'base64,`}" >
                                        <div class="${CT_QUOTE_AUTHOR_TXT} font-13 ms-2 mt-3">
                                            <b class="text-uppercase">Sophia Martness</b>
                                            <p>We have crafted a reputation for providing high quality design that cherishes the tiniest </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="${CT_QUOTE_ITEM} quote-5-border grid">
                                    <div class="${CT_QUOTE_TEXT}"><span>Our results-driven solutions are based on research and insights that support the strategic growth of your brands and products. Our results-driven solutions are based on research and insights that</span></div>
                                    
                                    <div class="${CT_QUOTE_ITEM_AUTHOR} flex">
                                        <img class="${CT_QUOTE_AUTHOR_IMG} mt-3 me-3 quote-img" alt="" src="${`data:image/png'base64,`}" >
                                        <div class="${CT_QUOTE_AUTHOR_TXT} font-13 ms-2 mt-3">
                                            <b class="text-uppercase">Sophia Martness</b>
                                            <p>We have crafted a reputation for providing high quality design that cherishes the tiniest </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>`
    },
    {
        id: 'quote-page-3', 
        type: TT_QUOTES, 
        styles: `.quote-page-3-header-panel{background-color: #222222; color: white; padding: 1rem; border-radius: 6px;}
                .quote-5-border{border: 1px solid #EAECF0; border-radius: 6px; padding: 1.5rem;}
                .font-13{font-size: 13px;}
                .quote-img{width: 60px; height: 60px;}
                .grid{display: grid; gap: 1rem;}
                .flex{display: flex}
                @media only screen and (max-width: 375px){
                    .flex{display: block;}
                }
                .gap-1rem{gap: 1rem;}
                .${CT_LIST_SETTING}{display: grid; gap: 1rem; grid-template-columns: repeat(2, minmax(0, 1fr));}
                .${CT_HEADER_CONTAINER}{padding-top: 1rem; padding-bottom: 1rem; width: 25%;}
                .${CT_LIST_SETTING}{width: 75%;}
                .${CT_QUOTE_ITEM_AUTHOR}{align-items: center;}`, 
        component: `<div class="${CT_MAIN_COMPONENT} ">
                        <div class="${CT_CONTENT_COMPONENT} flex gap-1rem">

                            <div class="${CT_LIST_SETTING} grid">

                                <div class="${CT_QUOTE_ITEM} quote-5-border grid">
                                    <div class="${CT_QUOTE_TEXT}">Our results-driven solutions are based on research and insights that support the strategic growth of your brands and products. Our results-driven solutions are based on research and insights that</div>
                                    
                                    <div class="${CT_QUOTE_ITEM_AUTHOR} d-flex">
                                        <img class="${CT_QUOTE_AUTHOR_IMG} mt-3 me-3 quote-img" alt="" src="${`data:image/png'base64,`}" >
                                        <div class="${CT_QUOTE_AUTHOR_TXT} font-13 ms-2 mt-3">
                                            <b class="text-uppercase">Sophia Martness</b>
                                            <p>We have crafted a reputation for providing high quality design that cherishes the tiniest </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="${CT_QUOTE_ITEM} quote-5-border grid">
                                    <div class="${CT_QUOTE_TEXT}"><span>Our results-driven solutions are based on research and insights that support the strategic growth of your brands and products. Our results-driven solutions are based on research and insights that</span></div>
                                    
                                    <div class="${CT_QUOTE_ITEM_AUTHOR} d-flex">
                                        <img class="${CT_QUOTE_AUTHOR_IMG} mt-3 me-3 quote-img" alt="" src="${`data:image/png'base64,`}" >
                                        <div class="${CT_QUOTE_AUTHOR_TXT} font-13 ms-2 mt-3">
                                            <b class="text-uppercase">Sophia Martness</b>
                                            <p>We have crafted a reputation for providing high quality design that cherishes the tiniest </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="${CT_QUOTE_ITEM} quote-5-border grid">
                                    <div class="${CT_QUOTE_TEXT}"><span>Our results-driven solutions are based on research and insights that support the strategic growth of your brands and products. Our results-driven solutions are based on research and insights that</span></div>
                                    
                                    <div class="${CT_QUOTE_ITEM_AUTHOR} flex">
                                        <img class="${CT_QUOTE_AUTHOR_IMG} mt-3 me-3 quote-img" alt="" src="${`data:image/png'base64,`}" >
                                        <div class="${CT_QUOTE_AUTHOR_TXT} font-13 ms-2 mt-3">
                                            <b class="text-uppercase">Sophia Martness</b>
                                            <p>We have crafted a reputation for providing high quality design that cherishes the tiniest </p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="${CT_HEADER_CONTAINER} flex py-4 quote-page-3-header-panel">
                                <div>
                                    <h2 class="${CT_HEADER} ">Your journey starts here</h2>
                                    <div class="${CT_CONTENT}">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`
    },
    {
        id: 'cookie-page-3', 
        type: TT_COOKIES, 
        styles: `.cookie-page-item-border{border: 1px solid #EAECF0; padding: 1rem; border-radius: 6px;}`, 
        component: `<div class="${CT_MAIN_COMPONENT} p-3 p-grid p-grid-cols-3">

                        <div class="${CT_HEADER_COMPONENT} p-flex py-4 quote-page-3-header-panel">
                            <div class="d-block">
                                <h2 class="${CT_HEADER} ">Cookies Preference</h2>
                                <div class="${CT_CONTENT}">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </div>
                            </div>
                        </div>

                        <div class="${CT_CONTENT_COMPONENT}">
                            <div class="${CT_COOKIE} p-grid p-grid-cols-1 p-col-span-2">

                                <div class="pt-3 fw-bolder">Necessary Cookies</div>
                                <div class="cookie-page-item-border">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </div>

                                <div class="pt-3 fw-bolder">Necessary Cookies</div>
                                <div class="cookie-page-item-border">
                                    <h6><input type="checkbox" class="me-1" />Youtube</h6>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </div>

                                <h6 class="pt-3 fw-bolder">Necessary Cookies</h6>
                                <div class="cookie-page-item-border">
                                    <h6><input type="checkbox" class="me-1" />Facebook</h6>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </div>

                            </div>
                        </div>
                        
                    </div>`
    },
 ]

export {
    pages_data
}