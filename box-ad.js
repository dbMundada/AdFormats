function BoxAds(size) {
  this.size = size;
}

BoxAds.prototype.createBoxCss = function (doc) {
  var style = doc.createElement('style');
  var size = (this.size / 2) + "px";
  style.type = 'text/css';
  var keyFrames = '\
    .spinner .front {\
      -webkit-transform: translateZ(A_DYNAMIC_SIZE);\
      -ms-transform: translateZ(A_DYNAMIC_SIZE);\
      transform: translateZ(A_DYNAMIC_SIZE);\
    }\
    .spinner .right {\
      -webkit-transform: rotateY(90deg) translateZ(A_DYNAMIC_SIZE);\
      -ms-transform: rotateY(90deg) translateZ(A_DYNAMIC_SIZE);\
      transform: rotateY(90deg) translateZ(A_DYNAMIC_SIZE);\
    }\
    .spinner .top {\
      -webkit-transform: rotateY(90deg) rotateX(90deg) translateZ(A_DYNAMIC_SIZE);\
      -ms-transform: rotateY(90deg) rotateX(90deg) translateZ(A_DYNAMIC_SIZE);\
      transform: rotateY(90deg) rotateX(90deg) translateZ(A_DYNAMIC_SIZE);\
    }\
    .spinner .back {\
      -webkit-transform: rotateY(180deg) rotateZ(90deg) translateZ(A_DYNAMIC_SIZE);\
      -ms-transform: rotateY(180deg) rotateZ(90deg) translateZ(A_DYNAMIC_SIZE);\
      transform: rotateY(180deg) rotateZ(90deg) translateZ(A_DYNAMIC_SIZE);\
    }\
    .spinner .left {\
      -webkit-transform: rotateY(-90deg) rotateZ(90deg) translateZ(A_DYNAMIC_SIZE);\
      -ms-transform: rotateY(-90deg) rotateZ(90deg) translateZ(A_DYNAMIC_SIZE);\
      transform: rotateY(-90deg) rotateZ(90deg) translateZ(A_DYNAMIC_SIZE);\
    }\
    .spinner .bottom {\
      -webkit-transform: rotateX(-90deg) translateZ(A_DYNAMIC_SIZE);\
      -ms-transform: rotateX(-90deg) translateZ(A_DYNAMIC_SIZE);\
      transform: rotateX(-90deg) translateZ(A_DYNAMIC_SIZE);\
    }\
    .spinner {\
      -webkit-animation: spincube 12s ease-in-out infinite;\
      animation: spincube 12s ease-in-out infinite;\
      -webkit-transform-style: preserve-3d;\
      -ms-transform-style: preserve-3d;\
      transform-style: preserve-3d;\
      -webkit-transform-origin: A_DYNAMIC_SIZE A_DYNAMIC_SIZE 0;\
      -ms-transform-origin: A_DYNAMIC_SIZE A_DYNAMIC_SIZE 0;\
      transform-origin: A_DYNAMIC_SIZE A_DYNAMIC_SIZE 0;\
    }\
    @-webkit-keyframes spincube {\
      16% { -webkit-transform: rotateY(-90deg);                }\
      33% { -webkit-transform: rotateY(-90deg) rotateZ(90deg); }\
      50% { -webkit-transform: rotateY(180deg) rotateZ(90deg); }\
      66% { -webkit-transform: rotateY(90deg) rotateX(90deg);  }\
      83% { -webkit-transform: rotateX(90deg);                 }\
    }\
    @-moz-keyframes spinIt {\
      16% { -webkit-transform: rotateY(-90deg);                }\
      33% { -webkit-transform: rotateY(-90deg) rotateZ(90deg); }\
      50% { -webkit-transform: rotateY(180deg) rotateZ(90deg); }\
      66% { -webkit-transform: rotateY(90deg) rotateX(90deg);  }\
      83% { -webkit-transform: rotateX(90deg);                 }\
    }\
    @keyframes spincube {\
      16% { -ms-transform: rotateY(-90deg); transform: rotateY(-90deg); }\
      33% { -ms-transform: rotateY(-90deg) rotateZ(90deg); transform: rotateY(-90deg) rotateZ(90deg); }\
      50% { -ms-transform: rotateY(180deg) rotateZ(90deg); transform: rotateY(180deg) rotateZ(90deg); }\
      66% { -ms-transform: rotateY(90deg) rotateX(90deg); transform: rotateY(90deg) rotateX(90deg); }\
      83% { -ms-transform: rotateX(90deg); transform: rotateX(90deg); }\
    }\
  }';
  style.innerHTML = keyFrames.replace(/A_DYNAMIC_SIZE/g, size);
  doc.getElementsByTagName('head')[0].appendChild(style);
};
