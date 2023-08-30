<script setup lang="ts">
import type { OpenWeather } from '@/types';
import Icon from './Icon.vue';
import { computed } from 'vue';
import { converHpaToMmhg } from '@/util';

interface Props {
  wind?: OpenWeather.ResponseByCity['wind'];
  pressure?: number;
  feelsLike?: number;
  clouds?: OpenWeather.ResponseByCity['clouds'];
  timezone?: number;
  sunset?: number;
  sunrise?: number;
}

const props = defineProps<Props>();
const sunriseFormated = computed(() =>
  props.sunrise && props.timezone ? formatTime((props.sunrise + props.timezone) * 1000) : '---'
);
const sunsetFormated = computed(() =>
  props.sunset && props.timezone ? formatTime((props.sunset + props.timezone) * 1000) : '---'
);

function formatTime(timestamp: number) {
  return new Date(timestamp).toLocaleTimeString('ru-RU', {
    timeZone: 'Atlantic/Reykjavik',
  });
}
</script>

<template>
  <div :class="$style.main">
    <h3 class="title1 my-md">Today's highlight</h3>
    <div :class="$style.content">
      <div :class="[$style.card, $style.cardWind, 'flex', 'flex-col']">
        <div class="title2">Wind</div>
        <div class="flex justify-center flex-auto items-center">
          <Icon icon="equalizer.png" width="100" height="100" />
        </div>
        <div class="flex justify-between" style="padding-bottom: 25px">
          <div>
            {{ wind?.speed ? wind.speed : '---' }}
            <span class="text-body3">m/s</span>
          </div>
          <div>
            {{ wind?.deg ? wind.deg : '---' }}
            <span class="text-body3">deg</span>
          </div>
        </div>
      </div>
      <div :class="[$style.card, $style.cardPressure, 'flex', 'flex-col']">
        <div class="title2">Pressure</div>
        <div class="flex justify-center items-center flex-auto">
          <Icon icon="barometer.png" :width="140" :height="140" />
        </div>
        <div class="flex justify-center" style="padding-bottom: 25px">
          <div>
            {{ pressure ? converHpaToMmhg(pressure) : '---' }}
            <span class="text-body3">mm</span>
          </div>
        </div>
      </div>
      <div :class="[$style.card, 'flex', 'flex-col']">
        <div class="title2">Sunrise and sunset</div>
        <div class="flex justify-center items-center flex-auto">
          <Icon icon="sun-moving.png" :width="140" :height="140" />
        </div>
        <div class="flex justify-between" style="padding-bottom: 25px">
          <div class="flex flex-col">
            <Icon icon="sun.svg" :height="20" :width="20" />
            <div :class="$style.sun">Sunrise</div>
            <div :class="$style.time">{{ sunriseFormated }}</div>
          </div>
          <div class="flex flex-col items-end">
            <Icon :class="$style.flipIcon" icon="sun.svg" :height="20" :width="20" />
            <div :class="$style.sun">Sunset</div>
            <div :class="$style.time">{{ sunsetFormated }}</div>
          </div>
        </div>
      </div>
      <div :class="[$style.card, $style.cardGusts]">
        <div class="title2">Wind gusts</div>
        <div class="flex justify-between items-center" style="gap: 35px">
          <div :class="$style.number">
            {{ wind?.gust ? Math.round(wind.gust) : '---' }}
            <span class="text-body3">m/s</span>
          </div>
          <div class="flex flex-col">
            <Icon icon="gusts.svg" :width="20" :height="20" />
            <span class="text-body3">
              Learn
              <a
                :class="$style.link"
                href="https://www.windy.com/articles/weather-phenomena-what-s-the-difference-between-sustained-winds-and-wind-gusts-10390?satellite,7.787,115.115,5"
                target="_blank"
                >more</a
              >
              about gusts
            </span>
          </div>
        </div>
      </div>
      <div :class="[$style.card, $style.cardFeelsLike]">
        <div class="title2">Feels like</div>
        <div class="flex justify-between items-center" style="gap: 35px">
          <div :class="$style.number">
            {{ feelsLike ? Math.round(feelsLike) : '---' }}
            <span class="text-body3">°C</span>
          </div>
          <div class="flex flex-col">
            <Icon icon="humidity.svg" :width="16" :height="16" />
            <span class="text-body3">How hot or cold it really feels</span>
          </div>
        </div>
      </div>
      <div :class="$style.card">
        <div class="title2">Cloudiness</div>
        <div class="flex justify-between items-center" style="gap: 35px">
          <div :class="$style.number">
            {{ clouds?.all ? clouds.all + ' %' : '---' }}
          </div>
          <div class="flex flex-col">
            <Icon icon="cloud.svg" :width="20" :height="20" />
            <span class="text-body3">The sky fraction obscured by clouds</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.main {
  grid-area: b;
  border-radius: 15px;
  background-image: url('@/assets/icons/gradient-4.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 10px 20px;
}

.content {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 10px;
}

.card {
  border-radius: 10px;
  padding: 10px 20px;
  background-image: url('@/assets/icons/gradient-2.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.number {
  min-width: 60px;
}

.flipIcon {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}

.sun {
  color: var(--color-gold);
  font-size: 0.8rem;
  font-weight: 600;
  margin-top: 5px;
}

.time {
  font-size: 0.9rem;
  font-weight: bold;
}

.link {
  color: inherit;
  &:hover {
    color: azure;
  }
}

@media (max-width: 768px) {
  .main {
    padding: 0 10px 20px 10px;
  }
  .content {
    grid-template-columns: repeat(1, 1fr);
  }

  .cardWind {
    grid-area: 1;
  }

  .cardGusts {
    grid-area: 2;
  }

  .cardPressure {
    grid-area: 3;
  }

  .cardFeelsLike {
    grid-area: 4;
  }
}
</style>
