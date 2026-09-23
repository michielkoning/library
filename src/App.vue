<script setup lang="ts">
import SummaryDetails from './components/SummaryDetails.vue';
import CenterWrapper from './components/CenterWrapper.vue';
import AppNotification from './components/AppNotification.vue';
import AppTabs from './components/AppTabs.vue';
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
      <app-tabs
        :tabs="[{
                  id: 'apple',
                  title: 'Apple',
                  text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic eos, libero iste asperiores quisquam inventore? Hic quaerat id recusandae, esse cumque omnis officia, debitis amet obcaecati suscipit exercitationem nisi? Possimus!',
                },
                {
                  id: 'apricot',
                  title: 'Apricot',
                  text: 'Commodi pariatur nobis alias ut voluptatem quas dignissimos, quia nam adipisci esse vitae corrupti totam itaque, cumque molestiae qui iste, molestias veniam!',
                },
                {
                  id: 'advocado',
                  title: 'Avocado',
                  text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas accusantium et debitis eos odio excepturi praesentium fugit nesciunt quidem aliquam quis pariatur, illo ipsam odit dolor quae dicta. Deserunt, est? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas accusantium et debitis eos odio excepturi praesentium fugit nesciunt quidem aliquam quis pariatur, illo ipsam odit dolor quae dicta. Deserunt, est? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas accusantium et debitis eos odio excepturi praesentium fugit nesciunt quidem aliquam quis pariatur, illo ipsam odit dolor quae dicta. Deserunt, est?',
                }]"
      />
    </center-wrapper>
  </div>
</template>

