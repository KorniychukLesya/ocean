<template>
    <section class="watch">
      <div class="watch__container">
        <div class="watch__container watch__container-inner">
          <div class="watch__center">
           </div>
          <div class="watch__hand watch__hand--second"></div>
          <div class="watch__hand watch__hand--minute"></div>
          <div class="svgg">
      <svg>
          <g class="marks">
             <line x1="68" y1="0" x2="78" y2="0" />
             <line x1="68" y1="0" x2="78" y2="0" />
             <line x1="68" y1="0" x2="78" y2="0" />
             <line x1="68" y1="0" x2="78" y2="0" />
             <line x1="68" y1="0" x2="78" y2="0" />
             <line x1="68" y1="0" x2="78" y2="0" />
             <line x1="68" y1="0" x2="78" y2="0" />
             <line x1="68" y1="0" x2="78" y2="0" />
             <line x1="68" y1="0" x2="78" y2="0" />
             <line x1="68" y1="0" x2="78" y2="0" />
             <line x1="68" y1="0" x2="78" y2="0" />
             <line x1="68" y1="0" x2="78" y2="0" />
          </g>
        </svg>
       </div>
      </div>
    </div>
  </section>
 
</template>

 <style> 
 .svgg {
  position: absolute;
  width: 170px;
  height: 170px;
  top: -33%;
  left: -34%;
 }

 svg {
  display: block;
  stroke: var(--vt-c-blue);
  stroke-width: 4;  
  stroke-linecap: round; 
  width: 200px;
  height: 200px;
}
 .marks {
  transform: translate(100px, 100px);
  stroke-width: 1;
}
.marks > line:nth-child(1) {
  transform: rotate(30deg); 
}
.marks > line:nth-child(2) {
  transform: rotate(calc(2 * 30deg));
}
.marks > line:nth-child(3) {
  transform: rotate(calc(3 * 30deg));
  stroke-width: 0.5;
}
.marks > line:nth-child(4) {
  transform: rotate(calc(4 * 30deg));
}
.marks > line:nth-child(5) {
  transform: rotate(calc(5 * 30deg));
}
.marks > line:nth-child(6) {
  transform: rotate(calc(6 * 30deg));
  stroke-width: 0.5;
}
.marks > line:nth-child(7) {
  transform: rotate(calc(7 * 30deg));
}
.marks > line:nth-child(8) {
  transform: rotate(calc(8 * 30deg));
}
.marks > line:nth-child(9) {
  transform: rotate(calc(9 * 30deg));
  stroke-width: 0.5;
}
.marks > line:nth-child(10) {
  transform: rotate(calc(10 * 30deg));
}
.marks > line:nth-child(11) {
  transform: rotate(calc(11 * 30deg));
}
.marks > line:nth-child(12) {
  transform: rotate(calc(12 * 30deg));
  stroke-width: 0.5;
}
 
 :root { 
  --sizeContainer: 170px;
  --sizeContainerInner: 125px;
  --sixeCentr: 4px;
  --minuteWidth: 2px;
  --secondWidth: 2px;
  --minuteHeight: 45px;
  --secondHeight: 55px;
  --positionBottom: 50%;
 } 

.watch {
  display: flex;
  justify-content: center;
  margin: 0 auto;
}

  .watch__container {
    position: relative;
    width: var(--sizeContainer);
    height: var(--sizeContainer);
    border: 3px solid var(--vt-c-blue);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .watch__container-inner {
    width: var(--sizeContainerInner);
    height: var(--sizeContainerInner);
  }

  .watch__center {
    position: absolute;
    bottom: var(--positionBottom);
    transform: translate(0, 2px);
    width: var(--sixeCentr);
    height: var(--sixeCentr);
    background-color: var(--vt-c-blue);
    border-radius: 50%;
    z-index: 2;
  }

  .watch__hand {
    position: absolute;
    bottom: var(--positionBottom);
    width: var(--minuteWidth);
    border-radius: 80% / 5%;
    animation-name: move;
    animation-iteration-count: infinite;
    transform-origin: bottom;
    animation-timing-function: linear;
  }
    .watch__hand--minute {
      height: var(--minuteHeight);
      background-color: var(--vt-c-blue);
      animation-duration: 3600s;
    }

    .watch__hand--second {
      height: var(--secondHeight);
      background-color: var(--vt-c-blue);
      animation-duration: 60s;
    }

@keyframes move {
  100% {
    transform: rotate(1turn);
  }
}
 
 </style>
 