<script lang="ts" setup>
interface Props {
  text?: string
  height?: string
  vertical?: boolean
}

withDefaults(defineProps<Props>(), {
  text: 'Loading...',
  height: '40vh',
  vertical: false,
})
</script>

<template>
  <div class="init-loading-container" :style="{ height }">
    <div
      class="init-loading init-loading--circular"
      :class="[{ 'init-loading--vertical': vertical }]"
    >
      <span
        class="init-loading__spinner init-loading__spinner--circular"
        style="width: 24px; height: 24px"
      >
        <svg viewBox="25 25 50 50" class="init-loading__circular">
          <circle cx="50" cy="50" r="20" fill="none" />
        </svg>
      </span>
      <span id="loading-text" class="init-loading__text">{{ text }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.init-loading-container {
  display: flex;
  align-items: center;
  justify-content: center;

  .init-loading {
    position: relative;
    color: #8c8c8c;
    font-size: 0;
    vertical-align: middle;
    padding: 10px 0;

    &__spinner {
      position: relative;
      display: inline-block;
      width: 30px;
      max-width: 100%;
      height: 30px;
      max-height: 100%;
      vertical-align: middle;
      animation: van-rotate 0.8 linear infinite;

      &--spinner {
        animation-timing-function: steps(12);
      }

      &--circular {
        animation-duration: 2s;
      }
    }

    &__line {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      &::before {
        display: block;
        width: 2px;
        height: 25%;
        margin: 0 auto;
        background-color: currentColor;
        border-radius: 40%;
        content: ' ';
      }
    }

    &__circular {
      display: block;
      width: 100%;
      height: 100%;

      circle {
        animation: bc-circular 1.5s ease-in-out infinite;
        stroke: currentColor;
        stroke-width: 3;
        stroke-linecap: round;
      }
    }

    &__text {
      display: inline-block;
      margin-left: 8px;
      color: #969799;
      font-size: 14px;
      // font-size: 1rem;
      vertical-align: middle;
    }

    &--vertical {
      display: flex;
      flex-direction: column;
      align-items: center;

      .init-loading__text {
        margin: 8px 0 0;
      }
    }
  }
}

@keyframes bc-circular {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40;
  }

  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120;
  }
}

@for $i from 1 through 12 {
  .init-loading__line--#{$i} {
    transform: rotate($i * 30deg);
    opacity: calc(1 - (0.75 / 12) * (#{$i} - 1));
  }
}
</style>
