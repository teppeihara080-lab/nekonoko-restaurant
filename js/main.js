'use strict';

const HERO_SLIDER_OPTIONS = {
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  loop: true,
  speed: 1200,
  autoplay: {
    delay: 4000,
    // ユーザーがページネーション等を操作しても自動再生を止めない
    disableOnInteraction: false,
  },
  pagination: {
    el: '.hero-swiper .swiper-pagination',
    clickable: true,
  },
};

/**
 * ヒーローエリアのスライダー（Swiper）を初期化する
 */
function initHeroSlider() {
  const sliderEl = document.querySelector('.hero-swiper');

  // 対象要素がないページや、オフライン等でSwiper本体が読み込めなかった場合は終了する
  if (!sliderEl || typeof Swiper === 'undefined') {
    return;
  }

  new Swiper(sliderEl, HERO_SLIDER_OPTIONS);
}

initHeroSlider();
