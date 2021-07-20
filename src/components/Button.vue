<template>
  <div class="butt-on" :style="cssVars" v-if="type === 'bubble'">
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="goo">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>

    <span ref="root" class="button--bubble__container">
      <a
        href="#campaign"
        :class="darkMode ? 'text-white' : 'text-black'"
        class="button button--bubble"
      >
        {{ message }}
      </a>
      <span class="button--bubble__effect-container">
        <span class="circle top-left"></span>
        <span class="circle top-left"></span>
        <span class="circle top-left"></span>

        <span class="button effect-button"></span>

        <span class="circle bottom-right"></span>
        <span class="circle bottom-right"></span>
        <span class="circle bottom-right"></span>
      </span>
    </span>
  </div>
</template>

<script>
import gsap from "gsap";
import { getCurrentInstance, watchEffect } from "@vue/runtime-core";
import { ref, onMounted } from "vue";
export default {
  name: "Button",
  props: {
    message: String,
    color: String,
    type: String,
    darkMode: Boolean,
  },
  setup() {
    const root = ref(null);

    onMounted(() => {
      var buttonBubble = root.value;
      var $circlesTopLeft = []; //? BUBBLES - TOP LEFT
      var $circlesBottomRight = []; //? BUBBLES - TOP RIGHT

      // <span class="button--bubble__effect-container">
      var buttonParent = buttonBubble.childNodes.item(1);

      //* Bubble childs are being pushed in arrays
      for (var j = 0; j < buttonParent.childNodes.length; j++) {
        if (buttonParent.childNodes.item(j).className == "circle top-left") {
          $circlesTopLeft.push(buttonParent.childNodes.item(j));
        } else if (
          buttonParent.childNodes.item(j).className == "circle bottom-right"
        ) {
          $circlesBottomRight.push(buttonParent.childNodes.item(j));
        }
      }
      //! Bubble childs are pushed in arrays

      //* INIT:: TIMELINE ::
      var tl = gsap.timeline();
      var tl2 = gsap.timeline();

      var btTl = gsap.timeline({ paused: true });
      //! END INIT:: TIMELINE ::

      //* START:: BUBBLES TOP LEFT ANIMATION ::
      tl.to($circlesTopLeft, {
        duration: 1.7,
        x: -25,
        y: -25,
        scaleY: 2,
        ease: "slow(0.1, 0.7, false)",
      });
      tl.to($circlesTopLeft[0], {
        duration: 0.1,
        scale: 0.2,
        x: "+=6",
        y: "-=2",
      });
      tl.to(
        $circlesTopLeft[1],
        { duration: 0.1, scaleX: 1, scaleY: 0.8, x: "-=10", y: "-=7" },
        "-=0.1"
      );
      tl.to(
        $circlesTopLeft[2],
        { duration: 0.1, scale: 0.2, x: "-=15", y: "+=6" },
        "-=0.1"
      );
      tl.to($circlesTopLeft[0], {
        duration: 1,
        scale: 0,
        x: "-=5",
        y: "-=15",
        opacity: 0,
      });
      tl.to(
        $circlesTopLeft[1],
        {
          duration: 1,
          scaleX: 0.4,
          scaleY: 0.4,
          x: "-=10",
          y: "-=10",
          opacity: 0,
        },
        "-=1"
      );
      tl.to(
        $circlesTopLeft[2],
        { duration: 1, scale: 0, x: "-=15", y: "+=5", opacity: 0 },
        "-=1"
      );

      //! END:: BUBBLES TOP LEFT ANIMATION ::

      //* INIT:: TIMELINE ::
      var tlBt1 = gsap.timeline();
      var tlBt2 = gsap.timeline();
      //! END INIT:: TIMELINE ::

      tlBt1.set($circlesTopLeft, { x: 0, y: 0, rotation: -45 });
      tlBt1.add(tl);

      //* START:: BUBBLE BOTTOM RIGHT ANIMATION ::
      tl2.set($circlesBottomRight, { x: 0, y: 0 });
      tl2.to($circlesBottomRight, {
        duration: 1.7,
        x: 30,
        y: 30,
        ease: "slow(0.1, 0.7, false)",
      });
      tl2.to($circlesBottomRight[0], {
        duration: 0.1,
        scale: 0.2,
        x: "-=6",
        y: "+=3",
      });
      tl2.to(
        $circlesBottomRight[1],

        { duration: 0.1, scale: 0.8, x: "+=7", y: "+=3" },
        "-=0.1"
      );
      tl2.to(
        $circlesBottomRight[2],
        { duration: 0.1, scale: 0.2, x: "+=15", y: "-=6" },
        "-=0.2"
      );
      tl2.to($circlesBottomRight[0], {
        duration: 1,
        scale: 0,
        x: "+=5",
        y: "+=15",
        opacity: 0,
      });
      tl2.to(
        $circlesBottomRight[1],
        { duration: 1, scale: 0.4, x: "+=7", y: "+=7", opacity: 0 },
        "-=1"
      );
      tl2.to(
        $circlesBottomRight[2],
        { duration: 1, scale: 0, x: "+=15", y: "-=5", opacity: 0 },
        "-=1"
      );
      //! END:: BUBBLE BOTTOM RIGHT ANIMATION ::

      tlBt2.set($circlesBottomRight, { x: 0, y: 0, rotation: 45 });
      tlBt2.add(tl2);

      btTl.add(tlBt1);
      btTl.to(
        buttonBubble.children[1].querySelector(".button.effect-button"),
        { duration: 0.8, scaleY: 1.1 },
        0.1
      );
      btTl.add(tlBt2, 0.2);
      btTl.to(
        buttonBubble.children[1].querySelector(".button.effect-button"),
        { duration: 1.8, scale: 1, ease: "elastic.Out(1.2, 0.4)" },
        1.2
      );

      btTl.timeScale(2.6);

      // Mouse hover Listener
      buttonBubble.addEventListener("mouseover", function () {
        btTl.restart();
      });
    });

    return {
      root,
    };
  },
  computed: {
    cssVars() {
      return {
        "--bg": this.color,
      };
    },
  },
};
</script>

<style>
</style>