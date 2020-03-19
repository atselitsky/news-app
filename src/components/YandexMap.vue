<template>
  <div class="map pt-5">
      <yandex-map :settings="localSettings" :controls="[]" :coords="coords" :zoom="15">
        <ymap-marker :coords="coords" marker-id="1" />
      </yandex-map>
  </div>
</template>

<script>
import settings from "@/enums/mapSettings.js";
import { yandexMap, ymapMarker } from "vue-yandex-maps";
export default {
  name: "YandexMap",
  components: { yandexMap, ymapMarker },
  data() {
    return {
      localSettings: settings,
      coords: [48.463289, 135.084215]
    };
  },
};
</script>

<style lang="scss" scoped>
.map {
  width: 80vw;
}
.ymap-container {
  height: 500px;
}
</style>