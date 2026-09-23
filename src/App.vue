<script setup lang="ts">
import SummaryDetails from './components/SummaryDetails.vue';
import CenterWrapper from './components/CenterWrapper.vue';
import AppNotification from './components/AppNotification.vue';
</script>

<template>
  <div>
    <center-wrapper>
      <summary-details
        title="Hic eos, libero iste asperiores"
        style="margin-bottom: 1em;"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic eos, libero iste asperiores quisquam inventore? Hic quaerat id recusandae, esse cumque omnis officia, debitis amet obcaecati suscipit exercitationem nisi? Possimus!
      </summary-details>
      <app-notification
        text="test"
        variant="danger"
      />
      <app-notification
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic eos, libero iste asperiores quisquam inventore? Hic quaerat id recusandae, esse cumque omnis officia, debitis amet obcaecati suscipit exercitationem nisi? Possimus!"
        variant="success"
      />
      <app-notification
        text="test"
        variant="warning"
      />
      <app-notification
        text="test"
        variant="info"
      />
    </center-wrapper>
  </div>
</template>

