"use strict";(self.webpackChunktweets_cards=self.webpackChunktweets_cards||[]).push([[235],{4235:function(e,r,a){a.r(r),a.d(r,{default:function(){return M}});var t=a(9439),l=a(2791),s=a(9434),n=a(6299),o=a(4925),i=a(2648),c=a(6362),u=a(1175),d=a(2286),f=a(6895),_=a(3329),x=function(){var e=(0,s.v9)(d.AD),r=(0,s.I0)();return(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)(c.Z,{variant:"standard",sx:{mt:1,mb:5,minWidth:120},children:[(0,_.jsx)(o.Z,{id:"filter-label",children:"Filter"}),(0,_.jsxs)(u.Z,{labelId:"filter-label",id:"filter",value:e,onChange:function(e){r((0,f.c)(e.target.value))},label:"Filter",children:[(0,_.jsx)(i.Z,{value:"All",children:"Show all"}),(0,_.jsx)(i.Z,{value:"Follow",children:"Follow"}),(0,_.jsx)(i.Z,{value:"Following",children:"Following"})]})]})})},v=a(8393),h=function(){var e=(0,v.U)(),r=e.allUsers,a=e.unfollowedUsers,t=e.followedUsers;return function(e){switch(e){case"All":default:return r;case"Follow":return a;case"Following":return t}}(e.filterValue)},m="UserCardList_list__6tWFc",j="UserCardList_noUsersText__Ep-dw",w=function(e){var r=e.children;return h().length?(0,_.jsx)("ul",{className:m,children:r}):(0,_.jsx)("p",{className:j,children:"There are no users to display"})},F="UserCard_card__dFu4G",N="UserCard_wrap__hFkv+",p="UserCard_decorationThumb__RfEoG",b="UserCard_line__Ny6D1",U="UserCard_textBox__eQovP",g={avatarLayout:"Avatar_avatarLayout__3dH1X",avatarWrap:"Avatar_avatarWrap__-Hi1l",avatarAlt:"Avatar_avatarAlt__Ab4Be"},C=function(e){var r=e.src,a=e.alt,s=(0,l.useState)(!1),n=(0,t.Z)(s,2),o=n[0],i=n[1];return(0,_.jsxs)("div",{className:g.avatarLayout,onMouseOver:function(){i(!0)},onMouseOut:function(){i(!1)},children:[(0,_.jsx)("div",{className:g.avatarWrap,children:(0,_.jsx)("img",{className:g.avatarImg,src:r,alt:a})}),o&&(0,_.jsx)("div",{className:g.avatarAlt,children:a})]})},A={text:"UserInfo_text__SCfTQ",number:"UserInfo_number__q9kN5"},Z=function(e){var r=e.tweets,a=e.followers,t=new Intl.NumberFormat("en-US");return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("p",{className:A.text,children:[(0,_.jsx)("span",{className:A.number,children:t.format(r)}),(0,_.jsx)("span",{className:A.textSpan,children:1===r?"Tweet":"Tweets"})]}),(0,_.jsxs)("p",{className:A.text,children:[(0,_.jsx)("span",{className:A.number,children:t.format(a)}),(0,_.jsx)("span",{className:A.textSpan,children:1===a?"Follower":"Followers"})]})]})},k="FollowButton_followBtn__VuxO9",B="FollowButton_following__lbOQe FollowButton_followBtn__VuxO9",I=function(e){var r=e.id,a=(0,s.I0)(),o=(0,v.U)().followedUsers,i=(0,l.useState)(!1),c=(0,t.Z)(i,2),u=c[0],d=c[1];(0,l.useEffect)((function(){o.some((function(e){return e.id===r}))?d(!0):d(!1)}),[o,r]);return(0,_.jsx)("button",{className:u?B:k,type:"button",id:r,onClick:function(e){a(u?(0,n.mM)(e.target.id):(0,n.vs)(e.target.id))},children:u?"Following":"Follow"})},S=function(){var e=h();return null===e||void 0===e?void 0:e.map((function(e){return(0,_.jsx)("li",{className:F,children:(0,_.jsxs)("div",{className:N,children:[(0,_.jsx)("div",{className:p}),(0,_.jsx)("div",{className:b,children:(0,_.jsx)(C,{src:e.avatar,alt:e.user})}),(0,_.jsxs)("div",{className:U,children:[(0,_.jsx)(Z,{tweets:e.tweets,followers:e.followers}),(0,_.jsx)(I,{id:e.id})]})]})},e.id)}))},y="LoadMoreBtn_loadMoreBtn__EJd7v",T=function(){var e=(0,l.useState)(2),r=(0,t.Z)(e,2),a=r[0],o=r[1],i=(0,s.I0)();return(0,_.jsx)("button",{className:y,type:"button",onClick:function(){i((0,n.k4)(a)),o(a+1)},children:"Load More"})},E="Error_errorThumb__P3JUZ",L=function(){return(0,_.jsx)("div",{className:E,children:(0,_.jsx)("p",{children:"An error occured. Try again later"})})},M=function(){var e=(0,s.I0)(),r=(0,v.U)(),a=r.error,o=r.totalNumber,i=r.filterValue,c=h(),u=(0,l.useState)(!0),d=(0,t.Z)(u,2),f=d[0],m=d[1];return(0,l.useEffect)((function(){e((0,n.uh)("1"))}),[e]),(0,l.useEffect)((function(){m("Follow"!==i&&"Following"!==i)}),[i]),a?(0,_.jsx)(L,{}):(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(x,{}),(0,_.jsx)(w,{children:(0,_.jsx)(S,{})}),o>c.length&&f?(0,_.jsx)(T,{}):null]})}}}]);
//# sourceMappingURL=235.445de59c.chunk.js.map