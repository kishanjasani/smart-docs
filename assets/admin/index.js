!function(e){var t={};function o(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=13)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t,o){var n=o(8),a=o(9),c=o(10),r=o(12);e.exports=function(e,t){return n(e)||a(e,t)||c(e,t)||r()}},function(e,t){!function(){e.exports=this.wp.coreData}()},function(e,t){!function(){e.exports=this.wp.data}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.lodash}()},function(e,t,o){},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var o=[],n=!0,a=!1,c=void 0;try{for(var r,l=e[Symbol.iterator]();!(n=(r=l.next()).done)&&(o.push(r.value),!t||o.length!==t);n=!0);}catch(e){a=!0,c=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw c}}return o}}},function(e,t,o){var n=o(11);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(e,t):void 0}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,o){"use strict";o.r(t);var n=o(0),a=(o(7),o(5));function c(){return Object(n.createElement)(n.Fragment,null,Object(n.createElement)("div",{id:"sd-setting-header",class:" mx-auto flex justify-center justify-items-center p-10 mb-8 shadow bg-white "},Object(n.createElement)("h2",{class:"text-5xl"},"Smart Docs"),Object(n.createElement)("sup",{class:"text-sm text-gray-500"},"v ",sd_vars.version)))}var r=o(1),l=o(2),s=o.n(l),i=o(3),u=o(4);function m(){var e=Object(u.useDispatch)("core/notices"),t=e.createSuccessNotice,o=e.createErrorNotice,c=Object(i.useEntityProp)("root","site","sd_archive_page_title"),l=s()(c,2),m=l[0],b=l[1],d=Object(i.useEntityProp)("root","site","sd_archive_page_slug"),_=s()(d,2),g=_[0],p=_[1],h=Object(i.useEntityProp)("root","site","sd_category_slug"),j=s()(h,2),O=j[0],f=j[1],E=Object(i.useEntityProp)("root","site","sd_tag_slug"),y=s()(E,2),v=y[0],x=y[1],C=Object(n.useState)(!1),S=s()(C,2),N=S[0],k=S[1];return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(r.BaseControl,{id:"textarea-1",label:"Documentation Page Title",help:"Edit to change the default title for the documentation page.",className:"mb-3"},Object(n.createElement)(r.TextControl,{id:"sd_option-doc_homepage_title",className:"mt-3 block mb-3",value:m,placeholder:Object(a.__)("Documentation"),onChange:b})),Object(n.createElement)(r.BaseControl,{id:"textarea-2",label:"Documentation Archive Slug",help:"Edit to change the default slug for the documentation page.",className:"mb-3"},Object(n.createElement)(r.TextControl,{id:"sd_option-doc_homepage_slug",className:"mt-3 block mb-3",value:g,placeholder:Object(a.__)("Add documentation archive/home page slug"),onChange:p})),Object(n.createElement)(r.BaseControl,{id:"textarea-3",label:"Documentation Category Slug",help:"Edit to change the default slug for the documentation category.",className:"mb-3"},Object(n.createElement)(r.TextControl,{id:"sd_option-doc_category_slug",className:"mt-3 block mb-3",value:O,placeholder:Object(a.__)("Add custom category slug"),onChange:f})),Object(n.createElement)(r.BaseControl,{id:"textarea-3",label:"Documentation Tag Slug",help:"Edit to change the default slug for the documentation tag."},Object(n.createElement)(r.TextControl,{id:"sd_option-doc_tag_slug",className:"mt-3 block mb-3",value:v,placeholder:Object(a.__)("Add custom tag slug"),onChange:x})),Object(n.createElement)(r.Button,{className:"mt-3 mb-3",isPrimary:"true",isBusy:N,onClick:function(){k(!0),wp.data.dispatch("core").saveSite({sd_archive_page_title:m,sd_archive_page_slug:g,sd_category_slug:O,sd_tag_slug:v}).then((function(){t("Settings Saved!",{type:"snackbar"})})).catch((function(e){o("There was some error saving settings! \nCheck console for more information on error.",{type:"snackbar"}),console.log(e)})),k(!1)}},"Save Changes"))}function b(){var e=Object(i.useEntityProp)("root","site","ibx_sd_doc_page_list_layout_icon"),t=s()(e,2),o=t[0],a=t[1],c=Object(i.useEntityProp)("root","site","ibx_sd_doc_page_list_layout_columns"),l=s()(c,2),u=l[0],m=l[1];return Object(n.createElement)(n.Fragment,null,Object(n.createElement)("hr",{className:"my-5"}),Object(n.createElement)("h3",{className:"my-3 font-semibold"},"List Layout Settings"),Object(n.createElement)(r.BaseControl,{label:"List Columns",className:"inline-number-control"},Object(n.createElement)(r.__experimentalNumberControl,{className:"my-3 w-16 ml-4",isShiftStepEnabled:!0,onChange:m,shiftStep:1,value:u})),Object(n.createElement)(r.ToggleControl,{className:"my-3",label:"Show or Hide Doc Category Icon",checked:o,onChange:a}))}function d(){var e=Object(i.useEntityProp)("root","site","ibx_sd_doc_page_grid_layout_icon"),t=s()(e,2),o=t[0],a=t[1],c=Object(i.useEntityProp)("root","site","ibx_sd_doc_page_grid_layout_columns"),l=s()(c,2),u=l[0],m=l[1];return Object(n.createElement)(n.Fragment,null,Object(n.createElement)("hr",{className:"my-5"}),Object(n.createElement)("h3",{className:"my-3 font-semibold"},"Grid Layout Settings"),Object(n.createElement)(r.BaseControl,{label:"Grid Columns",className:"inline-number-control"},Object(n.createElement)(r.__experimentalNumberControl,{className:"my-3 w-16 ml-4",isShiftStepEnabled:!0,onChange:m,shiftStep:1,value:u})),Object(n.createElement)(r.ToggleControl,{className:"my-3",label:"Show or Hide Doc Category Icon",checked:o,onChange:a}))}function _(){var e=Object(u.useDispatch)("core/notices"),t=e.createSuccessNotice,o=e.createErrorNotice,a=Object(i.useEntityProp)("root","site","ibx_sd_doc_page_layout"),c=s()(a,2),l=c[0],m=c[1],_=Object(i.useEntityProp)("root","site","ibx_sd_doc_page_count"),g=s()(_,2),p=g[0],h=g[1],j=Object(i.useEntityProp)("root","site","ibx_sd_doc_page_authors"),O=s()(j,2),f=O[0],E=O[1],y=Object(i.useEntityProp)("root","site","ibx_sd_doc_page_search"),v=s()(y,2),x=v[0],C=v[1],S=Object(n.useState)(!1),N=s()(S,2),k=N[0],P=N[1],w=Object(i.useEntityProp)("root","site","ibx_sd_doc_page_list_layout_icon"),T=s()(w,1)[0],D=Object(i.useEntityProp)("root","site","ibx_sd_doc_page_list_layout_columns"),B=s()(D,1)[0],L=Object(i.useEntityProp)("root","site","ibx_sd_doc_page_grid_layout_icon"),H=s()(L,1)[0],A=Object(i.useEntityProp)("root","site","ibx_sd_doc_page_grid_layout_columns"),R=s()(A,1)[0];return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(r.BaseControl,{label:"Documentation Page Layout"},Object(n.createElement)(r.__experimentalRadioGroup,{id:"sd_option-doc-homepage-layout",className:"ml-5",label:"Documentation Page Layout",checked:l,onChange:m},Object(n.createElement)(r.__experimentalRadio,{value:"list"},"List"),Object(n.createElement)(r.__experimentalRadio,{value:"grid"},"Grid"))),Object(n.createElement)(r.ToggleControl,{label:"Show or Hide Docs Count",checked:p,onChange:h}),Object(n.createElement)(r.ToggleControl,{label:"Show or Hide Docs Authors",checked:f,onChange:E}),Object(n.createElement)(r.ToggleControl,{label:"Show or Hide Docs Authors",checked:x,onChange:C}),Object(n.createElement)("div",null,"list"===l?Object(n.createElement)(b,null):null),Object(n.createElement)("div",null,"grid"===l?Object(n.createElement)(d,null):null),Object(n.createElement)(r.Button,{className:"mt-3 mb-3",isPrimary:"true",isBusy:k,onClick:function(){P(!0);var e={ibx_sd_doc_page_layout:l,ibx_sd_doc_page_authors:f,ibx_sd_doc_page_search:x,ibx_sd_doc_page_count:p,ibx_sd_doc_page_list_layout_icon:T,ibx_sd_doc_page_list_layout_columns:B,ibx_sd_doc_page_grid_layout_icon:H,ibx_sd_doc_page_grid_layout_columns:R};wp.data.dispatch("core").saveSite(e).then((function(){t("Settings Saved!",{type:"snackbar"})})).catch((function(e){o("There was some error saving settings! \nCheck console for more information on error.",{type:"snackbar"}),console.log(e)})),P(!1)}},"Save Changes"))}function g(){var e=Object(u.useDispatch)("core/notices"),t=e.createSuccessNotice,o=e.createErrorNotice,a=Object(i.useEntityProp)("root","site","ibx_sd_single_page_sidebar"),c=s()(a,2),l=c[0],m=c[1],b=Object(i.useEntityProp)("root","site","ibx_sd_single_page_permalink"),d=s()(b,2),_=d[0],g=d[1],p=Object(i.useEntityProp)("root","site","ibx_sd_single_page_breadcrumbs"),h=s()(p,2),j=h[0],O=h[1],f=Object(i.useEntityProp)("root","site","ibx_sd_single_page_comments"),E=s()(f,2),y=E[0],v=E[1],x=Object(i.useEntityProp)("root","site","ibx_sd_single_page_social_share_options"),C=s()(x,2),S=C[0],N=C[1],k=Object(i.useEntityProp)("root","site","ibx_sd_single_ratings"),P=s()(k,2),w=P[0],T=P[1],D=Object(n.useState)(!1),B=s()(D,2),L=B[0],H=B[1];return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(r.ToggleControl,{label:"Show or Hide Sidebar",checked:l,onChange:m}),Object(n.createElement)(r.ToggleControl,{label:"Show or Hide Doc Title Permalink Copy Icon",checked:_,onChange:g}),Object(n.createElement)(r.ToggleControl,{label:"Show or Hide Breadcrumbs",checked:j,onChange:O}),Object(n.createElement)(r.ToggleControl,{label:"Show or Hide Comments",checked:y,onChange:v}),Object(n.createElement)(r.ToggleControl,{label:"Show or Hide Social Share options",checked:S,onChange:N}),Object(n.createElement)(r.ToggleControl,{label:"Show or Hide Ratings Buttons",checked:w,onChange:T}),Object(n.createElement)(r.Button,{className:"mt-3 mb-3",isPrimary:"true",isBusy:L,onClick:function(){H(!0),wp.data.dispatch("core").saveSite({ibx_sd_single_page_sidebar:l,ibx_sd_single_page_permalink:_,ibx_sd_single_page_breadcrumbs:j,ibx_sd_single_page_comments:y,ibx_sd_single_page_social_share_options:S,ibx_sd_single_ratings:w}).then((function(){t("Settings Saved!",{type:"snackbar"})})).catch((function(e){o("There was some error saving settings! \nCheck console for more information on error.",{type:"snackbar"}),console.log(e)})),H(!1)}},"Save Changes"))}function p(){var e=Object(u.useDispatch)("core/notices"),t=e.createSuccessNotice,o=e.createErrorNotice,a=Object(i.useEntityProp)("root","site","ibx_sd_archive_sidebar"),c=s()(a,2),l=c[0],m=c[1],b=Object(i.useEntityProp)("root","site","ibx_sd_archive_layout"),d=s()(b,2),_=d[0],g=d[1],p=Object(i.useEntityProp)("root","site","ibx_sd_archive_search"),h=s()(p,2),j=h[0],O=h[1],f=Object(i.useEntityProp)("root","site","ibx_sd_archive_suggested"),E=s()(f,2),y=E[0],v=E[1],x=Object(n.useState)(!1),C=s()(x,2),S=C[0],N=C[1];return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(r.BaseControl,{label:"Archive Page Layout"},Object(n.createElement)(r.__experimentalRadioGroup,{id:"sd_option-doc-archive-layout",className:"ml-5",label:"Documentation Archive Page Layout",checked:_,onChange:g},Object(n.createElement)(r.__experimentalRadio,{value:"list"},"List"),Object(n.createElement)(r.__experimentalRadio,{value:"grid"},"Grid"))),Object(n.createElement)(r.ToggleControl,{label:"Show or Hide Sidebar",checked:l,onChange:m}),Object(n.createElement)(r.ToggleControl,{label:"Show or Hide Search Bar",checked:j,onChange:O}),Object(n.createElement)(r.ToggleControl,{label:"Show or Hide Suggested Articles",checked:y,onChange:v}),Object(n.createElement)(r.Button,{className:"mt-3 mb-3",isPrimary:"true",isBusy:S,onClick:function(){N(!0),wp.data.dispatch("core").saveSite({ibx_sd_archive_sidebar:l,ibx_sd_archive_layout:_,ibx_sd_archive_search:j,ibx_sd_archive_suggested:y}).then((function(){t("Settings Saved!",{type:"snackbar"})})).catch((function(e){o("There was some error saving settings! \nCheck console for more information on error.",{type:"snackbar"}),console.log(e)})),N(!1)}},"Save Changes"))}function h(){var e="py-3 px-4 text-sl duration-200";return Object(n.createElement)(r.TabPanel,{className:"sd-layout-settings-tabs flex",activeClass:"is-active",orientation:"vertical",tabs:[{name:"documentation_page",title:"Doc Page",className:e},{name:"single_page",title:"Single Page",className:e},{name:"archive_page",title:"Archive Page",className:e}]},(function(e){return"documentation_page"===e.name?Object(n.createElement)(_,null):"single_page"===e.name?Object(n.createElement)(g,null):"archive_page"===e.name?Object(n.createElement)(p,null):void 0}))}function j(){return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(r.BaseControl,{label:"Documentation Page Layout"},Object(n.createElement)(r.__experimentalRadioGroup,{label:"Width",defaultchecked:"50",className:"block"},Object(n.createElement)(r.__experimentalRadio,{value:"list"},"List"),Object(n.createElement)(r.__experimentalRadio,{value:"grid"},"Grid"))),Object(n.createElement)(r.ToggleControl,{label:"Show or Hide Docs Count"}),Object(n.createElement)(r.ToggleControl,{label:"Show or Hide Docs Authors"}),Object(n.createElement)(r.ToggleControl,{label:"Show or Hide Docs Authors"}))}function O(){var e="sd-setting-primary-tab px-4 text-base duration-200";return Object(n.createElement)(r.TabPanel,{className:"sd-settings-tabs m-5 col-span-2 row-span-2 bg-white",activeClass:"is-active",tabs:[{name:"general",title:"General",className:e},{name:"layout",title:"Layout",className:e},{name:"search",title:"Search",className:e}]},(function(e){return"general"===e.name?Object(n.createElement)(m,null):"layout"===e.name?Object(n.createElement)(h,null):"search"===e.name?Object(n.createElement)(j,null):void 0}))}function f(){return Object(n.createElement)(r.Card,{isElevated:"true",className:"smart-docs-side-card col-span-1 m-5 h-auto"},Object(n.createElement)(r.CardHeader,{className:"smart-docs-card-header font-bold text-xl pl-5 pt-8 pb-6"},"Help/Support"),Object(n.createElement)(r.CardBody,null,"Found a issue? or Have a suggestion? ",Object(n.createElement)("br",null),Object(n.createElement)("br",null),"We use Github to track issues and suggestions. Click the link below to go to our Github Page and post issue/suggestion."),Object(n.createElement)(r.CardFooter,{className:"smart-docs-card-footer pt-8 pb-8"},Object(n.createElement)(r.ExternalLink,{className:"w-full inline-flex font-medium text-base",href:"https://github.com/helloideabox/smart-docs/issues"},"Raise a Ticket")))}var E=o(6);function y(){var e=Object(u.useDispatch)("core/notices").removeNotice,t=Object(u.useSelect)((function(e){return e("core/notices").getNotices()}),[]),o=Object(E.filter)(t,{isDismissible:!0,type:"default"}),a=Object(E.filter)(t,{isDismissible:!1,type:"default"}),c=Object(E.filter)(t,{type:"snackbar"});return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(r.NoticeList,{notices:a,className:"components-notice-list components-editor-notices__pinned"}),Object(n.createElement)(r.NoticeList,{notices:o,className:"components-notice-list components-editor-notices__dismissible",onRemove:e}),Object(n.createElement)(r.SnackbarList,{notices:c,className:"components-snackbar-list components-editor-notices__snackbar",onRemove:e}))}var v=document.querySelector(".loader"),x=function(){return v.classList.remove("loader--hide")},C=function(){return v.classList.add("loader--hide")},S=function(e){var t=e.hideLoader;return Object(n.useEffect)(t,[]),Object(n.createElement)(n.Fragment,null,Object(n.createElement)(c,null),Object(n.createElement)("div",{className:"grid grid-cols-3 grid-rows-2 container mx-auto"},Object(n.createElement)(O,null),Object(n.createElement)(f,null)),Object(n.createElement)(y,null))};setTimeout((function(){Object(n.render)(Object(n.createElement)(S,{hideLoader:C,showLoader:x}),document.getElementById("sd-setting-root"))}),1e5)}]);